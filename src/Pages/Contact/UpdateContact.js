import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import "./Contact.css";

const UpdateContact = () => {
  let navigate = useNavigate();
  const location = useLocation();
  let firstname = location.state.firstName;
  let surename = location.state.sureName;
  let Title = location.state.title;
  let Company = location.state.company;
  let Image = location.state.image;
  let Email = location.state.email;
  let Birthday = location.state.birthday;
  let Phone = location.state.phone;
  let id = location.state.id;
  let label = location.state.label;

  const [firstName, setFirstName] = useState(firstname);
  const [sureName, setSureName] = useState(surename);
  const [company, setCompany] = useState(Company);
  const [jobTitle, setJobTitle] = useState(Title);
  const [email, setEmail] = useState(Email);
  const [phone, setPhone] = useState(Phone);
  const [birthday, setBirthday] = useState(Birthday);
  const [note, setNote] = useState("");
  const [image, setImage] = useState(Image);
  const handleUpdate = (e) => {
    const updateCalorie = {
      image: image,
      firstName: firstName,
      sureName: sureName,
      company: company,
      title: jobTitle,
      email: email,
      phone: phone,
      birthday: birthday,
      note: note,
      label: label,
    };
    e.preventDefault();
    fetch(`https://google-contact.onrender.com/user/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCalorie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Successfully Updated");
        navigate("/");
      });
  };
  return (
    <div>
      <div className="createContact">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="mb-2">
              <img src={image} alt="" className="updateimage mb-2" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button className="btn mt-28" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
        <hr />

        <form className="ms-5 mt-5">
          <div className="d-flex ">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <input
              className="w-50"
              placeholder="first Name"
              defaultValue={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <br />

          <input
            className="w-50 ml-8"
            placeholder="Sure Name"
            defaultValue={surename}
            onChange={(e) => setSureName(e.target.value)}
          />
          <br />
          <br />
          <div className="d-flex">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-monitor"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </span>
            <input
              className="w-50"
              placeholder="Company (optional)"
              defaultValue={Company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <br />
          <input
            className="w-50 ml-8"
            placeholder="Job title (optional)"
            defaultValue={Title}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <br />
          <br />
          <div className="d-flex">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <input
              className="w-50"
              placeholder="Email"
              defaultValue={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <br />
          <br />
          <div className="d-flex">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            <CountryDropdown
              id="UNIQUE_ID"
              className="YOUR_CSS_CLASS"
              preferredCountries={["gb", "us"]}
              handleChange={(e) => console.log(e.target.value)}
            ></CountryDropdown>
            <input
              className="w-25"
              placeholder="Phone Number"
              defaultValue={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <br />
          <br />
          <div className="d-flex">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-gift"
              >
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </span>
            <input
              className="w-50"
              placeholder="Birthday"
              defaultValue={Birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <span className="gray-text ml-8">dd/mm/yyyy</span>
          <br />
          <br />
          <div className="d-flex">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-monitor"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </span>
            <input
              className="w-50"
              placeholder="Notes (optional)"
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateContact;
