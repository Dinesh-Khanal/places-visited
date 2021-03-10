import React from "react";

import Card from "../../shared/components/Card";
import UserList from "../components/UserList";

const users = [
  {
    id: 1,
    image:
      "https://pbs.twimg.com/profile_images/749682406890823680/ZxsDU-jl.jpg",
    name: "Dinesh",
    places: 3,
  },
  {
    id: 2,
    image:
      "https://himalayonlinemedia.com/wp-content/uploads/2015/01/gopal-khanal.jpg",
    name: "Gopal",
    places: 2,
  },
];
const Users = () => {
  return users.length === 0 ? (
    <div className="center">
      <Card>
        <h2>Data not found</h2>
      </Card>
    </div>
  ) : (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Users;
