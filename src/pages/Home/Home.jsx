import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Popup from "../../assets/components/Popup/Popup";
const Home = () => {
  const [popup, setPopup] = useState(false);

 
  
  const handleClick = () => {
    setPopup((prev) => !prev);
  };
  useState(() => {

  }, []);

  return (
    <>
      <div className="Home">
        <button className="btn-9" onClick={handleClick}>
          <span>Users DashBoard</span>
        </button>
      {popup ? <Popup setPopup={setPopup}/> : null}
      </div>
    </>
  );
};

export default Home;
