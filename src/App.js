import React, { useEffect } from "react";
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

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/chatbot") {
      setScreenSize();
    }
    if (location.pathname === "/chatstart") {
      setScreenSize();
    }
    if (location.pathname === "/ordersummary") {
      setScreenSize();
    }
  }, [location]);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

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
