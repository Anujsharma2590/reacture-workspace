// src/ThemeProvider.tsx

import React, { createContext, ReactNode, useContext } from 'react';
import { Tokens, defaultTokens } from './tokens';

type ThemeContextType = {
  tokens: Tokens;
};

// Create a context with default tokens
const ThemeContext = createContext<ThemeContextType>({ tokens: defaultTokens });

type ThemeProviderProps = {
  children: ReactNode;
  customTokens?: Partial<Tokens>; 
};

export const ReactureProvider: React.FC<ThemeProviderProps> = ({ children, customTokens }) => {
  const mergedTokens: Tokens = { ...defaultTokens, ...customTokens };

  return (
    <ThemeContext.Provider value={{ tokens: mergedTokens }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme tokens
export const useTheme = () => {
  return useContext(ThemeContext);
};

