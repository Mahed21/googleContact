import React from "react";

const DisplayGetLabelData = (props) => {
  const { firstName, sureName, title, company, email, image, phone } =
    props.labelData;
  console.log(firstName);
  return (
    <div>
      <div className="row row-cols-lg-4 mb-3 contact-card pt-3 pb-3">
        <div className="d-flex">
          <div className="mt-2 me-2">
            <input type="checkbox" id="myCheck" className="w-100" />
          </div>
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
      </div>
    </div>
  );
};

export default DisplayGetLabelData;
