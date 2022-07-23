import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Nana Ab", email: "nanaab@gmail.com", gen: "22" },
    { name: "Kwabena", email: "nanakwabena@gmail.com", gen: "22" },
  ]);
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <AddUserForm />
          </Col>
          <Col md={6}>
            <AllUsers userData={users} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
