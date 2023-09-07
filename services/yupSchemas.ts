import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters long")
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/`"'-=|]*$/,
      "You can only use Latin letters, numbers and symbols!"
    )
    .required("Required"),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "Minimum 2 characters long").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters long")
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/`"'-=|]*$/,
      "You can only use Latin letters, numbers and symbols!"
    )
    .required("Required"),
  repeatPassword: Yup.string()
    .min(6, "Minimum 6 characters long")
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
