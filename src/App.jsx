import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layouts/PublicLayout";
import Home from "./pages/public/Home";
import Menu from "./pages/public/Menu";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import AdminMenu from "./pages/admin/AdminMenu";
import AdminLayout from "./components/layouts/AdminLayout";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminSales from "./pages/admin/AdminSales";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* PUBLIC WEBSITE */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* ADMIN */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/menu" element={<AdminMenu />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/sales" element={<AdminSales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;