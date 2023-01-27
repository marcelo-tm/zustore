import { useState } from "react";

type QuantitySelectorProps = {
  quantity: number;
  onChange: (value: number) => void;
};

export function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  const [value, setValue] = useState(quantity);

  function subtractValue() {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      onChange(newValue);
    }
  }

  function incrementValue() {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <div className="flex gap-1 mt-3">
      <button
        onClick={subtractValue}
        className={`w-6 h-6 flex justify-center items-cente rounded-md cursor-pointer ${
          value === 1 ? "bg-border " : "bg-primary text-white"
        }`}
      >
        -
      </button>
      <div className="w-11 h-6 flex justify-center items-center bg-gray-100 rounded-md text-xs">
        {value}
      </div>
      <button
        onClick={incrementValue}
        className="w-6 h-6 flex justify-center items-center bg-primary text-white rounded-md cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
