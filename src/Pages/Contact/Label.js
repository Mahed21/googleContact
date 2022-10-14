import React, { useState } from "react";

import DisplayLabelData from "./DisplayLabelData";

const Label = () => {
  const [label, setLabe] = useState([]);
  fetch("http://localhost:5000/label")
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
