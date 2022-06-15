import { LoadingSpinner } from "../loading";
import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  className = "",
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} className="inline-block">
        <button
          type={type}
          {...props}
          className={`px-6 text-base font-semibold leading-none rounded-lg cursor-pointer ${className} flex justify-center items-center disabled:opacity-50 disabled:pointer-events-none bg-primary text-white`}
        >
          {child}
        </button>
      </NavLink>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 text-base font-semibold leading-none rounded-lg cursor-pointer ${className} flex justify-center items-center disabled:opacity-50 disabled:pointer-events-none bg-primary text-white`}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
