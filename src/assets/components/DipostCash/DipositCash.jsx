import React, { useState } from "react";
import "./DipositCash.css";
import TextField from "@mui/material/TextField";
const DipositCash = ({
  setDepositCashOrCredit,
  setCashOrCredit,
  setCashOrCreditDiposit,
  setIsButtonClicked,
  userToDiposit,
  buttonClicked,
}) => {
  const [dipositPopupClose, setDipositPopupClose] = useState(false);

  const hadnelClosePopup = () => {
    setDipositPopupClose(true);
    setDepositCashOrCredit(false);
  };
  const handleClick = (val) => {
    if (val === "cash") {
      setCashOrCredit("cash");
      setIsButtonClicked(true);
    } else {
      setCashOrCredit("credit");
      setIsButtonClicked(true);
      
    }
  };

  return (
    <div
      className="cash-diposit-popup"
      style={{ display: dipositPopupClose || buttonClicked ? "none" : "flex" }}
    >
      <h4>dipsoit cash or creadit to: '{userToDiposit}'</h4>'
      <TextField
        id="standard-number"
        label="Diposit Cash"
        type="number"
        name="cash"
        onChange={(e) => setCashOrCreditDiposit(e.target.value)}
        required
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        inputProps={{
          min: "1",
        }}
      />
      <button className="close-diposit-popup" onClick={hadnelClosePopup}>
        X
      </button>
      <div className="confirm-diposit">
        <button className="cash-or-credit" onClick={() => handleClick("cash")}>
          Cash
        </button>
        <button
          className="cash-or-credit"
          onClick={() => handleClick("credit")}
        >
          Credit
        </button>
      </div>
    </div>
  );
};

export default DipositCash;
