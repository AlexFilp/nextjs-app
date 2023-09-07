"use client";
import { SignUpSchema } from "@/services/yupSchemas";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleRepeatPasswordVisible = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const handleSubmit = async (
    values: RegisterValues,
    actions: FormikHelpers<RegisterValues>
  ) => {
    const { repeatPassword, ...restValues } = values;
    alert(JSON.stringify(restValues, null, 2));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          const isValid = (field: keyof RegisterValues) =>
            touched[field] && errors[field] ? false : true;
          const nameValid = isValid("name");
          const emailValid = isValid("email");
          const passwordValid = isValid("password");
          const repeatPasswordValid = isValid("repeatPassword");

          return (
            <Form
              className="flex flex-col gap-5 w-full tablet:w-96"
              autoComplete="on"
            >
              <label className="label">
                <span className="ml-1">Name</span>
                <Field
                  type="text"
                  name="name"
                  className={`input ${!nameValid && "border-red-600"}`}
                />
                <p className="errorMessage">
                  <ErrorMessage name="name" />
                </p>
              </label>
              <label className="label">
                <span className="ml-1">Email</span>
                <Field
                  type="email"
                  name="email"
                  className={`input ${!emailValid && "border-red-600"}`}
                />
                <p className="errorMessage">
                  <ErrorMessage name="email" />
                </p>
              </label>
              <label className="label">
                <span className="ml-1">Password</span>
                <div className="relative">
                  <Field
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    autoComplete="off"
                    className={`input pr-10 ${
                      !passwordValid && "border-red-600"
                    }`}
                  />
                  <button
                    onClick={handlePasswordVisible}
                    type="button"
                    className="passwordBtn"
                  >
                    {!passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
                <p className="errorMessage">
                  <ErrorMessage name="password" />
                </p>
              </label>
              <label className="label">
                <span className="ml-1">Repeat password</span>
                <div className="relative">
                  <Field
                    type={repeatPasswordVisible ? "text" : "password"}
                    name="repeatPassword"
                    autoComplete="off"
                    className={`input pr-10 ${
                      !repeatPasswordValid && "border-red-600"
                    }`}
                  />
                  <button
                    onClick={handleRepeatPasswordVisible}
                    type="button"
                    className="passwordBtn"
                  >
                    {!repeatPasswordVisible ? (
                      <AiFillEye />
                    ) : (
                      <AiFillEyeInvisible />
                    )}
                  </button>
                </div>
                <p className="absolute max-[339px]:-bottom-7 right-1 min-[340px]:top-0 text-red-600 text-[15px]">
                  <ErrorMessage name="repeatPassword" />
                </p>
              </label>
              <button type="submit" className="submitBtn">
                Sign Up
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
