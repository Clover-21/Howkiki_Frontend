import React, { useEffect, useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
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
import ChatOrderSuccess from "./pages/chatbot/chatOrderSuccess";
import { ChatBox } from "./styles/chatbot/chatBot.module";

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
  const navigate = useNavigate();

  const { notice, isOpen, setIsOpen } = useSSE(token);

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
    let fetchedToken = null;
    let tableNumber = null;

    if (
      location.pathname.includes("/chatbot") ||
      location.pathname.includes("/ordersummary")
    ) {
      const pathSegments = location.pathname.split("/");
      tableNumber = pathSegments[3];
      fetchedToken = sessionStorage.getItem(`chatbot_token_${tableNumber}`);
    } else {
      fetchedToken = sessionStorage.getItem(`${storeId}_token`);
    }

    setToken(fetchedToken || null);
  }, [location.pathname, storeId]);

  useEffect(() => {
    if (
      notice?.noticeName.trim() === "상태 업데이트" &&
      location.pathname.includes("/ordersummary")
    ) {
      setTimeout(() => {
        navigate(0);
      }, 100);
    }
  }, [notice, location.pathname, navigate]);

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

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/:storeId" element={<StartPage />} />
        <Route path="/:storeId/waiting" element={<OrderWaitingPage />} />
        <Route path="/:storeId/preparing" element={<OrderPreparingPage />} />
        <Route path="/:storeId/readycomplete" element={<ReadyCompletePage />} />
        <Route path="/:storeId/paycomplete" element={<PayCompletePage />} />
        <Route path="/:storeId/fullorder" element={<FullOrderPage />} />
        <Route path="/:storeId/tablemanage" element={<TableManagePage />} />
        <Route path="/:storeId/packaging" element={<PackagingPage />} />
        <Route path="/:storeId/suggestion" element={<SuggestionPage />} />
        <Route path="/orderSuccess" element={<ChatOrderSuccess />} />
        <Route
          path="/chatstart/:storeId/:tableNumber"
          element={<ChatBotStart />}
        />
        <Route path="/chatbot/:storeId/:tableNumber" element={<ChatBot />} />
        <Route
          path="/ordersummary/:storeId/:tableNumber"
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
