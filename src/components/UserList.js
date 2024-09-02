import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
function UserList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const data = axios.get("https://jsonplaceholder.typicode.com/users");
      data
        .then((res) => {
          setData(() => [...res.data]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>User List</h1>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/users/${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
export default UserList;
