import React, { useState } from "react";
import './ErrorPupUp.css'
const ErrorPupUp = () => {
    const [closePopup, setClosePopup] = useState(false)

    const handleClick = ()=>{
        setClosePopup(true)
    }
  return <div className="error-popup" style={{display: closePopup ? 'none': "flex"}}>
    <p>invalid user name nor password or your not admin. if your are admin, please close this popup and try again.</p>
    <button onClick={handleClick} className="error-btn-close">CLOSE</button>
  </div>;
};

export default ErrorPupUp;
