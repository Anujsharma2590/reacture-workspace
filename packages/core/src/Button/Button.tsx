/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { makeStyles } from '../utils/makeStyles';
import { useTheme } from '@reacture/theme';

// Extend ButtonProps with native button attributes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { tokens } = useTheme();
  const { label, primary = false, style, ...rest } = props; // Spread native props

  // Define button styles using makeStyles utility
  const buttonStyles = makeStyles({
    backgroundColor: primary ? tokens.colorBrandPrimary : 'transparent',
    color: tokens.colorNeutralForeground3,
    padding: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase300,
    border: 'none',
    cursor: 'pointer',
  });

  return (
    <button
      css={buttonStyles}
      style={style} // Allow inline styles from props
      {...rest} // Spread native button attributes
    >
      {label}
    </button>
  );
};

export default Button;
