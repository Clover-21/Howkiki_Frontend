import { useEffect, useState } from "react";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export default function useSSE(token) {
  const [notice, setNotice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!token) return;

    const eventSource = new EventSource(`${host}/notification/subscribe`, {
      headers: { sessionToken: token },
    });

    eventSource.onmessage = (event) => {
      console.log("새로운 알림:", event.data);
      try {
        const newNotice = JSON.parse(event.data);
        setNotice(newNotice);
        setIsOpen(true);
        console.log("모달 오픈");
      } catch (error) {
        console.error("알림 오류:", error);
      }
    };

    eventSource.onerror = (error) => {
      console.error("SSE 연결 오류:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [token]);

  return { notice, isOpen, setIsOpen };
}
