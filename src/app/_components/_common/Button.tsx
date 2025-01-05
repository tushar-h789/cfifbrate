import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`bg-primary_bg px-4 py-2 rounded-xl text-center font-medium text-lg text-secondary_text ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
