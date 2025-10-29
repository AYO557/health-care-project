import { Check, ChevronDown } from "lucide-react";
import React, { useEffect } from "react";

type Option = {
  value: string | number | boolean;
  label: string;
};

interface CheckDropdownProps {
  options: Option[];
  label: string;
  onSelect?: (options: Option["value"][]) => void;
}

const CheckDropdown: React.FC<CheckDropdownProps> = ({
  options,
  label,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

  useEffect(() => {
    // close dropdown when clicked outside
    document.body.addEventListener("click", () => setIsOpen(false));
  }, []);

  // add or remove option from selected options
  const handleOptionClick = (option: Option) => {
    setSelectedOptions((prevSelectedOptions) => {
      // check if option is already selected
      if (prevSelectedOptions.includes(option)) {
        // filter out option from selected options
        return prevSelectedOptions.filter((o) => o !== option);
      }
      // add option to selected options
      else {
        // add option to selected options
        return [...prevSelectedOptions, option];
      }
    });
  };

  useEffect(() => {
    onSelect?.(selectedOptions.map((o) => o.value));
  }, [selectedOptions]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
      className="relative border-2 border-darkgreen/40 bg-darkgreen/10 rounded-xl px-4 p-2 cursor-pointer"
    >
      <label className="flex justify-between items-center font-medium">
        <span>{label}</span>

        <ChevronDown
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={20}
        />
      </label>

      {/* dropdown */}
      <ul
        className={`absolute z-10 top-full border-2 border-darkgreen/40 bg-white w-full left-0 mt-2 rounded-lg transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option) => (
          <li
            onClick={() => handleOptionClick(option)}
            key={option.label}
            className="flex items-center gap-2 p-1 px-2 hover:bg-darkgreen/10"
          >
            <Check
              className={`${
                selectedOptions.includes(option) ? "opacity-100" : "opacity-0"
              }`}
              size={20}
            />
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckDropdown;
