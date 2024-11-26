import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import OrderWaitingPage from "./pages/orderWaiting";
import OrderPreparingPage from "./pages/orderPreparing";
import OrderCompletePage from "./pages/orderComplete";
import OrderCheckPage from "./pages/orderCheck";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<OrderWaitingPage />} />
          <Route path="/preparing" element={<OrderPreparingPage />} />
          <Route path="/complete" element={<OrderCompletePage />} />
          <Route path="/check" element={<OrderCheckPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
