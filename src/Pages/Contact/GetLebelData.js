import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DisplayGetLabelData from "./DisplayGetLabelData";

const GetLebelData = () => {
  const location = useLocation();
  let label = location.state.label;
  let id = location.state.id;
  console.log(label, id);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.filter((datas) => datas.label === label);
        setUserData(fetchData);
      });
  }, []);
  // console.log(userData);
  return (
    <div>
      <div className="row row-cols-lg-4 mb-4">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Phone Number</h4>
        <h4>Title & Company</h4>
      </div>
      <div>
        {userData.map((labelData) => (
          <DisplayGetLabelData
            labelData={labelData}
            key={labelData._id}
          ></DisplayGetLabelData>
        ))}
      </div>
    </div>
  );
};

export default GetLebelData;
