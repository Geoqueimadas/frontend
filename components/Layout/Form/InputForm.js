import React from "react";

const InputForm = (props) => {
  const { type, customClass } = props;

  return <input type={type} className={`${customClass}`} />;
};

export default InputForm;
