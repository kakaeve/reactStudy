import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";

function UserList(props) {
  let needRenderUserList = [];

  const { userList } = props;
  if (userList.length === 0) {
    return;
  }
  console.log(userList);

  return (
    <Card>
      <ul className={styles.users}>
        {userList.map(user => (
          <UserListItem user={user} />
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
