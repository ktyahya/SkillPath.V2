import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Careers from "./pages/Careers";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ParentDashboard from "./pages/ParentDashboard";
import "./styles/globals.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }) {
  const { pathname } = useLocation();
  const hideNav = pathname === "/login";
  const hideFooter = pathname === "/assessment" || pathname === "/login";

  return (
    <>
      {!hideNav && <Navbar />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
