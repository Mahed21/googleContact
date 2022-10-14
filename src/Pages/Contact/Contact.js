import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayContactList from "./DisplayContactList";

const Contact = () => {
  const navigate = useNavigate();
  let deleteIds = [];

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const Datavalue = data.filter((datas) => datas.bin !== "bin");
        setUserData(Datavalue);
      });
  }, []);

  const handleChange = (event, id) => {
    //console.log(id);
    if (event.target.checked) {
      deleteIds = [...deleteIds, id];

      console.log(deleteIds);
    } else {
      deleteIds = deleteIds.filter((deleteId) => deleteId !== id);

      console.log(deleteIds);
    }
    //console.log(deleteIds.length);
  };
  const handleDelete = () => {
    const usersManage = {
      bin: "bin",
    };
    //console.log(usersManage);
    for (let i = 0; i < deleteIds.length; i++) {
      fetch(`http://localhost:5000/userBin/${deleteIds[i]}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(usersManage),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate("/bin");
        });
    }
  };

  return (
    <div>
      <button className="btn mb-3 ps-5 pe-5" onClick={handleDelete}>
        Delete
      </button>
      <div className="row row-cols-lg-4 mb-4">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Phone Number</h4>
        <h4>Title & Company</h4>
      </div>
      <hr className="mb-4" />
      <div>
        {userData.map((data) => (
          <DisplayContactList
            data={data}
            key={data._id}
            onDeletedIdChange={(event) => handleChange(event, data._id)}
          ></DisplayContactList>
        ))}
      </div>
    </div>
  );
};

export default Contact;
