import React, { createContext, ReactNode, useState } from 'react';

interface SidebarContextData {
  dashboard: boolean
  myRegisters: boolean;
  setDashboard(bool: boolean): void;
  setMyRegisters(bool: boolean): void;
}

export const SidebarContext = createContext({} as SidebarContextData);

interface SidebarProviderProps {
  children?: ReactNode;
}
const SidebarProvider: React.FC = ({ children }: SidebarProviderProps) => {
  const [dashboard, setDashboard] = useState<boolean>(true);
  const [myRegisters, setMyRegisters] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{
      dashboard,
      myRegisters,
      setDashboard,
      setMyRegisters,
    }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.defaultProps = {
  children: null,
};

export default SidebarProvider;
