import { Check, ChevronDown } from "lucide-react";
import React from "react";

type Option = {
  value: string;
  label: string;
};

interface CheckDropdownProps {
  options: Option[];
  label: string;
}

const CheckDropdown: React.FC<CheckDropdownProps> = ({ options, label }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

  // add or remove option from selected options
  const handleOptionClick = (option: Option) => {
    console.log(option);
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

  return (
    <div className="relative border-2 border-darkgreen/40 bg-darkgreen/10 rounded-xl px-4 p-2 cursor-pointer">
      <label
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center font-medium"
      >
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
        className={`absolute top-full border-2 border-darkgreen/40 bg-white w-full left-0 mt-2 rounded-lg transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option) => (
          <li
            onClick={() => handleOptionClick(option)}
            key={option.value}
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
