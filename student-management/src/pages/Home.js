import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSearch from "./StudentSearch";
import DisplayStudent from "./DisplayStudent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  const [students, setStudents] = useState([]);
  const[isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  return (
    <Container>
      <Row className="mt-2 mb-2 pb-2 pt-2" style={{backgroundColor:"black", color:"white"}}>
        <Col>
          <h1>
          Student Management System
          </h1>
        </Col>
      </Row>
      <Row>
        <Col >
          <StudentSearch students={students} setStudents={setStudents} isSearch={isSearch} setIsSearch={setIsSearch}/>
        </Col>
      </Row>
      <Row>
        {!isSearch && 
        < DisplayStudent students={students} setStudents={setStudents}/>}
      </Row>
    </Container>
  );
};

export default Home;