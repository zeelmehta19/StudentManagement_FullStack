import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentSearch from "./StudentSearch";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>
      <Link to="/add-student"><button>Add Student</button></Link>
      <StudentSearch />
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.email}
            {console.log(student.id)}
            <Link to={`/edit-student/${student.id}`}>Edit</Link>
            <button onClick={() => axios.delete(`http://localhost:8080/students/${student.id}`)
              .then(() => setStudents(students.filter(s => s.id !== student.id)))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;