import { fireEvent } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Modal from "react-modal";
import DisplayLabel from "./DisplayLabel";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const DisplayContactList = (props) => {
  // model
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  //model end
  const { onDeletedIdChange } = props;
  let navigate = useNavigate();
  const {
    firstName,
    sureName,
    title,
    company,
    email,
    image,
    phone,
    _id,
    birthday,
    label,
  } = props.data;

  const update = (id) => {
    console.log(id);
    console.log(label);
    navigate("/updateContact", {
      state: {
        firstName: firstName,
        id: _id,
        sureName: sureName,
        title: title,
        company: company,
        email: email,
        image: image,
        phone: phone,
        birthday: birthday,
        label: label,
      },
    });
  };

  //lebel fetch
  const [labelName, setLabelName] = useState([]);
  useEffect(() => {
    fetch("https://google-contact.onrender.com/label")
      .then((res) => res.json())
      .then((data) => setLabelName(data));
  }, []);

  //update user contact giving label name
  // get label which onclick
  const handlelabel = (e, id, labelvalue) => {
    e.preventDefault();
    console.log(id);

    const usersManage = {
      label: labelvalue,
    };
    console.log(usersManage);
    const url = `https://google-contact.onrender.com/labelUser/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(usersManage),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Label added to these number");
        closeModal();
      });
  };
  //update label in user link

  return (
    <div className="row row-cols-lg-5 mb-3 contact-card pt-3 pb-3">
      <div className="d-flex">
        <div className="mt-2 me-2">
          <input
            type="checkbox"
            id="myCheck"
            className="w-100"
            onChange={onDeletedIdChange}
          />
        </div>
        <img src={image} alt="" className="img-fluid image" />
        <span className="ms-2 mt-2">
          {firstName} {sureName}
        </span>
      </div>
      <div className="mt-2">
        <h5>{email}</h5>
      </div>
      <div className="mt-2">
        <h5>{phone}</h5>
      </div>
      <div className="mt-2">
        <h5>
          {title} {company}
        </h5>
      </div>
      <div className="mt-2 d-flex">
        <button onClick={(e) => update(_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-edit-2"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </button>
        <button className="ms-3" onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-more-vertical"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form>
            <div className="container">
              <h1 className="mb-5 font-italic">Your All lebel</h1>
              <div>
                {labelName.map((label) => (
                  <DisplayLabel
                    label={label}
                    key={label._id}
                    onLabelChange={(event) =>
                      handlelabel(event, _id, label.label)
                    }
                  ></DisplayLabel>
                ))}
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="label-btn me-3" onClick={closeModal}>
                  cancel
                </button>
              </div>
              <br />
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default DisplayContactList;
