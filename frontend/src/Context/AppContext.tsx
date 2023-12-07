// src/contexts/MyContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextProps {
  state: any; // Define a more specific type according to your state structure
  updateState: (newState: any) => void; // Again, use a more specific type for newState
}

const AppContext = createContext<AppContextProps | null>(null);

export const useAppContext = () => useContext(AppContext) as AppContextProps;

interface AppContextProvider {
  children: ReactNode;
}

export const AppContextProvider : React.FC<AppContextProvider> = ({ children }) => {
  const [state, setState] = useState({}); // Define a more specific type for initial state

  const updateState = (newState: any) => { // Use specific type for newState
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};
