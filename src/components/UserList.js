import React from "react";
import { Link } from "react-router-dom";

function UserList() {
  return (
    <>
      <h1>User List</h1>
      <ul>
        <Link to="/users/1">
          <li>User 1</li>
        </Link>
        <Link to="/users/2">
          <li>User 2</li>
        </Link>
        <Link to="/users/3">
          <li>User 3</li>
        </Link>
      </ul>
    </>
  );
}

export default UserList;
