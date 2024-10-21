import React, { FC } from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
