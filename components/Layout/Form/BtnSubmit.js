import React from "react";

const BtnSubmit = (props) => {
  const { name, customClass } = props;

  return (
    <button type="submit" className={`${customClass}`}>
      {name}
    </button>
  );
};

export default BtnSubmit;
