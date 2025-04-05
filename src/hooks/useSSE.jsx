import { useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

const API_URL = process.env.REACT_APP_HTTPS_URL;

export default function useSSE(token) {
  const [notice, setNotice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!token) return;

    let eventSource;

    const connectSSE = () => {
      eventSource = new EventSourcePolyfill(
        `${API_URL}/notification/subscribe`,
        {
          headers: {
            sessionToken: token,
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
          },
          withCredentials: true,
          heartbeatTimeout: 45000,
        }
      );

      eventSource.onopen = () => {
        console.log(`SSE 연결 성공! (토큰: ${token})`);
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
      console.log(`SSE 연결 종료 (토큰: ${token})`);
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [token]);

  return { notice, isOpen, setIsOpen };
}
