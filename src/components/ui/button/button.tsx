import type React from "react";

interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined" | "text" | "link" | "icon";
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "contained",
  startAdornment,
  endAdornment,
}) => {
  return (
    <button className="w-full bg-darkgreen text-white p-2 rounded-lg font-bold cursor-pointer">
      {startAdornment && startAdornment}
      {text}
      {endAdornment && endAdornment}
    </button>
  );
};

export default Button;
