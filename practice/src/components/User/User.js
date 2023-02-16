import React, { useState } from "react";
import AddUser from "./AddUser/AddUser";
import UserList from "./UserList/UserList";

function User() {
  const [userList, setUserList] = useState([]);
  const userListHandler = user => {
    setUserList(prev => {
      return [user, ...prev];
    });
  };
  return (
    <div>
      <AddUser pushUser={userListHandler} />
      <UserList userList={userList} />
    </div>
  );
}

export default User;
