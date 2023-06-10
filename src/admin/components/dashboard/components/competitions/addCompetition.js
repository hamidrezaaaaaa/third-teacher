import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../../../../constant/api";
import axios from "axios";
import { useFormik } from "formik";
import { addCompetitionSchema } from "../../../../../schema";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../../../../context/useContext";
import { Datepicker } from "@ijavad805/react-datepicker";


//style for modal
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#4C5675",
    border: "none",
    width: "40%",
    height:"80%"
  },
};

const AddCompetition = ({ onClose, visible }) => {
  const { state, dispatch } = useUser();

  const onSubmit = async (values ,{resetForm}) => {
    const data = new FormData();
    data.append("title", values.title);
    data.append("expand", values.expand);
    data.append("status", values.status);
    data.append("submitingDeadline", values.submitingDeadline);
    data.append("resultDeadline", values.resultDeadline);
    data.append("signupLink", values.signupLink);
    data.append("awards", values.awards);
    data.append("referee", values.referee);
    data.append("organizers", values.organizers);
    data.append("image", values.image);

    let config = {
      method: "post",
      url: `${BaseBackURL}competition/`,
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("مسابقه جدید ایجاد شد", {
          position: toast.POSITION.TOP_RIGHT,
        });
        onClose(false);
        dispatch({ type: "SET_UPDATE", payload: !state.update });
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        if ((error.response.data.error.original.code = "ER_DATA_TOO_LONG")) {
          toast.error("لطفا از کاراکتر های کمتری برای توضیحات استفاده کنید", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("مشکل در برقراری ارتباط با سرور", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      expand: "",
      status: "",
      submitingDeadline: "",
      resultDeadline: "",
      signupLink: "",
      awards: "",
      referee: "",
      organizers: "",
      image: null,
    },
    validationSchema: addCompetitionSchema,
    onSubmit,
  });


  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => onClose(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label for="title">عنوان مسابقه</label>
        <input
          placeholder="عنوان مسابقه "
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        {errors.title && touched.title && <ErrorText>{errors.title}</ErrorText>}

        <label for="summary"> شرح خلاصه</label>
        <textarea
          rows="5"
          placeholder="شرح خلاصه"
          id="expand"
          value={values.expand}
          onChange={handleChange}
        />
        {errors.expand && touched.expand && (
          <ErrorText>{errors.expand}</ErrorText>
        )}

        <label for="submitingDeadline">مهلت ارسال آثار</label>
        {/* <input
          placeholder="مهلت ارسال آثار"
          id="submitingDeadline"
          value={values.submitingDeadline}
          onChange={handleChange}
        /> */}
         <Datepicker
          id="submitingDeadline"
          placeholderText="مهلت ارسال آثار"
          onChange={(val) => {
            setFieldValue("submitingDeadline", val.format("YYYY-MM-DD"));
          }}
          lang={"fa"}
        />
        {errors.submitingDeadline && touched.submitingDeadline && (
          <ErrorText>{errors.submitingDeadline}</ErrorText>
        )}

        <label for="resultDeadline">زمان اعلام نتایج</label>
        {/* <input
          placeholder="زمان اعلام نتایج"
          id="resultDeadline"
          value={values.resultDeadline}
          onChange={handleChange}
        /> */}
          <Datepicker
          id="resultDeadline"
          placeholderText="مهلت ارسال آثار"
          onChange={(val) => {
            setFieldValue("resultDeadline", val.format("YYYY-MM-DD"));
          }}
          lang={"fa"}
        />
        {errors.resultDeadline && touched.resultDeadline && (
          <ErrorText>{errors.resultDeadline}</ErrorText>
        )}

        <label for="signupLink"> لینک ثبت نام</label>
        <input
          placeholder="لینک ثبت نام"
          id="signupLink"
          value={values.signupLink}
          onChange={handleChange}
        />
        {errors.signupLink && touched.signupLink && (
          <ErrorText>{errors.signupLink}</ErrorText>
        )}

        <label for="awards"> جوایز</label>
        <input
          placeholder="جوایز"
          id="awards"
          value={values.awards}
          onChange={handleChange}
        />
        {errors.awards && touched.awards && (
          <ErrorText>{errors.awards}</ErrorText>
        )}

        <label for="referee"> داور</label>
        <input
          placeholder="داور"
          id="referee"
          value={values.referee}
          onChange={handleChange}
        />
        {errors.referee && touched.referee && (
          <ErrorText>{errors.referee}</ErrorText>
        )}

        <label for="organizers"> برگزارکنندگان</label>
        <input
          placeholder="برگزارکنندگان"
          id="organizers"
          value={values.organizers}
          onChange={handleChange}
        />
        {errors.organizers && touched.organizers && (
          <ErrorText>{errors.organizers}</ErrorText>
        )}

        <label for="status">وضعیت مسابقه</label>
        <select
          className="select-input"
          placeholder="وضعیت مسابقه"
          id="status"
          value={values.status}
          onChange={handleChange}
        >
          <option value="todo"> درحال برگزاری</option>
          <option value="done"> اتمام برگزاری</option>
        </select>
        {errors.status && touched.status && (
          <ErrorText>{errors.status}</ErrorText>
        )}

        <label for="image"> پوستر مسابقه</label>
        <input
          placeholder="پوستر مسابقه"
          id="image"
          type="file"
          onChange={(event) => {
            setFieldValue("image", event.target.files[0]);
          }}
        />
        {errors.image && touched.image && <ErrorText>{errors.image}</ErrorText>}

        <Box>
          <button type="submit">افزودن</button>
          <div className="close" onClick={() => onClose(false)}>
            انصراف
          </div>
        </Box>
      </Form>
    </Modal>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  align-items: center;
  input,
  textarea {
    width: 95%;
    outline: none;
    padding: 0.7vw;
    border-radius: 4px;
    border: none;
  }
  label {
    width: 95%;
    text-align: start;
    color: #8f7595;
    font-size: 1.2vw;
    font-weight: 500;
  }
  input[type="file"] {
    width: 95%;
    background: white;
    padding: 0;
    ::-webkit-file-upload-button {
      background: #cb9cf2;
      color: #616283;
      border: none;
      padding: 1vw;
      border-radius: 4px;
    }
  }
  .select-input {
    width: 95%;
    outline: none;
    padding: 6px;
    border: none;
    border-radius: 4px;
  }
  .__datepicker {
    display: block;
    width: 100%;
    margin-right: 13px;
    margin-left: 3px;
  }
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 1vw;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: -2%;
  @media (max-width: 800px) {
    font-size: 2.5vw;
    padding: 0.7vh;
  }
  @media (max-width: 600px) {
    font-size: 3.5vw;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  button {
    border: none;
    padding: 1vw 2vw;
    background-color: #cb9cf2;
    border-radius: 4px;
    cursor: pointer;
  }
  .close {
    background-color: #616283;
    border-radius: 4px;
    cursor: pointer;
    padding: 1vw 2vw;
    font-size: 1.2vw;
  }
`;

export default AddCompetition;
