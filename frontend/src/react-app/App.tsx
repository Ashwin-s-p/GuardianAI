import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CCTVMonitor from "./pages/CCTVMonitor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cctv" element={<CCTVMonitor />} />
      </Routes>
    </BrowserRouter>
  );
}