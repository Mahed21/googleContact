import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import DisplayGetLabelData from "./DisplayGetLabelData";

const GetLebelData = () => {
  // fixed width
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  //fixed width end
  const { user } = UseAuth();
  const location = useLocation();
  let label = location.state.label;
  let id = location.state.id;
  console.log(label, id);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://google-contact.onrender.com/user")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.filter(
          (datas) => datas.label === label && datas.userEmeail === user.email
        );
        setUserData(fetchData);
      });
  }, []);
  // console.log(userData);
  return (
    <div>
      {windowSize.innerWidth > 995 ? (
        <div>
          {" "}
          <div className="row row-cols-lg-4 mb-4">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Phone Number</h4>
            <h4>Title & Company</h4>
          </div>
        </div>
      ) : (
        <div className="row row-cols-2 mb-4">
          <h4>Name</h4>
          <h4>Phone Number</h4>
        </div>
      )}
      <hr />
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

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
