import * as yup from "yup";

const passwordRules = /[1-4]/g;

export const logInSchema = yup.object().shape({
  userName: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  password: yup.string().required("لطفا رمز عبور خود را انتخاب کنید"),
});

export const signInSchema = yup.object().shape({
  userName: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  password: yup
    .string()
    .min(10, "لطفا حداقل ۱۰ کاراکتر وارد کنید")
    .matches(passwordRules, { message: "لطفا از اعداد و حروف استفاده کنید" })
    .required("لطفا رمز عبور خود را وارد کنید"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "تکرار پسورد اشتباه است")
    .required("لطفا رمز عبور خود را تکرار کنید"),
});

export const signInFormSchema = yup.object().shape({
  firstName: yup.string().required("لطفا نام خود را وادر کنید"),
  lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  birthPlace: yup.string().required("لطفامحل تولد خود را وارد کنید"),
  education: yup.string().required("لطفا تحصیلات خود را وارد کنید"),
  university: yup.string().required("لطفا نام دانشگاه خود را وارد کنید"),
  job: yup.string().required("لطفا شغل خود را وارد کنید"),
  email: yup.string().required("لطفا آدرس ایمیل خود را وارد کنید"),
  province: yup.string().required("لطفا استان را مشخص کنید"),
  postCode: yup
    .number({ message: "لطفا کیبود خود را به زبان انگلیسی تغییر دهید" })
    .min("10", "لطفا حداقل ۱۰ کاراکتر وارد کنید")
    .required("لطفا کدپستی را وارد کنید"),
  phoneNumber: yup
    .number("لطفا کیبود خود را به زبان انگلیسی تغییر دهید")
    .required("لطفا شماره تماس  را وارد کنید"),
  address: yup
    .string()
    .min(5, "لطفا حداقل ۵ کاراکتر وارد کنید")
    .required("لطفا  آدرس را وارد کنید"),
});

export const addPhilosopherSchema = yup.object().shape({
  personal: yup.string().required("لطفا نام فیلسوف را وارد کنید"),
  summary: yup.string().required("لطفا شرح خلاصه فیلسوف را تکمیل کنید"),
  description: yup.string().required("لطفا معرفی فیلسوف را تکمیل کنید"),
  imageurl: yup
    .mixed()
    .required("لطفا تصویر فیلسوف را بارگزاری کنید")
    .test("fileSize", "حجم فایل زیاد است ", (value) => {
      return value && value.size <= 2000000;
    })
    .test(
      "type",
      "لطفا تنها از این فرمت ها استفاده کنید: .jpeg, .jpg and .png",
      (value) => {
        return (
          value && (value.type === "image/jpeg" || value.type === "image/png")
        );
      }
    ),
});

export const addSchoolSchema = yup.object().shape({
  name: yup.string().required("لطفا نام مدرسه را وارد کنید"),
  summary: yup.string().required("لطفا شرح خلاصه مدرسه را تکمیل کنید"),
  description: yup.string().required("لطفا معرفی مدرسه را تکمیل کنید"),
  imageurl: yup
    .mixed()
    .required("لطفا تصویر مدرسه را بارگزاری کنید")
    .test("fileSize", "حجم فایل زیاد است ", (value) => {
      return value && value.size <= 2000000;
    })
    .test(
      "type",
      "لطفا تنها از این فرمت ها استفاده کنید: .jpeg, .jpg and .png",
      (value) => {
        return (
          value && (value.type === "image/jpeg" || value.type === "image/png")
        );
      }
    ),
});

export const addPostSchema = yup.object().shape({
  category: yup.string().required("لطفا دسته بندی پست را انتخاب کنید"),
  description: yup.string().required("لطفا توضیحات پست را تکمیل کنید"),
  imageurl: yup
    .mixed()
    .required("لطفا تصویر مدرسه را بارگزاری کنید")
    .test("fileSize", "حجم فایل زیاد است ", (value) => {
      return value && value.size <= 2000000;
    })
    .test(
      "type",
      "لطفا تنها از این فرمت ها استفاده کنید: .jpeg, .jpg and .png",
      (value) => {
        return (
          value && (value.type === "image/jpeg" || value.type === "image/png")
        );
      }
    ),
});

export const addMemberSchema = yup.object().shape({
  firstName: yup.string().required("لطفا نام عضو را وارد کنید"),
  lastName: yup.string().required("لطفا نام خانوادگی عضو را وارد کنید"),
  education: yup.string().required("لطفا تحصیلات عضو را وارد کنید"),
  position: yup.string().required("لطفا سمت عضو را وارد کنید"),
  image: yup
    .mixed()
    .required("لطفا تصویر عضو را بارگزاری کنید")
    .test("fileSize", "حجم فایل زیاد است ", (value) => {
      return value && value.size <= 2000000;
    })
    .test(
      "type",
      "لطفا تنها از این فرمت ها استفاده کنید: .jpeg, .jpg and .png",
      (value) => {
        return (
          value && (value.type === "image/jpeg" || value.type === "image/png")
        );
      }
    ),
});

export const addSayingSchema = yup.object().shape({
  speech: yup.string().required("لطفا سخن را وارد کنید"),
  announcer: yup.string().required("لطفا نام گوینده را وارد کنید"),
  position: yup.string().required("لطفا محل نصب سخن را انتخاب کنید"),
});

export const addbookSchema = yup.object().shape({
  title: yup.string().required("لطفا عنوان کتاب را وارد کنید"),
  writer: yup.string().required("لطفا نام نویسنده را وارد کنید"),
  summary: yup.string().required("لطفا خلاصه کتاب را وارد کنید"),
  publication: yup.string().required("لطفا نام انتشارات را وارد کنید"),
  publicationYear: yup.string().required("لطفا سال انتشار را وارد کنید"),
  image: yup
    .mixed()
    .required("لطفا تصویر جلد کتاب را بارگزاری کنید")
    .test("fileSize", "حجم فایل زیاد است ", (value) => {
      return value && value.size <= 2000000;
    })
    .test(
      "type",
      "لطفا تنها از این فرمت ها استفاده کنید: .jpeg, .jpg and .png",
      (value) => {
        return (
          value && (value.type === "image/jpeg" || value.type === "image/png")
        );
      }
    ),
  pdf: yup
    .mixed()
    .required("لطفا فایل کتاب را بارگزاری کنید")
    .test("fileSize", "حجم فایل زیاد است ", (value) => {
      return value && value.size <= 2000000;
    })
    .test(
      "type",
      "لطفا تنها از این فرمت ها استفاده کنید: .pdf",
      (value) => {
        return (
          value && (value.type === "application/pdf" || value.type === "x-png")
        );
      }
    ),
});
