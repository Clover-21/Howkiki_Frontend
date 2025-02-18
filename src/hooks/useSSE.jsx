import { useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export default function useSSE(token) {
  const [notice, setNotice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!token) return;

    const fetchSSE = () => {
      const eventSource = new EventSourcePolyfill(
        `http://15.164.233.144:8080/notification/subscribe`,
        {
          headers: {
            sessionToken: "1111",
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          heartbeatTimeout: 30000,
        }
      );

      eventSource.onopen = () => {
        console.log("SSE 연결 성공! 이제 알림을 받을 준비가 되었습니다.");
      };

      eventSource.addEventListener("notification", (event) => {
        console.log("알림 : ", event.data);
        try {
          const newNotice = JSON.parse(event.data);
          setNotice(newNotice);
          setIsOpen(true);
        } catch (error) {
          console.error("알림 오류:", error);
        }
      });

      eventSource.onerror = (error) => {
        console.error("SSE 알림 연결 오류:", error);
        eventSource.close();
      };
    };
    fetchSSE();
  }, [token]);

  return { notice, isOpen, setIsOpen };
}
