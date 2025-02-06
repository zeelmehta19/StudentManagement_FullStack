import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Card} from "react-bootstrap";

const DisplayStudent = ({students, setStudents}) => {
    return (
        <>
            {students.map(student => (
              <Card className="pd-4" key={student.id} style={{ width: '18rem', margin: "2rem" }}>
                <Card.Body>
                    <Card.Title>{student.name}</Card.Title>
                    <Card.Text>
                        <Row>Name : {student.name}</Row>
                        <Row>Email : {student.email}</Row>
                        <Row>Age : {student.age}</Row>
                        <Row>Phone: {student.phone}</Row>
                        <Row>Class: {student.classval}</Row>
                    </Card.Text>
                        <Row>
                            <Col className="md-6"><Link to={`/edit-student/${student.id}`}><Button>Edit</Button></Link></Col>
                            <Col className="md-6"><Button variant="outline-danger" onClick={() => axios.delete(`http://localhost:8080/students/${student.id}`)
                        .then(() => setStudents(students.filter(s => s.id !== student.id)))}>Delete</Button></Col>
                        </Row>
                </Card.Body>
              </Card>
            ))}
        </>
      );

};

export default DisplayStudent;