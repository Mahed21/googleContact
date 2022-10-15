import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";

const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UseAuth();
  if (user.email) {
    navigate("/");
  }
  return (
    <div className="d-flex justify-content-center h-50 align-items-center">
      <button className="btn" onClick={googleSignIn}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
