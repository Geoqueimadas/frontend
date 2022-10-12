import React from "react";

const LabelForm = (props) => {
  const { name, customClass } = props;

  return (
    <label htmlFor="" className={`${customClass}`}>
      {name}
    </label>
  );
};

export default LabelForm;
