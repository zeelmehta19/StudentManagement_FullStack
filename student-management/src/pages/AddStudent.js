import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({ id: "", name: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/students", student)
      .then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
      <input name="id" placeholder="Id" onChange={handleChange} required />
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;