import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TestsPage from "./pages/TestsPages";
import Navbar from "./components/Navbar";
import PricingPage from "./pages/PricingPage";
import AboutUsPage from "./pages/AboutUsPage";
import LiveTest from "./pages/LiveTest";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/tests" element={<TestsPage />}></Route>
        <Route path="/test/:id" element={<LiveTest />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
