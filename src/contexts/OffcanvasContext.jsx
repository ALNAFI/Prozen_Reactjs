import { createContext, useContext, useState } from "react";

const OffcanvasContext = createContext(null);

export function OffcanvasProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = () => setIsOpen(true);
  const closeOffcanvas = () => setIsOpen(false);

  return (
    <OffcanvasContext.Provider
      value={{ isOpen, openOffcanvas, closeOffcanvas }}
    >
      {children}
    </OffcanvasContext.Provider>
  );
}

export function useOffcanvas() {
  const ctx = useContext(OffcanvasContext);
  if (!ctx) {
    return {
      isOpen: false,
      openOffcanvas: () => {},
      closeOffcanvas: () => {},
    };
  }
  return ctx;
}
