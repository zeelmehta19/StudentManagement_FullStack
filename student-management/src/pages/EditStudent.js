import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    console.log("In useeffect");
    console.log(id);
    axios.get(`http://localhost:8080/students/${id}`)
      .then(res => setStudent(res.data));
    console.log(student);
  }, [id]);

  const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/students/${id}`, student)
      .then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="id" value={student.id} onChange={handleChange} required />
        <input name="name" value={student.name} onChange={handleChange} required />
        <input name="email" value={student.email} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;