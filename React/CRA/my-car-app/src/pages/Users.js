import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <>
      <h2>User</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
