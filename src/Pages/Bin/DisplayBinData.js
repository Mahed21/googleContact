import React from "react";

const DisplayBinData = (props) => {
  const { onChangeForUndo } = props;
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

  return (
    <div>
      <div className="row row-cols-lg-5 mb-3 contact-card pt-3 pb-3">
        <div className="d-flex">
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
        <div>
          <button className="btn" onClick={onChangeForUndo}>
            undo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBinData;
