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
import AddCompetition from "./addCompetition";
import EditCompetition from "./editCompetition";

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

const Competitions = () => {
  const { state, dispatch } = useUser();
  const [competition, setCompetitions] = useState([]);
  const [selectCompetition, setSelectCompetition] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [reload, setReload] = useState(false);

  //function for get all competitions
  const getCompetitions = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}competition/`,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setCompetitions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get all competitionns
  useEffect(() => {
    getCompetitions();
  }, [reload, state.update]);

  //generate row of competitions table
  const tableCell = competition.map((item, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{item.title}</td>
        <td>
          <p className="text">{item.organizers}</p>
        </td>
        <td>{item.submitingDeadline}</td>
        <td>{item.signupLink}</td>
        <td>{item.status}</td>
        <td>
          <img src={`${BaseBackURL}uploads/${item.image}`} alt={item.title} />{" "}
        </td>
        <td
          onClick={() => {
            setSelectCompetition(item);
            setDeleteModal(true);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </td>
        <td
          onClick={() => {
            setSelectCompetition(item);
            setEditModal(true);
          }}
        >
          <FontAwesomeIcon icon={faFilePen} />
        </td>
      </tr>
    );
  });

  const deleteCompetition = (id) => {
    var config = {
      method: "delete",
      url: `${BaseBackURL}competition/${id}/`,
    };
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("مسابقه حذف شد", {
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
      <AddCompetitionButton
        onClick={() => {
          setAddModal(true);
        }}
      >
        مسابقه جدید
      </AddCompetitionButton>
      <table>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>عنوان</th>
            <th>برگزارکنندگان</th>
            <th>مهلت ارسال آثار</th>
            <th>لینک ثبت نام</th>
            <th>وضعیت</th>
            <th>پوستر مسابقه</th>
            <th>حذف</th>
            <th>ویرایش </th>
          </tr>
        </thead>
        <tbody>
          {competition.length === 0 ? (
            <p className="error">متاسفانه داده ای برای نمایش وجود ندارد</p>
          ) : (
            tableCell
          )}{" "}
        </tbody>
      </table>

      {/* addPhilosopher modal */}
      <AddCompetition visible={addModal} onClose={setAddModal} />
      {/* editPhilosophe modal */}
      <EditCompetition
        visible={editModal}
        onClose={setEditModal}
        competition={selectCompetition}
      />

      {/* deleteUser modal */}
      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <DeleteContainer>
          <h3>آیا از حذف مسابقه ذیل اطمینان دارید؟</h3>
          <div className="row">
            <p className="text"> عنوان مسابقه</p>
            <p className="text">{selectCompetition.title}</p>
          </div>
          <div className="submit-row">
            <button
              className="confirm"
              onClick={() => {
                deleteCompetition(selectCompetition.id);
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
        .text {
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

const AddCompetitionButton = styled.div`
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

export default Competitions;
