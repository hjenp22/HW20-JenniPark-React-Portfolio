import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError("");
  };

  const handleBlur = (field) => {
    if (field === "name" && !name.trim()) {
      setNameError("Name is required");
    }

    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
    }

    if (field === "message" && !message.trim()) {
      setMessageError("Message is required");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setNameError("Name is required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
    }

    // If there are no errors, proceed with form submission
    if (!nameError && !emailError && !messageError) {
      // Clear form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Row>
        <Col>
          <h1>Contact Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={() => handleBlur("name")}
              />
              {nameError && <Form.Text className="text-danger">{nameError}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur("email")}
              />
              {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={handleMessageChange}
                onBlur={() => handleBlur("message")}
              />
              {messageError && <Form.Text className="text-danger">{messageError}</Form.Text>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
