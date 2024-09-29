import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Profile from "./pages/Profile/Profile";
import MainLayout from "./components/Layout/MainLayout";
import "./App.css"; 
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from 'aos'

const App = () => {
   // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, 
    });
  }, []);
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
