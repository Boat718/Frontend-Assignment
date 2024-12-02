import React, { createContext, useContext, useState } from "react";
import { MockData } from "../types/mockData";

const HeaderContext = createContext<{
  headerData: MockData[];
  setHeaderData: React.Dispatch<React.SetStateAction<MockData[]>>;
} | null>(null);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [headerData, setHeaderData] = useState<any>(null);

  return (
    <HeaderContext.Provider value={{ headerData, setHeaderData }}>
      {children}
    </HeaderContext.Provider>
  );
};
