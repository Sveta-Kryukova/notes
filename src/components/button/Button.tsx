import React from "react";
import './Button.css'

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({ onClick, disabled = false, children }: ButtonProps) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      >
      {children}
    </button>
  );
};
