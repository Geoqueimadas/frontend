import React from "react";
import { InputHTMLAttributes } from "react";

const InputForm = ({ type, customClass, onChange, id, name, value, error }) => {
  const onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const formattedValue = value;

    if (onChange !== undefined) {
      onChange({
        ...e,
        target: {
          name,
          value: formattedValue,
        },
      });
    }
  };

  return (
    <div>
      <input
        type={type}
        className={`w-full ${customClass}`}
        onChange={onInputChange}
        id={id}
        name={name}
        value={value}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default InputForm;
