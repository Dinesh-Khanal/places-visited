import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </ul>
  );
};
export default UserList;
