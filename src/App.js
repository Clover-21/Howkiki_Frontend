import React, { useEffect, useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import StartPage from "./pages/manager/start";
import OrderWaitingPage from "./pages/manager/orderWaiting";
import OrderPreparingPage from "./pages/manager/orderPreparing";
import ReadyCompletePage from "./pages/manager/readyComplete";
import PayCompletePage from "./pages/manager/payComplete";
import FullOrderPage from "./pages/manager/fullOrder";
import TableManagePage from "./pages/manager/tableManage";
import PackagingPage from "./pages/manager/packaging";
import SuggestionPage from "./pages/manager/suggestion";
import ChatBotStart from "./pages/chatbot/chatBotStart";
import ChatBot from "./pages/chatbot/chatBot";
import OrderSummaryPage from "./pages/chatbot/orderSummary";
import useSSE from "./hooks/useSSE";
import NotificationModal from "./components/NotificationModal";

function App() {
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [currentStore, setCurrentStore] = useState(
    localStorage.getItem("currentStore") || null
  );
  const [storeId, setStoreId] = useState(
    currentStore
      ? parseInt(localStorage.getItem(`${currentStore}_storeId`))
      : null
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedStore = localStorage.getItem("currentStore") || null;
      setCurrentStore(updatedStore);
      setStoreId(
        updatedStore
          ? parseInt(localStorage.getItem(`${updatedStore}_storeId`))
          : null
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!storeId) return;

    let fetchedToken = null;
    let tableNumber = null;

    if (
      location.pathname.includes("/chatbot") ||
      location.pathname.includes("/ordersummary")
    ) {
      tableNumber = location.pathname.split("/")[2];
      fetchedToken = sessionStorage.getItem(`chatbot_token_${tableNumber}`);
    } else {
      fetchedToken = sessionStorage.getItem(`${storeId}_token`);
    }

    setToken(fetchedToken || null);
  }, [location.pathname, storeId]);

  const { notice, isOpen, setIsOpen } = useSSE(token);

  const isManagerPage = [
    "/waiting",
    "/preparing",
    "/readycomplete",
    "/paycomplete",
    "/fullorder",
    "/tablemanage",
    "/packaging",
    "/suggestion",
  ].some((path) => location.pathname.includes(path));

  const isChatBotPage =
    location.pathname.includes("/chatbot") ||
    location.pathname.includes("/ordersummary");

  const isNotificationVisible = useMemo(() => {
    return (
      (isManagerPage &&
        notice?.noticeName.trim() !== "운영자의 주문 취소 알림") ||
      (isChatBotPage && notice?.noticeName.trim() === "운영자의 주문 취소 알림")
    );
  }, [isManagerPage, isChatBotPage, notice]);

  useEffect(() => {
    console.log("isManagerPage:", isManagerPage);
    console.log("isChatBotPage:", isChatBotPage);
    console.log("현재 알림 notice:", notice);
    console.log("isNotificationVisible:", isNotificationVisible);
  }, [isNotificationVisible, notice]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/waiting" element={<OrderWaitingPage />} />
        <Route path="/preparing" element={<OrderPreparingPage />} />
        <Route path="/readycomplete" element={<ReadyCompletePage />} />
        <Route path="/paycomplete" element={<PayCompletePage />} />
        <Route path="/fullorder" element={<FullOrderPage />} />
        <Route path="/tablemanage" element={<TableManagePage />} />
        <Route path="/packaging" element={<PackagingPage />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
        <Route path="/chatstart/:tableNumber" element={<ChatBotStart />} />
        <Route path="/chatbot/:tableNumber" element={<ChatBot />} />
        <Route
          path="/ordersummary/:tableNumber"
          element={<OrderSummaryPage />}
        />
      </Routes>
      {isNotificationVisible && (
        <NotificationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          notice={notice}
        />
      )}
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
