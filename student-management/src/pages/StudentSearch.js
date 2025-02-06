import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayStudent from "./DisplayStudent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Form } from "react-bootstrap";
//import { Form } from "react-router-dom";

const StudentSearch = ({students, setStudents, isSearch, setIsSearch}) => {
    const [name, setName] = useState("");
    const[isEmpty, setIsEmpty] = useState(false);
    const handleSearch = async () => {
        if (!name.trim()) return;

        try {
            setIsSearch(true);
            const response = await axios.get(`http://localhost:8080/students/search?name=${name}`);
            console.log(response.data);
            if(response.data.length === 0){
                setIsEmpty(true);
            }else{
                setIsEmpty(false);
            }
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const handleClear = () => {
        setName("");
        setIsSearch(false);
    }

    return (
        <>
        <Form>
            <Row>
                <h2>Search Student by Name</h2>
            </Row>
            <Row className="mb-3">
                <Col className="md-10">
                    <Form.Group >
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter student name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col className="md-2">
                    <Link to="/add-student"><Button variant="primary">Add Student</Button></Link>
                </Col>
            </Row>
            <Row>
                <Col className="md-5">
                    <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
                </Col>
                <Col className="md-5">
                    <Button variant="outline-warning" onClick={handleClear}>Clear</Button>
                </Col>
                <Col className="md-2"></Col>
            </Row>
        </Form>
        {
            isSearch &&
            <DisplayStudent students={students} setStudents={setStudents} /> 
        }
        {
            isEmpty &&
            <h4>No records found!!</h4>
        }

        </>
    );
};

export default StudentSearch;