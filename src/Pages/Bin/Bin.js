import React, { useEffect, useState } from "react";
import DisplayBinData from "./DisplayBinData";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Context/UseAuth";

const Bin = () => {
  const { user } = UseAuth();
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

  const [userData, setUserData] = useState([]);
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () =>
    fetch("https://google-contact.onrender.com/user")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const Datavalue = data.filter(
          (datas) => datas.bin === "bin" && datas.userEmail === user.email
        );
        setUserData(Datavalue);
      })
  );

  const deleteAll = (e) => {
    e.preventDefault();
    for (let i = 0; i < userData.length; i++) {
      // console.log(userData[i]._id);
      fetch(`https://google-contact.onrender.com/user/${userData[i]._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("successfully deleted");

          if (data.deletedCount > 0) {
            refetch();
          }
        });
    }
  };
  const handleUndo = (id) => {
    console.log(id);
    fetch(`https://google-contact.onrender.com/userBinUpdate/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("User back to your Contact List");
        refetch();
      });
  };

  return (
    <div>
      {userData.length < 1 ? (
        <div>
          <h1 className="text-center">No data in Bin found</h1>
        </div>
      ) : windowSize.innerWidth > 995 ? (
        <div>
          <button className=" mb-3 mt-3 btn" onClick={deleteAll}>
            Permanantly Delete All
          </button>
          <div className="row row-cols-lg-5 mb-4">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Phone Number</h4>
            <h4>Title & Company</h4>
          </div>
        </div>
      ) : (
        <div className="row row-cols-3 mb-4">
          <h4>Name</h4>
          <h4>Phone Number</h4>
        </div>
      )}
      <hr className="mb-4" />
      <div>
        {userData.map((data) => (
          <DisplayBinData
            data={data}
            key={data._id}
            onChangeForUndo={(event) => handleUndo(data._id)}
          ></DisplayBinData>
        ))}
      </div>
    </div>
  );
};

export default Bin;
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
