import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import UserList from "./UserList";
import EditUser from "./EditUser";

const App = () => {
  return (
    <Routes>
      {/* Redirect root path to /login */}
      <Route path="/" element={<Navigate to="/login" />} />
      
      {/* Define the routes for Login, UserList, and EditUser */}
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
};

export default App;
