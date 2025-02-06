import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Form, Container} from "react-bootstrap";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    axios.get(`http://localhost:8080/students/${id}`)
      .then(res => setStudent(res.data));
  }, [id]);

  const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/students/${id}`, student)
      .then(() => navigate("/"));
  };

  return (
    <>
    <Container>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-4 mt-4">
          <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={student.name}
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>
      </Row>
      <Row className="mb-4">
          <Form.Group  >
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              value={student.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}  
              />            
          </Form.Group>
      </Row>
      <Row className="mb-4">
          <Form.Group >
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              type="text"
              value={student.age}
              name="age"
              placeholder="Age"
              onChange={handleChange}
            />
          </Form.Group>
      </Row>
      <Row className="mb-4">
          <Form.Group  >
            <Form.Label>Class</Form.Label>
            <Form.Control
              required
              type="text"
              value={student.classval}
              name="classval"
              placeholder="Class"
              onChange={handleChange}  
              />            
          </Form.Group>
      </Row>
      <Row className="mb-4">
          <Form.Group >
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="tel"
              name="phone"
              value={student.phone}
              placeholder="Phone"
              onChange={handleChange}  
              />            
          </Form.Group>
      </Row>
      <Button type="submit">Update</Button>
    </Form>
    </Container>
    </>
  );
};

export default EditStudent;