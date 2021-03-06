import React from "react";
import { NavLink } from "react-router-dom";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input, InputPasswordToggle } from "../components/input";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange" });
  const handleSignUp = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(values);
        resolve();
      }, 5000);
    });
  };
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col md:px-5">
      <div className="max-w-[700px] mx-auto text-center">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <NavLink to="/" className="w-full">
            <img src="logo.png" alt="" className="w-[50%] mx-auto" />
          </NavLink>
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Enter your fullname"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              control={control}
              name="email"
              placeholder="Enter your email"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <InputPasswordToggle control={control}></InputPasswordToggle>
          </Field>
          <div className="flex items-start mb-5 gap-x-2">
            Bạn đã có tài khoản?
            <NavLink to="/sign-in" className="text-primary">
              Đăng nhập
            </NavLink>
          </div>
          <Button
            type="submit"
            className="h-[66px] w-full"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
