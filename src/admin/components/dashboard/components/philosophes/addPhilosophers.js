import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../../../../components/constant/api";
import axios from "axios";
import { useFormik } from "formik";
import { addPhilosopherSchema } from "../../../../../schema";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../../../../context/useContext";

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
  },
};

const AddPhilosophers = ({onClose,visible}) => {
  const { state, dispatch } = useUser();

  const onSubmit = async (values) => {
    const data = new FormData();
    data.append("personal", values.personal);
    data.append("summary", values.summary);
    data.append("description", values.description);
    data.append("imageurl", values.imageurl);

    let config = {
      method: "post",
      url: `${BaseBackURL}philosophes`,
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("فیلسوف جدید ایجاد شد", {
          position: toast.POSITION.TOP_RIGHT,
        });
        onClose(false);
        dispatch({ type: "SET_UPDATE", payload: !state.update });
      })
      .catch((error) => {
        console.log(error);
        toast.error("مشکل در برقراری ارتباط با سرور", {
          position: toast.POSITION.TOP_RIGHT,
        });
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
      personal: "",
      summary: "",
      description: "",
      imageurl: null,
    },
    validationSchema: addPhilosopherSchema,
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
        <label for="personal"> نام فیلسوف</label>
        <input
          placeholder=" نام فیلسوف"
          id="personal"
          value={values.personal}
          onChange={handleChange}
        />
        {errors.personal && touched.personal && (
          <ErrorText>{errors.personal}</ErrorText>
        )}
        <label for="summary"> شرح خلاصه</label>
        <textarea
          rows="5"
          placeholder="شرح خلاصه"
          id="summary"
          value={values.summary}
          onChange={handleChange}
        />
        {errors.summary && touched.summary && (
          <ErrorText>{errors.summary}</ErrorText>
        )}
        <label for="description">معرفی نامه</label>
        <textarea
          rows="7"
          placeholder=" معرفی نامه"
          id="description"
          value={values.description}
          onChange={handleChange}
        />
        {errors.description && touched.description && (
          <ErrorText>{errors.description}</ErrorText>
        )}
        <label for="imageurl" >تصویر</label>
          <input
            id="imageurl"
            name="imageurl"
            type="file"
            value={values.imageurl}
            onChange={(event) => {
              console.log('hamid')
              setFieldValue("imageurl", event.target.files[0]);
            }}
          />
          {errors.imageurl && touched.imageurl && (
            <ErrorText>{errors.imageurl}</ErrorText>
          )}
        <Box>
          <button type="submit">افزودن</button>
          <div className="close" onClick={() => onClose(false)}>
            انصراف
          </div>
        </Box>
      </Form>
      <input type="file"/>
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

  // input[type="file"] {
  //   width:95%;
  //   background:white;
  //   padding:0;
  //   ::-webkit-file-upload-button {
  //       background: #CB9CF2;
  //       color: #616283;
  //       border:none;
  //       padding:1vw;
  //       border-radius:4px;
  //     }
  // }
 
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

export default AddPhilosophers;
