import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../../../../constant/api";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import AddUser from "./addUser";
import EditUser from "./editUser";
import Modal from "react-modal";
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

const Users = () => {
  const { state, dispatch } = useUser();
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [selectUser, setSelectUser] = useState({});

  //function for get all users
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

  //get all users
  useEffect(() => {
    getUsers();
    console.log("reload");
  }, [refresh]);

  useEffect(() => {
    setTimeout(() => {
      setEditUserModal(false);
      setRefresh(!refresh);
    }, 5000);
  }, [state.update]);

  //function for delete special user
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

  //generate row of user table
  const tableCell = user.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.email}</td>
        <td>{item.job}</td>
        <td
          onClick={() => {
            setSelectUser(item);
            setDeleteModal(true);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </td>
        <td
          onClick={() => {
            setEditUserModal(true);
            setSelectUser(item);
          }}
        >
          <FontAwesomeIcon icon={faFilePen} />
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <AddUserButton
        onClick={() => {
          setAddUserModal(true);
        }}
      >
        افزودن کاربر
      </AddUserButton>
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
      {/* addUser modal */}
      <AddUser visible={addUserModal} onClose={setAddUserModal} />

      {/* editUser modal */}
       <EditUser user={selectUser} visible={editUserModal} onClose={setEditUserModal} />

      {/* deleteUser modal */}
      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <DeleteContainer>
          <h3>آیا از حذف کاربر ذیل اطمینان دارید؟</h3>
          <div className="row">
            <p className="text">نام و نام خانوادگی</p>
            <p className="text">{`${selectUser.firstname} ${selectUser.lastname}`}</p>
          </div>
          <div className="row">
            <p className="text"> آدرس ایمیل</p>
            <p className="text">{selectUser.email}</p>
          </div>
          <div className="submit-row">
            <button className="confirm"
              onClick={() => {
                deleteUser(selectUser.userId);
                setDeleteModal(false);
              }}
            >
              تایید
            </button>
            <button
            className="cansel"
              onClick={() => {
                setDeleteModal(false);
              }}
            >
              انصراف
            </button>
          </div>
        </DeleteContainer>
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

const AddUserButton = styled.div`
  background-color: #cb9cf2;
  padding: 1vw;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  color: #616283;
  font-weight: 500;
`;

const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  align-items:center;
  h3 {
    font-size:2vw;
    margin:0;
    color:#8F7595;
  }
  .row{
    width:80%;
    display:flex;
    justify-content:space-between;
    .text{
      margin:0;
      font-size:1.5vw;
      font-weight:500;
      color:#8F7595;
    }
  }
  .submit-row{
    width:50%;
    display:flex;
    justify-content:space-between;
    .confirm,.cansel{
      border:none;
      border-radius:4px;
      padding:1vw;
      background-color:#616283;
      width:40%;
      cursor:pointer;
    }
    .confirm{
      background-color:#CB9CF2;
    }
  }
`;

export default Users;