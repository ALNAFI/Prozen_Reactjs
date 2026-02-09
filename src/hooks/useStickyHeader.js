import { useState, useEffect } from "react";
export const useStickyHeader = (threshold = 250) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > threshold);
    };

    handleScroll();
    const options = { passive: true };
    window.addEventListener("scroll", handleScroll, options);
    return () => window.removeEventListener("scroll", handleScroll, options);
  }, [threshold]);

  return isSticky;
};
