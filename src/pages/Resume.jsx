import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Resume() {
  const resumeLink =
    "https://www.canva.com/design/DAF60bZUJeE/utTpp7uqRufy5n__nSxqOA/view?utm_content=DAF60bZUJeE&utm_campaign=designshare&utm_medium=link&utm_source=editor";
  return (
    <div>
      <Container className="resume-container mt-5 mb-5">
        <h1>Resume</h1>
        <p>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </p>
        <Row>
          <Col>
            <div className="content">
              <h4>Work Experience</h4>
              <ul>
                <li>
                  <strong>JDM Consulting and Associates: Consultant</strong>{" "}
                  <p>
                    Led 6-month client collaboration project for Python-based solutions integrated with PostgreSQL databases. Managed 5-member cross-functional team, ensuring timely delivery and adherence to scope. Achieved 30% SQL query response time improvement and 25% database efficiency boost through performance optimization. Provided consultancy, achieving 80% adoption of best practices. Maintained 95% on-time delivery and 90% scope adherence. Collaborated on business requirements analysis, backend development, and project delivery with cross-functional teams.
                  </p>
                </li>
                <li>
                  <strong>Web Technologies:</strong> Django, Reach.js, HTML, CSS, JSON, Bootstrap, jQuery, AJAX
                </li>
                <li>
                  <strong>Database Technologies:</strong> MongoDB, NoSQL, MySQL
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="content">
              <h4>Technical Skills</h4>
              <ul>
                <li>
                  <strong>Programming Languages:</strong> Python, JavaScript, HTML/CSS, SQL, JSON
                </li>
                <li>
                  <strong>Web Technologies:</strong> Django, Reach.js, HTML, CSS, JSON, Bootstrap, jQuery, AJAX
                </li>
                <li>
                  <strong>Database Technologies:</strong> MongoDB, NoSQL, MySQL
                </li>
                <li>
                  <strong>Development Tools & Platforms:</strong> Render, Heroku, Git, Bash, GitHub, Microsoft Office Suite
                </li>
                <li>
                  <strong>Software Development:</strong> System analysis, Coding Standards
                </li>
                <li>
                  <strong>Frontend Frameworks:</strong> Bootstrap, Handlebars.js, React
                </li>
                <li>
                  <strong>Backend Frameworks:</strong> Django, Node.js
                </li>
                <li>
                  <strong>APIs:</strong> Application Programming Interfaces
                </li>
                <li>
                  <strong>Other:</strong> Tableau, Power BI, Data Structures, JavaScript Frameworks
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
