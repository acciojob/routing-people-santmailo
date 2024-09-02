import React from "react";
import { Link } from "react-router-dom";

function UserList() {
  return (
    <>
      <h1>User List</h1>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/1">User 2</Link>
        </li>
        <li>
          <Link to="/users/1">User 3</Link>
        </li>
        <li>
          <Link to="/users/1">User 4</Link>
        </li>
      </ul>
    </>
  );
}

export default UserList;
