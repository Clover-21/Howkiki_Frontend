import { useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

const API_URL = process.env.REACT_APP_API_URL;

export default function useSSE(token) {
  const [notice, setNotice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  console.log(token);
  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    if (!token) return;

    const eventSource = new EventSourcePolyfill(
      `${process.env.REACT_APP_API_URL}/notification/subscribe`,
      {
        headers: {
          sessionToken: token,
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

    return () => {
      console.log("SSE 연결 해제");
      eventSource.close();
    };
  }, [token]);

  return { notice, isOpen, setIsOpen };
}
