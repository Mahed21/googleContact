import React, { useEffect, useState } from "react";
import DisplayBinData from "./DisplayBinData";

const Bin = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const Datavalue = data.filter((datas) => datas.bin === "bin");
        setUserData(Datavalue);
      });
  }, []);
  return (
    <div>
      <h1 className=" mb-3 mt-3">Welcome to bin</h1>
      <div className="row row-cols-lg-4 mb-4">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Phone Number</h4>
        <h4>Title & Company</h4>
      </div>
      <hr className="mb-4" />
      <div>
        {userData.map((data) => (
          <DisplayBinData data={data} key={data._id}></DisplayBinData>
        ))}
      </div>
    </div>
  );
};

export default Bin;
