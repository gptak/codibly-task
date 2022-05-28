import React from "react";
import useNumberInput from "./useNumberInput";

const NumberInput = () => {
  const { filter, handleInput, handleFilter } = useNumberInput();

  return (
    <div>
      <input
        type="number"
        min={1}
        value={filter}
        onChange={handleInput}
        onKeyUp={handleFilter}
      />
    </div>
  );
};

export default NumberInput;
