import React, { useState } from "react";
import { buttonStyle, headerStyle } from "~/styles/generic";

type Option = {
  value: string;
  label: string;
  disabled: boolean;
};

type onSelect = (value: string) => void;

type Props = {
  options: Option[];
  onSelect: onSelect;
};

const RadioButtons = ({ options, onSelect }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name="dynamicRadio"
            value={option.value}
            disabled={option.disabled}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.value} className={headerStyle + " px-2"}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
