import React from "react";

const Field = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-5 mb-10">{children}</div>
  );
};

export default Field;
