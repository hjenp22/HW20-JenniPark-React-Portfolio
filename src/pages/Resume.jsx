import React from "react";

export default function Resume() {
    const resumeLink ="https://www.canva.com/design/DAF60bZUJeE/utTpp7uqRufy5n__nSxqOA/view?utm_content=DAF60bZUJeE&utm_campaign=designshare&utm_medium=link&utm_source=editor"
  return (
    <div>
      <h1>Resume</h1>
      <p>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </p>
      <h2>TECHNICAL SKILLS</h2>
      <ul>
        <li>
          <strong>Languages:</strong> JavaScript, HTML/CSS, SQL, JSON
        </li>
        <li>
          <strong>Database Management:</strong> MySQL, MongoDB
        </li>
        <li>
          <strong>Web Development Frameworks and Libraries:</strong> Express, React, Node, Handlebars, jQuery
        </li>
        <li>
          <strong>Development Tools & Platforms:</strong> Render, Heroku, Git, Bash, GitHub, Microsoft Office Suite
        </li>
      </ul>
    </div>
  );
}
