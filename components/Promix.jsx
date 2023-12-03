import React, { useState } from "react";
import "./promix.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./UsersSlice";

function Promix() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="promix">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name....."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="userName....."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            {
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  username,
                })
              );
            }
          }}
        >
          addUser
        </button>
      </div>

      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              
               <h1>{user.id}</h1>
              <h3>{user.name}</h3>
              <h1>{user.username}</h1>

              <input
                type="text"
                placeholder="new userName.."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />

              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                Update Name
              </button>

              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default Promix;
