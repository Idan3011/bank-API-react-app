import React, { useEffect, useState } from "react";
import "./Form.scss";
import FormContact from "./FormContact";
import axios from "../../../data/usersAPI";
import { Link } from "react-router-dom";
import ErrorPupUp from "../components/Errorpopup/ErrorPupUp";
const Form = () => {
  const [userName, setUserName] = useState("");
  const [userPassWord, setUserPassWord] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorPopup, setErrorPop] = useState(false);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get("/users");
        if (res) {
          const allUsers = res.data;
          const user = allUsers.find(
            (u) => u.userName.toLowerCase() === userName.toLowerCase()
          );
          const isadminOK =
            user && String(user.password) === userPassWord && isLogIn;
          if (!isadminOK) {
            setErrorPop(true);
          } else {
            setIsAdmin(true);
            setErrorPop(false);
          }
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    if (isLogIn) {
      fetchAdmin();
    }
  }, [userName, userPassWord, isLogIn]);

  return (
    <>
      <FormContact
        setUserName={setUserName}
        setUserPassWord={setUserPassWord}
        setIsLogIn={setIsLogIn}
        isAdmin={isAdmin}
      />
      {errorPopup && <ErrorPupUp />}
    </>
  );
};

export default Form;
