import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
function UserDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const data = axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      data
        .then((res) => {
          setUserData(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  console.log(userData);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <p>
            <b>Name: </b>
            {userData.name}
          </p>
          <p>
            <b>Username: </b>
            {userData.username}
          </p>
          <p>
            <b>Email: </b>
            {userData.email}
          </p>
          <p>
            <b>Phone: </b>
            {userData.phone}
          </p>
          <p>
            <b>Website: </b>
            {userData.website}
          </p>
        </div>
      )}
    </>
  );
}

export default UserDetails;
