import React from "react";
import "./Contact.css";

const DisplayLabel = (props) => {
  const { onLabelChange } = props;
  const { label, _id } = props.label;
  return (
    <div>
      <div>
        <button
          className="label mb-3 pt-3 pb-3 w-100 ms-3"
          onClick={onLabelChange}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default DisplayLabel;
