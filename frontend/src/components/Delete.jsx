import React from "react";
import axios from "axios";

const Delete = () => {
  const handledelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    await axios.delete(`https://fsd-day-4-backend.onrender.com/users/${id}`);
    alert("User deleted successfully");
  };
  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handledelete}>
        <label>
          ID: <input type="text" name="id"></input>
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;
