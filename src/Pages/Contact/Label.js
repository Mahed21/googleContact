import React, { useEffect, useState } from "react";
import UseAuth from "../../Context/UseAuth";

import DisplayLabelData from "./DisplayLabelData";

const Label = () => {
  const { user } = UseAuth();
  const [label, setLabe] = useState([]);
  useEffect(() => {
    fetch("https://google-contact.onrender.com/label")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.filter(
          (datas) => datas.userEmail === user.email
        );
        setLabe(fetchData);
      });
  }, [user.email]);
  return (
    <div>
      {label.map((label) => (
        <DisplayLabelData label={label} key={label._id}></DisplayLabelData>
      ))}
    </div>
  );
};

export default Label;
