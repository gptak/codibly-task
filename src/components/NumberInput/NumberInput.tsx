import React from "react";
import useNumberInput from "./useNumberInput";

const NumberInput = () => {
  const { filter, handleInput } = useNumberInput();

  return (
    <div>
      <input type="number" min={1} value={filter} onChange={handleInput} />
    </div>
  );
};

export default NumberInput;
