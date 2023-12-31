"use client";
import { SignInSchema } from "@/services/yupSchemas";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

interface LoginValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (response && !response.error) {
      router.push("/profile");
      actions.resetForm();
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          const isValid = (field: keyof LoginValues) =>
            touched[field] && errors[field] ? false : true;
          const emailValid = isValid("email");
          const passwordValid = isValid("password");

          return (
            <Form
              className="flex flex-col gap-5 w-full tablet:w-96"
              autoComplete="on"
            >
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
              <button type="submit" className="submitBtn">
                Sign In
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
