import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormContact({ setUserName, setUserPassWord, setIsLogIn, isAdmin }) {
  const [inputVal, setInputVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const navigateToUsers = () => {
      if (isAdmin) {
        navigate("/Users");
      }
    };

    navigateToUsers();
  }, [isAdmin, navigate]);

  const FormSubmit = (e) => {
    e.preventDefault();
    setIsLogIn(true);
    setUserName(inputVal);
    setUserPassWord(passVal);
  };
  return (
    <form autoComplete="off" className="form" onSubmit={FormSubmit}>
      <div className="control">
        <h1>Sign In</h1>
      </div>
      <div className="control block-cube block-input">
        <input
          name="username"
          placeholder="Username"
          type="text"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassVal(e.target.value)}
        />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      {isAdmin ? (
        <Link to="/Users" className="btn block-cube block-cube-hover">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Log In</div>
        </Link>
      ) : (
        <button type="submit" className="btn block-cube block-cube-hover">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Log In</div>
        </button>
      )}
    </form>
  );
}

export default FormContact;
