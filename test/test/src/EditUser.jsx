import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserList.css";



const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [editingUserId, setEditingUserId] = useState(null); // Track which user is being edited
  const [editedUser, setEditedUser] = useState({}); // Track edits for the user being edited
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
  }, [page, navigate]);

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditedUser(user); // Initialize the edit form with the user's current data
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSaveClick = async (id) => {
    try {
      // Mock API call to update user
      await axios.put(`https://reqres.in/api/users/${id}`, editedUser);

      // Update user in local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...editedUser } : user
        )
      );

      setEditingUserId(null); // Exit edit mode
      alert("User updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update user.");
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <div className="main1">
        {users.map((user) => (
          <div key={user.id} className="card" >
            <div className="profile-pic">
              <img
                src={user.avatar} alt={user.first_name}
              />
            </div>
            {editingUserId === user.id ? (
              <div className="field">
                <input
                  type="text"
                  name="first_name"
                  value={editedUser.first_name}
                  onChange={handleEditChange}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="last_name"
                  value={editedUser.last_name}
                  onChange={handleEditChange}
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleEditChange}
                  placeholder="Email"
                />
                <div className="divbut">
                <button className="button-28" onClick={() => handleSaveClick(user.id)}>Save</button>
                <button className="button-28" onClick={() => setEditingUserId(null)}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <p>{`${user.first_name} ${user.last_name}`}</p>
                <div className="divbut">
                <button className="button-28" onClick={() => handleEditClick(user)}>Edit</button>
                <button className="buttond-28" onClick={async () => {
                await axios.delete(`https://reqres.in/api/users/${user.id}`);
                setUsers(users.filter((u) => u.id !== user.id));
              }}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button className="nextpre" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button  className="nextpre" onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default UserList;
