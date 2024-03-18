import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 text-center mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-md-3">
            <a
              href="https://github.com/hjenp22"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-center"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="img-fluid" style={{ maxWidth: "100px" }} />
            </a>
          </div>
          <div className="col-6 col-md-3">
            <a
              href="https://www.linkedin.com/in/hjennip"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-center"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="img-fluid" style={{ maxWidth: "100px" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
