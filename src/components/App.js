import React from "react";
import { Routes, Route } from "react-router-dom";
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
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
