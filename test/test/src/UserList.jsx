import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import "./UserList.css";


const UserList = () => {
  const { users, setUsers } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}`
        );
        setUsers(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [page, navigate, setUsers]);

  return (
    <div>
      <h2>User</h2>
      <div className="main1">
        {users.map((user) => (
          <div key={user.id} className="card" >
            <div className="profile-pic">
              <img
                src={user.avatar} alt={user.first_name}
              />
            </div>
            <h2 className="profile-name">{`${user.first_name} ${user.last_name}`}</h2>
            <div className="button-container">
              <button className="button-28" onClick={() => navigate(`/edit/${user.id}`, { state: { user } })}>Edit</button>
              <button className="buttond-28" onClick={async () => {
                await axios.delete(`https://reqres.in/api/users/${user.id}`);
                setUsers(users.filter((u) => u.id !== user.id));
              }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="nextpre">
      <button    className="pre"     disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button     className="pre"   onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UserList;
