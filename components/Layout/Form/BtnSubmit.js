import React from "react";

const BtnSubmit = (props) => {
  const { name, customClass } = props;

  return (
    <button type="submit" className={`px-4 py-2 text-lg font-semibold rounded bg-red-main text-white hover:bg-black transition 
    ease-in duration-1000 ${customClass}`}>
      {name}
    </button>
  );
};

export default BtnSubmit;
