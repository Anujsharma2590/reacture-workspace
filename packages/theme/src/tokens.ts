// src/tokens.ts

export type Tokens = {
  colorNeutralForeground3: string;
  colorBrandPrimary: string;
  spacingHorizontalM: string;
  fontSizeBase300: string;
};

// Define default tokens
export const defaultTokens: Tokens = {
  colorNeutralForeground3: "#000000",  // Black
  colorBrandPrimary: "#0078D4",        // Blue
  spacingHorizontalM: "8px",           // Medium spacing
  fontSizeBase300: "14px"              // Base font size
};
