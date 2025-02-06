import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Form, Container} from "react-bootstrap";


const AddStudent = () => {
  const [student, setStudent] = useState({ name: "", email: "", age:"", classval:"", phone:"" });
  const navigate = useNavigate();

  const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/students", student)
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
              placeholder="Phone"
              onChange={handleChange}  
              />            
          </Form.Group>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
    </Container>
    </>
  );
};

export default AddStudent;