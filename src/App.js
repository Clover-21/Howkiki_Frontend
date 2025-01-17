import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import OrderWaitingPage from "./pages/orderWaiting";
import OrderPreparingPage from "./pages/orderPreparing";
import ReadyCompletePage from "./pages/readyComplete";
import PayCompletePage from "./pages/payComplete";
import FullOrderPage from "./pages/fullOrder";
import TableManagePage from "./pages/tableManage";
import PackagingPage from "./pages/packaging";
import SuggestionPage from "./pages/suggestion";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<OrderWaitingPage />} />
          <Route path="/preparing" element={<OrderPreparingPage />} />
          <Route path="/readycomplete" element={<ReadyCompletePage />} />
          <Route path="/paycomplete" element={<PayCompletePage />} />
          <Route path="/fullorder" element={<FullOrderPage />} />
          <Route path="/tablemanage" element={<TableManagePage />} />
          <Route path="/packaging" element={<PackagingPage />} />
          <Route path="/suggestion" element={<SuggestionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
