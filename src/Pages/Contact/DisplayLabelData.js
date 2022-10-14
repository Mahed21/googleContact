import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayLabelData = (props) => {
  const navigate = useNavigate();
  const { label, _id } = props.label;
  const GetlabelData = (e) => {
    e.preventDefault();

    navigate("/getLebelData", { state: { label: label, id: _id } });
  };
  const deleteLabel = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/label/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // const products = userData.filter((user) => user._id !== deleteIds[i]);
          // setUserData(products);
          alert(" Your label is deleted");
        }
      });
  };

  return (
    <div className="d-flex">
      <button
        className="label mb-3 pt-3 pb-3 w-50 ms-3 me-5"
        onClick={GetlabelData}
      >
        {label}
      </button>
      <button className="btn me-3" onClick={() => deleteLabel(_id)}>
        Delete
      </button>
    </div>
  );
};

export default DisplayLabelData;
