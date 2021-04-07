import React from "react";
import Card from "../../shared/components/Card";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <React.Fragment>
      {!users ? (
        <div className="center">
          <Card>
            <h2>Data not found</h2>
          </Card>
        </div>
      ) : (
        <ul className="users-list">
          {users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};
export default UserList;
