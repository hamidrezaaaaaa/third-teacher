import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../../../../constant/api";
import axios from "axios";
import { useFormik } from "formik";
import { addPostSchema } from "../../../../../schema";
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

const EditPost = ({ post, onClose, visible }) => {
  const { state, dispatch } = useUser();
  const [items, setItems] = useState({});

  useEffect(() => {
    setItems(post);
  }, [visible === true]);

  const onSubmit = async (values) => {
    const data = new FormData();
    data.append("category", values.category);
    data.append("description", values.description);
    data.append("imageurl", values.imageurl);

    let config = {
      method: "patch",
      url: `${BaseBackURL}educations/${items.id}`,
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("  تغییرات پست اعمال شد", {
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
      category: items.category,
      description: items.description,
      imageurl: null,
    },
    validationSchema: addPostSchema,
    enableReinitialize: true,
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
        <label for="category">دسته بندی</label>
        <select
          className="select-input"
          placeholder="دسته بندی"
          id="category"
          value={values.category}
          onChange={handleChange}
        >
          <option value="نور از منظر اندیشه">نور از منظر اندیشه</option>
          <option value="نور از منظر">نور از منظر علم</option>
          <option value="مدرسه از نور">مدرسه از نور</option>
          <option value="طراحی نور">طراحی نور</option>
          <option value="آسایش بصری">آسایش بصری</option>
        </select>
        {errors.category && touched.category && (
          <ErrorText>{errors.category}</ErrorText>
        )}

        <label for="description">توضیحات پست</label>
        <textarea
          rows="7"
          placeholder="توضیحات پست"
          id="description"
          value={values.description}
          onChange={handleChange}
        />
        {errors.description && touched.description && (
          <ErrorText>{errors.description}</ErrorText>
        )}
        <label for="imageurl">تصویر</label>
        <input
          id="imageurl"
          name="imageurl"
          type="file"
          // value={values.imageurl}
          onChange={(event) => {
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
  .select-input{
    width: 95%;
    outline: none;
    padding: 6px;
    border: none;
    border-radius: 4px;
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

export default EditPost;
