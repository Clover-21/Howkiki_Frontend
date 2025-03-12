import { useEffect, useState } from "react";
import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";

const API_URL = process.env.REACT_APP_API_URL;
const activeSSEConnections = new Map();

export function closeSSEConnection(token) {
  if (activeSSEConnections.has(token)) {
    console.log(`SSE 연결 종료 (토큰: ${token})`);
    activeSSEConnections.get(token).close();
    activeSSEConnections.delete(token);
  }
}

export default function useSSE(token) {
  const [notice, setNotice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!token || activeSSEConnections.has(token)) return;

    const connectSSE = () => {
      const EventSource = EventSourcePolyfill || NativeEventSource;
      const eventSource = new EventSource(`${API_URL}/notification/subscribe`, {
        headers: {
          sessionToken: token,
          Accept: "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
        heartbeatTimeout: 45000,
      });

      eventSource.onopen = () => {
        console.log(`SSE 연결 성공! (토큰: ${token})`);
        activeSSEConnections.set(token, eventSource);
      };

      eventSource.addEventListener("notification", (event) => {
        try {
          const newNotice = JSON.parse(event.data);
          setNotice(newNotice);
          setIsOpen(true);
        } catch (error) {
          console.error("알림 오류:", error);
        }
      });

      eventSource.onerror = (error) => {
        console.error("SSE 연결 오류:", error);
        closeSSEConnection(token);

        setTimeout(connectSSE, 3000);
      };
    };

    connectSSE();

    return () => {
      closeSSEConnection(token);
    };
  }, [token]);

  return { notice, isOpen, setIsOpen };
}
