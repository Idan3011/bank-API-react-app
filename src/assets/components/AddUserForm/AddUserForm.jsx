import React, { useEffect, useState } from "react";
import "./AddUserForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "../../../../data/usersAPI";
const AddUserForm = ({ setAddUserButton }) => {
  const [closeForm, setCloseForm] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false)
  const [newUser, setNewUser] = useState({userName: '', cash: 0, credit: 0});

  
  const handleCloseForm = () => {
    setCloseForm(true);
    setAddUserButton(false);
  };

  const handleSubmit = () => {
 
    setIsFormSubmited(true)
  };

  const handleInputVal = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value });
  };

  

  useEffect(() => {
    const addNewUser = async () => {
      try {
          await axios.post("/users", {
            userName: newUser.userName,
            cash: newUser.cash,
            credit: newUser.credit,
          });
        
      } catch (error) {
        console.log("Error", error);
      }
    };
    if(isFormSubmited){
      addNewUser()
      setCloseForm(true)
    }
  }, [isFormSubmited,closeForm ]);

  
  return (
    <div
      className="AddUserForm"
      style={{ display: closeForm ? "none" : "flex" }}
    >
      <button className="close-btn" onClick={handleCloseForm}>
        X
      </button>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            name="userName"
            label="Enter userName"
            defaultValue=""
            onChange={handleInputVal}
          />
          <TextField
            id="standard-number"
            label="Diposit Cash"
            type="number"
            name="cash"
            required
            onChange={handleInputVal}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            inputProps={{
              min: "1",
            }}
          />
          <TextField
            id="standard-number"
            label="Diposit Credit"
            type="number"
            name="credit"
            required
            onChange={handleInputVal}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            inputProps={{
              min: "1",
            }}
          />
          <button type="submit" className="new-user-submit-btn">
            Add new user
          </button>
        </div>
      </Box>
    </div>
  );
};

export default AddUserForm;
