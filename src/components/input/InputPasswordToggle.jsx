import React, { Fragment, useState } from "react";
import { IconEyeClose, IconEyeOpen } from "../icon";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        control={control}
        className="pr-16"
      >
        {!togglePassword ? (
          <IconEyeOpen onClick={() => setTogglePassword(true)}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(false)}></IconEyeClose>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
