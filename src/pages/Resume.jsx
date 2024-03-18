import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  const resumeLink =
    "https://www.canva.com/design/DAF60bZUJeE/utTpp7uqRufy5n__nSxqOA/view?utm_content=DAF60bZUJeE&utm_campaign=designshare&utm_medium=link&utm_source=editor";
  return (
    <div>
      <Container className="resume-container mt-5 mb-5">
      <h1>Resume</h1>
        <p>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" href={resumeLink} target="_blank" rel="noopener noreferrer">
            View Resume
            </Button>
          </a>
        </p>
        <Row>
          <Col>
          <div className="content">
              <h4><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h4>

              <ul>
                <h5>JDM Consulting and Associates | Consultant</h5>{" "}
                <ul>
                  <li>
                    Led 6-month client collaboration project for Python-based
                    solutions integrated with PostgreSQL databases.
                  </li>
                  <li>
                    Managed 5-member cross-functional team, ensuring timely
                    delivery and adherence to scope.
                  </li>
                  <li>
                    Achieved 30% SQL query response time improvement and 25%
                    database efficiency boost through performance optimization.
                  </li>
                  <li>
                    Provided consultancy, achieving 80% adoption of best
                    practices.
                  </li>
                  <li>
                    Maintained 95% on-time delivery and 90% scope adherence.
                  </li>
                  <li>
                    Collaborated on business requirements analysis, backend
                    development, and project delivery with cross-functional
                    teams.
                  </li>
                </ul>
              </ul>

              <ul>
                <h5>JPAIK | Database and Art Inventory Manager</h5>{" "}
                <ul>
                  <li>
                    Spearheaded the establishment and meticulous maintenance of
                    a comprehensive database encompassing 100+ clients,
                    capturing intricate details, contact information, and
                    personalized art preferences.
                  </li>
                  <li>
                    Orchestrated the efficient management of an art inventory
                    comprising 75+ pieces, collectively valued at over $1
                    million.
                  </li>
                  <li>
                    Significantly contributing to the expansion of the artist
                    roster, I engaged in dedicated research, attended art fairs,
                    and conducted studio visits across the Midwest to identify
                    and onboard new talents.
                  </li>
                </ul>
              </ul>

              <ul>
                <h5>JDM Consulting and Associates | Intern </h5>{" "}
                <ul>
                  <li>
                    Conducted in-depth research, leading to an 80% improvement
                    in project efficiency by implementing advanced data analysis
                    techniques
                  </li>
                  <li>
                    Collaborated with cross-functional teams to devise
                    innovative client solutions, resulting in increased client
                    satisfaction by 70%.
                  </li>
                  <li>
                    Engaged directly with end users, addressing their needs and
                    ensuring a seamless client experience.
                  </li>
                  <li>
                    Developed and applied strong analytical and problem-solving
                    skills, actively contributing to the creation of high-impact
                    client deliverables.
                  </li>
                  <li>
                    Participated in client meetings, enhancing communication
                    skills and fostering client relationships.
                  </li>
                </ul>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="content">
              <h4><FontAwesomeIcon icon={faLaptopCode} /> Technical Skills</h4>

              <ul>
                <h7>
                  <em>Programming Languages:</em>
                </h7>
                <ul>
                  <li>Python, JavaScript, HTML/CSS, SQL, JSON</li>
                </ul>

                <h7>
                  <em>Web Technologies:</em>
                </h7>
                <ul>
                  <li>
                    Django, React.js, HTML, CSS, JSON, Bootstrap, jQuery, AJAX
                  </li>
                </ul>

                <h7>
                  <em>Database Technologies:</em>
                </h7>
                <ul>
                  <li>MongoDB, NoSQL, MySQL</li>
                </ul>

                <h7>
                  <em>Development Tools & Platforms:</em>
                </h7>
                <ul>
                  <li>
                    Render, Heroku, Git, Bash, GitHub, Microsoft Office Suite
                  </li>
                </ul>

                <h7>
                  <em>Software Development:</em>
                </h7>
                <ul>
                  <li>System analysis, Coding Standards</li>
                </ul>

                <h7>
                  <em>Frontend Frameworks:</em>
                </h7>
                <ul>
                  <li>Bootstrap, Handlebars.js, React</li>
                </ul>

                <h7>
                  <em>Backend Frameworks:</em>
                </h7>
                <ul>
                  <li>Django, Node.js</li>
                </ul>

                <h7>
                  <em>APIs:</em>
                </h7>
                <ul>
                  <li>Application Programming Interfaces</li>
                </ul>

                <h7>
                  <em>Other:</em>
                </h7>
                <ul>
                  <li>
                    Tableau, Power BI, Data Structures, JavaScript Frameworks
                  </li>
                </ul>
              </ul>
            </div>

            <div className="content">
              <h4><FontAwesomeIcon icon={faGraduationCap} /> Education</h4>
              
              <h7>
                <em>Northwestern University | Chicago IL</em>
              </h7>
              <ul>
                <li>Full Stack Coding Certificate Candidate</li>
              </ul>

              <h7>
                <em>Saint Xavier University | Chicago IL</em>
              </h7>
              <ul>
                <li>Bachelor of Science in Biology Pre-Health Sciences</li>
                <li>Graduate - Magna Cum Laude</li>
                <li>
                  Member of Beta Beta Beta- Biology National Honors Society
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
