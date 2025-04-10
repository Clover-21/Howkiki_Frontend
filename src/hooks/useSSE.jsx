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

      eventSource.addEventListener("ping", (event) => {
        // ping 무시
      });

      eventSource.addEventListener("notification", (event) => {
        try {
          const newNotice = JSON.parse(event.data);
          setNotice({ ...newNotice, receivedAt: Date.now() });
          setIsOpen(true);
        } catch (error) {
          console.error("알림 오류:", error);
        }
      });

      eventSource.onerror = (error) => {
        console.error("SSE 연결 오류:", error);
        eventSource.close();
        connectSSE();
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

  useEffect(() => {
    if (notice) {
      setIsOpen(true);
    }
  }, [notice]);

  return { notice, isOpen, setIsOpen };
}
