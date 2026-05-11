"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  preventPopup: boolean;
  setPreventPopup: (prevent: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [preventPopup, setPreventPopup] = useState(false);

  return (
    <NavigationContext.Provider value={{ preventPopup, setPreventPopup }}>
      {children}
    </NavigationContext.Provider>
  );
}
