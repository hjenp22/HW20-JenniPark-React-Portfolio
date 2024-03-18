import React from "react";
import "./Project.css";

export default function Project({ name, githubLink, deployedLink, image }) {
  const containerImage = {
    backgroundImage: `url(/images/${image})`,
  };

  return (
    <div className="container my-4 project-container" style={containerImage}>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="project-name">{name}</h2>
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
