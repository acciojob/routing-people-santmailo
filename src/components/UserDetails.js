import React from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>User Details</h1>
      <p>user {id}</p>
    </>
  );
}

export default UserDetails;
