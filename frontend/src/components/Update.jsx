import React from "react";
import axios from "axios";

const Update = () => {
    const handleupdate  = async (e)=>{
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const user = { name, age };
        await axios.put(`https://fsd-day-4-backend.onrender.com/users/${id}`, user)
        alert("User updated successfully");
    }
  return (
    <div>
        <h1>Update User</h1>
      <form onSubmit={handleupdate}>
        <label>
          ID: <input type="text" name="id"></input>
        </label>
        <label>
          Name: <input type="text" name="name"></input>
        </label>
        <label>
          Age: <input type="text" name="age"></input>
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
