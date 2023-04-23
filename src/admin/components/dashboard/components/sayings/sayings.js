import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../../../../constant/api";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../../../../context/useContext";
import AddSaying from "./addSaying";
import EditSaying from "./editSaying";


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

const Sayings = () => {
  const { state, dispatch } = useUser();
  const [sayings, setSayings] = useState([]);
  const [selectSaying,setSelectSaying]=useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal,setEditModal]=useState(false)
  const [reload, setReload] = useState(false);

  //function for get all philosophes
  const getSayings = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}sayings/`,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setSayings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  //get all philosophes
  useEffect(() => {
    getSayings();
  }, [reload, state.update]);

  //generate row of philosophes table
  const tableCell = sayings.map((item, i) => {
    return (
      <tr key={i}>
        <td>{i+1}</td>
        <td>{item.speech}</td>
        <td><p className="text">{item.announcer}</p></td>
        <td>{item.position}</td>
        <td
          onClick={() => {
            setSelectSaying(item);
            setDeleteModal(true);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </td>
        <td
          onClick={() => {
            setSelectSaying(item);
            setEditModal(true);
          }}
        >
          <FontAwesomeIcon icon={faFilePen} />
        </td>
      </tr>
    );
  });


  const deleteSaying = (id) => {
    var config = {
      method: "delete",
      url: `${BaseBackURL}sayings/${id}/`,
    };
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("سخن حذف شد", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setReload(!reload);
        setDeleteModal(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("مشکل در برقراری ارتباط با سرور", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <Container>
      <AddSayingButton
        onClick={() => {
          setAddModal(true);
        }}
      >
        سخن جدید 
      </AddSayingButton>
      <table>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>سخن</th>
            <th>گوینده</th>
            <th>محل نصب</th>
            <th>حذف</th>
            <th>ویرایش </th>
          </tr>
        </thead>
        <tbody>
          {sayings.length === 0 ? (
            <p className="error">متاسفانه داده ای برای نمایش وجود ندارد</p>
          ) : (
            tableCell
          )}{" "}
        </tbody>
      </table>

      {/* addPhilosopher modal */}
       <AddSaying visible={addModal} onClose={setAddModal} />
      
       {/* editPhilosophe modal */}
       <EditSaying visible={editModal} onClose={setEditModal} saying={selectSaying} />

      {/* deleteUser modal */}
      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <DeleteContainer>
          <h3>آیا از حذف سخن ذیل اطمینان دارید؟</h3>
          <div className="row">
            <p className="text"> گوینده</p>
            <p className="text">{selectSaying.announcer}</p>
          </div>
          <div className="submit-row">
            <button
              className="confirm"
              onClick={() => {
                deleteSaying(selectSaying.id);
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
        .text{
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        img {
          max-width: 100px;
          max-height: 100px;
          border-radius: 4px;
        }
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

const AddSayingButton = styled.div`
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
  align-items: center;
  h3 {
    font-size: 2vw;
    margin: 0;
    color: #8f7595;
  }
  .row {
    width: 80%;
    display: flex;
    justify-content: space-between;
    .text {
      margin: 0;
      font-size: 1.5vw;
      font-weight: 500;
      color: #8f7595;
    }
  }
  .submit-row {
    width: 50%;
    display: flex;
    justify-content: space-between;
    .confirm,
    .cansel {
      border: none;
      border-radius: 4px;
      padding: 1vw;
      background-color: #616283;
      width: 40%;
      cursor: pointer;
    }
    .confirm {
      background-color: #cb9cf2;
    }
  }
`;

export default Sayings;