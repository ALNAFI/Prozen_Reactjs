import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WowInit() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = () => {
      if (!window.WOW) return false;
      const wow = new window.WOW({ live: false });
      wow.init();
      window.dispatchEvent(new Event("scroll"));
      return true;
    };

    if (!init()) {
      let tries = 0;
      const interval = setInterval(() => {
        tries += 1;
        if (init() || tries > 30) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [location.pathname]);

  return null;
}
