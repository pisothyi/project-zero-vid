import React, { useCallback, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./LoginPage.css";
import { firebaseApp } from "../../firebase/firebaseApp";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../firebase/Auth";

const LoginPage = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(
            document.getElementById("email").value,
            document.getElementById("password").value
          );
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="body">
      <Container className="login-form-container">
        <Form className="login-form" onSubmit={handleLogin}>
          <div className="login-logo"></div>
          <h1>Project Zero Vid Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control id="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
