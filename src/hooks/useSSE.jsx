import { useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

const API_URL = process.env.REACT_APP_API_URL;

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
          heartbeatTimeout: 45000,
        }
      );

      eventSource.onopen = () => console.log("SSE 연결 성공!");

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
        eventSource.close();
        setTimeout(connectSSE, 5000); // 5초 후 다시 연결 시도
      };
    };

    connectSSE();

    return () => {
      console.log("SSE 연결 해제");
      eventSource?.close();
    };
  }, [token]);

  return { notice, isOpen, setIsOpen };
}
