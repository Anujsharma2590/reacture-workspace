/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { makeStyles } from '../utils/makeStyles';
import { useTheme } from '@reacture/theme';

export interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { tokens } = useTheme();
  const { label, primary = false } = props;

  const buttonStyles = makeStyles({
    backgroundColor: primary ? tokens.colorBrandPrimary : 'transparent',
    color: tokens.colorNeutralForeground3,
    padding: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase300,
    border: 'none',
    cursor: 'pointer',
  });

  return (
    <button css={buttonStyles} {...props}>
      {label}
    </button>
  );
};

export default Button;
