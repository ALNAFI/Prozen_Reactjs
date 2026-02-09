import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  const location = useLocation();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Refresh AOS on every route change so new elements animate
  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

