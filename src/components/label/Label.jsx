import React from "react";

const Label = ({ htmlFor = "", children }) => {
  return (
    <label htmlFor={htmlFor} className="text-base font-medium cursor-pointer">
      {children}
    </label>
  );
};

export default Label;
