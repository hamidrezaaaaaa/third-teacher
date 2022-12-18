import * as yup from "yup";

export const logInSchema = yup.object().shape({
    userName: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
    password: yup.string().required("لطفا رمز عبور خود را انتخاب کنید"),
  });