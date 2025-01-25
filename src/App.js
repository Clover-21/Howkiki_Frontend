import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import StartPage from "./pages/start";
import OrderWaitingPage from "./pages/orderWaiting";
import OrderPreparingPage from "./pages/orderPreparing";
import ReadyCompletePage from "./pages/readyComplete";
import PayCompletePage from "./pages/payComplete";
import FullOrderPage from "./pages/fullOrder";
import TableManagePage from "./pages/tableManage";
import PackagingPage from "./pages/packaging";
import SuggestionPage from "./pages/suggestion";
import ChatBotStart from "./pages/chatBotStart";
import ChatBot from "./pages/chatBot";
import OrderSummaryPage from "./pages/orderSummary";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/chatbot") {
      setScreenSize();
    }
    if (location.pathname === "/chatstart") {
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
        <Route path="/chatstart" element={<ChatBotStart />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/ordersummary" element={<OrderSummaryPage />} />
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
