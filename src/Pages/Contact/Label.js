import React, { useState } from "react";

import DisplayLabelData from "./DisplayLabelData";

const Label = () => {
  const [label, setLabe] = useState([]);
  fetch("https://google-contact.onrender.com/label")
    .then((res) => res.json())
    .then((data) => setLabe(data));
  return (
    <div>
      {label.map((label) => (
        <DisplayLabelData label={label} key={label._id}></DisplayLabelData>
      ))}
    </div>
  );
};

export default Label;
