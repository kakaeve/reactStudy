import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import styles from "./UserList.module.css";

function UserList(props) {
  const { userList } = props;
  if (userList.length === 0) {
    return;
  }

  return (
    <Card className={styles.users}>
      <ul>
        {userList.map(user => (
          <li key={user.key}>
            이름: {user.name} 나이: {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
