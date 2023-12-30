import React, { useState } from "react";
import "./Popup.css";
import Form from "../../Form/Form";
const Popup = ({ setPopup }) => {
  const [closePopup, setClosePopup] = useState(false);

  const handleClick = () => {
    setClosePopup(true);
    setPopup(false);
  };

  return (
    <div className="Popup" style={{ display: closePopup ? "none" : "flex" }}>
      <button onClick={handleClick} className="close-btn">
        X
      </button>
      <Form />
    </div>
  );
};

export default Popup;
