import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../../../../components/constant/api";
import Modal from "react-modal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { signInFormSchema } from "../../../../../schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Users = () => {
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const getUsers = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}user`,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
    console.log("reload");
  }, [refresh]);

  const deleteUser = (userId) => {
    var config = {
      method: "delete",
      url: `${BaseBackURL}user/${userId}`,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const tableCell = user.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.email}</td>
        <td>{item.job}</td>
        <td onClick={()=> {deleteUser(item.userId)}}>
          <FontAwesomeIcon icon={faTrashCan} />
        </td>
        <td>
          <FontAwesomeIcon icon={faFilePen} />
        </td>
      </tr>
    );
  });

  const onSubmit = async (values) => {
    let data = JSON.stringify({
      email: `${values.email}`,
      password: `${values.password}`,
      firstname: `${values.firstName}`,
      lastname: `${values.lastName}`,
      birtday: `${values.birthPlace}`,
      education: `${values.education}`,
      university: `${values.university}`,
      job: `${values.job}`,
      mobilenumber: `${values.phoneNumber}`,
      province: `${values.province}`,
      address: `${values.address}`,
      postcode: `${values.postCode}`,
    });

    let config = {
      method: "post",
      url: `${BaseBackURL}user/sign-up`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(data);

    axios(config)
      .then((result) => {
        if (result) {
          toast.success("کاربر جدید ایجاد شد", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setAddUserModal(false);
          setRefresh(!refresh);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Email already exists") {
          toast.error("با ایمیل وارد شده یکبار ثبت نام شده است", {
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
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      birthPlace: "",
      education: "",
      university: "",
      job: "",
      phoneNumber: "",
      email: "",
      province: "",
      address: "",
      postCode: "",
    },
    validationSchema: signInFormSchema,
    onSubmit,
  });

  return (
    <Container>
      <AddUser
        onClick={() => {
          setAddUserModal(true);
        }}
      >
        افزودن کاربر
      </AddUser>
      <table>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>آدرس ایمیل</th>
            <th>شغل</th>
            <th>حذف</th>
            <th>ویرایش </th>
          </tr>
        </thead>
        <tbody>
          {user.length === 0 ? (
            <p className="error">متاسفانه داده ای برای نمایش وجود ندارد</p>
          ) : (
            tableCell
          )}{" "}
        </tbody>
      </table>

      <Modal
        isOpen={addUserModal}
        onRequestClose={() => setAddUserModal(false)}
        style={customStyles}
      >
        <Form onSubmit={handleSubmit} autoComplete="off">
          <input
            placeholder="نام"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && touched.firstName && (
            <ErrorText>{errors.firstName}</ErrorText>
          )}
          <input
            placeholder="نام‌ خانوادگی"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && touched.lastName && (
            <ErrorText>{errors.lastName}</ErrorText>
          )}
          <input
            placeholder="رمز عبور"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
          <input
            placeholder="تولد"
            id="birthPlace"
            value={values.birthPlace}
            onChange={handleChange}
          />
          {errors.birthPlace && touched.birthPlace && (
            <ErrorText>{errors.birthPlace}</ErrorText>
          )}
          <input
            placeholder="تحصیلات"
            id="education"
            value={values.education}
            onChange={handleChange}
          />
          {errors.education && touched.education && (
            <ErrorText>{errors.education}</ErrorText>
          )}
          <input
            placeholder="دانشگاه"
            id="university"
            value={values.university}
            onChange={handleChange}
          />
          {errors.university && touched.university && (
            <ErrorText>{errors.university}</ErrorText>
          )}
          <input
            placeholder="شغل"
            id="job"
            value={values.job}
            onChange={handleChange}
          />
          {errors.job && touched.job && <ErrorText>{errors.job}</ErrorText>}
          <input
            placeholder="تلفن همراه"
            id="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <ErrorText>{errors.phoneNumber}</ErrorText>
          )}
          <input
            placeholder="آدرس ایمیل"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
          <input
            placeholder="استان"
            id="province"
            value={values.province}
            onChange={handleChange}
          />
          {errors.province && touched.province && (
            <ErrorText>{errors.province}</ErrorText>
          )}
          <input
            placeholder="آدرس"
            id="address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && touched.address && (
            <ErrorText>{errors.address}</ErrorText>
          )}
          <input
            placeholder="کدپستی"
            id="postCode"
            value={values.postCode}
            onChange={handleChange}
          />
          {errors.postCode && touched.postCode && (
            <ErrorText>{errors.postCode}</ErrorText>
          )}

          <Box>
            <button type="submit">افزودن</button>
            <div className="close" onClick={() => setAddUserModal(false)}>
              انصراف
            </div>
          </Box>
        </Form>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  table {
    border: 1px solid #0e1116;
    width: 100%;
    border-collapse: collapse;
    border-radius: 4px;
    thead {
      th {
        padding: 1vw;
        font-size: 1.5vw;
      }

      tr {
        background-color: #806f8f;
      }
    }
    tbody {
      tr td {
        text-align: center;
        padding: 0.5vw;
        font-size: 1.2vw;
      }
      tr:nth-of-type(even) {
        background-color: #806f8f;
      }
      tr:hover {
        background-color: #9e7b9b;
      }
      .error {
        text-align: center;
      }
    }
  }
`;

const AddUser = styled.div`
  background-color: #cb9cf2;
  padding: 1vw;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  color: #616283;
  font-weight: 500;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  align-items: center;
  input {
    width: 95%;
    outline: none;
    padding: 0.7vw;
    border-radius: 4px;
    border: none;
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

export default Users;
