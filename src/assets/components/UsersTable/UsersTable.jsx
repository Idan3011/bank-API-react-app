import React, { useEffect, useState } from "react";
import "./UsersTable.css";
import axios from "../../../../data/usersAPI";
import Spinner from "../spinner/Spinner";
import DipositCash from "../DipostCash/DipositCash";
import AddUserForm from "../AddUserForm/AddUserForm";

const UsersTable = () => {
  const [bankUsers, setBankUsers] = useState([]);
  const [addUserButton, setAddUserButton] = useState(false);
  const [depositCashOrCredit, setDepositCashOrCredit] = useState(false);
  const [cashOrcredit, setCashOrCredit] = useState("");
  const [cashOrcreditDiposit, setCashOrCreditDiposit] = useState(0);
  const [dipositUserId, setDipositUserId] = useState("");
  const [buttonClicked, setIsButtonClicked] = useState(false);
  const [userToDiposit, setUserToDipositTo] = useState(null);

  const handleDeleteUser = (userId) => {
    try {
      axios.delete(`/users/deleteuser/${userId}`);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const handleUserDiposit = async (userId, userName) => {
    setDepositCashOrCredit(true);
    setDipositUserId(userId);
    setUserToDipositTo(userName);
 
  };
  useEffect(() => {
    const diposit = `${cashOrcredit}Deposit`;
    const fetchData = async () => {
      try {
        await axios.put(`/users/${dipositUserId}/${cashOrcredit}Deposit`, {
          [diposit]: Number(cashOrcreditDiposit),
        });
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    if (
      cashOrcredit.length > 0 &&
      cashOrcreditDiposit > 0 &&
      buttonClicked &&
      diposit.length > 0
    ) {
      fetchData();
      
    }
  }, [cashOrcredit, cashOrcreditDiposit, dipositUserId]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/users");
        const users = res.data;

        if (users) {
          setBankUsers([...users]);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);

  const handleClick = () => {
    setAddUserButton(true);
  };

  return (
    <>
      <div className="UsersTable">
        <h1>Users DashBoard</h1>
        <button className="add-user-btn" onClick={handleClick}>
          Add user
        </button>
        {addUserButton ? (
          <>
            <AddUserForm setAddUserButton={setAddUserButton} />
          </>
        ) : null}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">ID</th>
              <th scope="col">Cash</th>
              <th scope="col">Credit</th>
              <th scope="col">Total savings</th>
              <th scope="col">Deposit</th>
              <th scope="col">Withdraw</th>
              <th scope="col">Transfer</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {bankUsers.length !== 0 ? (
              bankUsers?.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.userName}</td>
                    <td>{user.id}</td>
                    <td>{user.cash}$</td>
                    <td>{user.credit}$</td>
                    <td>{user.totalCashFlow}$</td>
                    <td>
                      <button
                        onClick={() =>
                          handleUserDiposit(user.id, user.userName)
                        }
                      >
                        Deposit
                      </button>
                    </td>
                    <td>
                      <button>Withdraw</button>
                    </td>
                    <td>
                      <button>Transfer</button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteUser(user.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <Spinner />
            )}
          </tbody>
        </table>
        {depositCashOrCredit ? (
          <DipositCash
            setDepositCashOrCredit={setDepositCashOrCredit}
            setCashOrCredit={setCashOrCredit}
            setCashOrCreditDiposit={setCashOrCreditDiposit}
            setIsButtonClicked={setIsButtonClicked}
            userToDiposit={userToDiposit}
            buttonClicked={buttonClicked}
          />
        ) : null}
      </div>
    </>
  );
};

export default UsersTable;
