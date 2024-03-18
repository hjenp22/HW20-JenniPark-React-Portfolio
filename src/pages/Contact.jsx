import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Contact.css";

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
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
      <Row>
        <Col>
          <h1 className="text-center">I'll Contact You!</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label><FontAwesomeIcon icon={faUser} className="mr-2" />Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={() => handleBlur("name")}
                placeholder="Enter your name"
              />
              {nameError && <Form.Text className="text-danger">{nameError}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur("email")}
                placeholder="Enter your email"
              />
              {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label><FontAwesomeIcon icon={faComment} className="mr-2" />Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={handleMessageChange}
                onBlur={() => handleBlur("message")}
                placeholder="Enter your message"
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
