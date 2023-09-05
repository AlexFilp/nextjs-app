"use client";
import { SignInSchema } from "@/services/yupSchemas";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const router = useRouter();

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
        <Form className="flex flex-col gap-5 w-96" autoComplete="on">
          <label className="label">
            <span className="ml-1">Email</span>
            <Field type="email" name="email" className="input" />
            <p className="errorMessage">
              <ErrorMessage name="email" />
            </p>
          </label>
          <label className="label">
            <span className="ml-1">Password</span>
            <Field
              type="password"
              name="password"
              autoComplete="off"
              className="input"
            />
            <p className="errorMessage">
              <ErrorMessage name="password" />
            </p>
          </label>
          <button type="submit" className="submitBtn">
            Sign In
          </button>
        </Form>
      </Formik>
    </>
  );
};
