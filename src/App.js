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
    { name: "Nana Ab", email: "nanaab@gmail.com", gen: "22", id: "sjhsjndcnd" },
    {
      name: "Kwabena",
      email: "nanakwabena@gmail.com",
      gen: "22",
      id: "kjkdjskd",
    },
  ]);
  const newUser = (user) => {
    user.id = Math.random().toString(36);
    setUsers([
      ...users,
      { id: user.id, name: user.name, email: user.email, gen: user.gen },
    ]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const handleEdit = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <AddUserForm addUser={newUser} />
          </Col>
          <Col md={6}>
            <AllUsers
              userData={users}
              deleteUser={deleteUser}
              editUser={handleEdit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
