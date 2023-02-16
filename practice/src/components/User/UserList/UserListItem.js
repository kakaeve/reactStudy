import React from "react";
import Card from "../../UI/Card/Card";

function UserListItem(props) {
  const { user } = props;
  console.log("first");
  console.log(user);
  return (
    <li>
      이름: {user.name} 나이: {user.age}
    </li>
  );
}

export default UserListItem;
