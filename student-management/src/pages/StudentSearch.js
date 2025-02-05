import React, { useState } from "react";
import axios from "axios";

const StudentSearch = () => {
    const [name, setName] = useState("");
    const [students, setStudents] = useState([]);

    const handleSearch = async () => {
        if (!name.trim()) return;

        try {
            const response = await axios.get(`http://localhost:8080/students/search?name=${name}`);
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    return (
        <div>
            <h2>Search Student by Name</h2>
            <input
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.name} - {student.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentSearch;