import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import profilePicture from "../assets/images/sanfran.jpeg";

export default function AboutMe() {
  return (
    <Container className="m-5 pt-3">
      <h2 className="text-center mb-4">About Me</h2>
      <Row className="m-1 pt-3">
        <Col xs={12} md={4} className="text-center mb-4">
          <img
            src={profilePicture}
            alt="My Profile"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
        <Col xs={12} md={8} className="px-3">
          <p>
            Jenni Park, is a premed graduate from Saint Xavier University,
            currently navigating Northwestern's programming bootcamp to fulfill
            her ambition of becoming a full-stack developer. Her journey is
            marked by a strong foundation in data analytics and problem-solving,
            fueled by expertise in Python, SQL, and Power BI. Transitioning from
            the life sciences to the dynamic world of technology, Jenni is
            crafting a unique narrative in programming.
          </p>
          <p>
            In her current role as a consultant at JDM Consulting and
            Associates, Jenni is highly knowledgeable in diverse areas of
            innovation and problem-solving. She utilizes creative strategies to
            help clients and is a key team player with excellent interpersonal
            communication skills. Jenni excels at establishing and maintaining
            strong relationships with both colleagues and clients. She possesses
            a strong ability to multi-task while applying time management skills
            to reach company goals. Highly motivated, organized, and
            detail-driven, Jenni proactively seeks opportunities for personal
            and career development.
          </p>
          <div className="text-center">
            <h5>Let's Get In Touch!</h5>
            <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Email: <a href="mailto:hjipark22@gmail.com">hjipark22@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faPhone} className="mr-2" />You call me: 312-918-7146</p>
            <Link to="/contact" className="btn btn-primary">I Call You</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
