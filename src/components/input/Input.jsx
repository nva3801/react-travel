import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 6px 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  .input::-webkit-input-placeholder {
    color: #84878b;
  }
  .input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;
  }
`;

const Input = ({
  type = "text",
  name = "",
  children,
  control,
  className,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative w-full">
      <input
        className={`${className} w-full p-5 duration-200 ease-in border border-transparent rounded-lg bg-grayLight focus:border-primary focus:bg-white font-medium`}
        type={type}
        id={name}
        {...field}
        {...props}
      />
      {children ? (
        <span className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-5">
          {children}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
