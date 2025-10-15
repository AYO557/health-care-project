import type React from "react";

interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined" | "text" | "link" | "icon";
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "contained",
  startAdornment,
  endAdornment,
  onClick,
  disabled = false,
  className = "",
}) => {
  // Base classes that apply to all buttons
  const baseClasses =
    "rounded-lg font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2";

  // Size and layout classes
  const sizeClasses = "w-full px-4 py-2";

  // Variant-specific classes
  const variantClasses = {
    contained:
      "bg-darkgreen text-white hover:bg-tertiary-color active:bg-main-color focus:outline-none focus:ring-2 focus:ring-lightgreen focus:ring-opacity-50",
    outlined:
      "border-2 border-darkgreen text-darkgreen bg-transparent hover:bg-darkgreen hover:text-white active:bg-tertiary-color focus:outline-none focus:ring-2 focus:ring-lightgreen",
    text: "text-darkgreen bg-transparent hover:bg-lightgraygreen active:bg-quaternary-color focus:outline-none focus:ring-2 focus:ring-lightgreen px-2",
    link: "text-darkgreen bg-transparent underline hover:text-lightgreen active:text-quinary-color focus:outline-none focus:ring-2 focus:ring-lightgreen px-2",
    icon: "bg-darkgreen text-white hover:bg-tertiary-color active:bg-main-color focus:outline-none focus:ring-2 focus:ring-lightgreen w-auto aspect-square p-2",
  };

  // Disabled state classes
  const disabledClasses = "opacity-50 cursor-not-allowed";

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses}
    ${variantClasses[variant]}
    ${disabled ? disabledClasses : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {startAdornment && startAdornment}
      {/* Hide text for icon variant if no adornments */}
      {(variant !== "icon" || startAdornment || endAdornment) && text}
      {endAdornment && endAdornment}
    </button>
  );
};

export default Button;
