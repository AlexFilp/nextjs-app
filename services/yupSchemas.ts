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
