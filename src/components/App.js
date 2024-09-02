import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./../styles/App.css";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const App = () => {
  // const [data, setData] = useState([]);

  return (
    <div>
      {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
