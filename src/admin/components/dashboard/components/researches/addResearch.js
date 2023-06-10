import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../../../../constant/api";
import axios from "axios";
import { useFormik } from "formik";
import { addResearchSchema } from "../../../../../schema";
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
  },
};

const AddResearch = ({ onClose, visible }) => {
  const { state, dispatch } = useUser();

  const onSubmit = async (values) => {
    const data = new FormData();
    data.append("title", values.title);
    data.append("summary", values.summary);
    data.append("writer", values.writer);
    data.append("publicationYear", values.publicationYear);
    data.append("pdf", values.pdf);
    data.append("image", values.image);

    let config = {
      method: "post",
      url: `${BaseBackURL}research/`,
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("پژوهش  جدید ایجاد شد", {
          position: toast.POSITION.TOP_RIGHT,
        });
        onClose(false);
        dispatch({ type: "SET_UPDATE", payload: !state.update });
      })
      .catch((error) => {
        console.log(error);
        if(error.response.data.error.original.code="ER_DATA_TOO_LONG" ){
          toast.error("لطفا از کاراکتر های کمتری برای توضیحات استفاده کنید", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }else{
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
      summary: "",
      writer: "",
      publicationYear: "",
      image: null,
      pdf: null,
    },
    validationSchema: addResearchSchema,
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
        <label for="title">عنوان پژوهش</label>
        <input
          placeholder="عنوان پژوهش "
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
          id="summary"
          value={values.summary}
          onChange={handleChange}
        />
        {errors.summary && touched.summary && (
          <ErrorText>{errors.summary}</ErrorText>
        )}

        <label for="writer">نویسنده</label>
        <input
          placeholder="نویسنده"
          id="writer"
          value={values.writer}
          onChange={handleChange}
        />
        {errors.writer && touched.writer && (
          <ErrorText>{errors.writer}</ErrorText>
        )}

        <label for="publicationYear">سال انتشار</label>
        {/* <input
          placeholder="سال انتشار"
          id="publicationYear"
          value={values.publicationYear}
          onChange={handleChange}
        /> */}
          <Datepicker
          id="publicationYear"
          placeholder="سال انتشار"
          onChange={(val) => {
            setFieldValue("publicationYear", val.format("YYYY-MM-DD"));
          }}
          lang={"fa"}
        />
        {errors.publicationYear && touched.publicationYear && (
          <ErrorText>{errors.publicationYear}</ErrorText>
        )}

        <label for="image">تصویری از پژوهش</label>
        <input
          placeholder="تصویری از پژوهش "
          id="image"
          type="file"
          onChange={(event) => {
            setFieldValue("image", event.target.files[0]);
          }}
        />
        {errors.image && touched.image && <ErrorText>{errors.image}</ErrorText>}

        <label for="pdf">فایل pdf</label>
        <input
          placeholder="فایل کتاب"
          id="pdf"
          type="file"
          onChange={(event) => {
            setFieldValue("pdf", event.target.files[0]);
          }}
        />
        {errors.pdf && touched.pdf && <ErrorText>{errors.pdf}</ErrorText>}

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

export default AddResearch;
