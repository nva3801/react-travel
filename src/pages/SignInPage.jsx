import React from "react";
import { NavLink } from "react-router-dom";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input, InputPasswordToggle } from "../components/input";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";

const SignInPage = () => {
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
    <div className="h-[100vh] flex items-center justify-center flex-col">
      <div className="max-w-[700px] mx-auto text-center">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <NavLink to="/" className="w-full">
            <img src="logo.png" alt="" className="w-[50%] mx-auto" />
          </NavLink>

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
            Bạn chưa có tài khoản?
            <NavLink to="/sign-up" className="text-primary">
              Đăng ký
            </NavLink>
          </div>
          <Button
            type="submit"
            className="h-[66px] w-full"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
