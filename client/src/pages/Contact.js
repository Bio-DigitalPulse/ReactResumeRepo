import React from "react";

function Contact() {
  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-5">Contact</h1>
      <div className="card">
        <p className="mt-5 mb-5">
          <a href="mailto:aaron.k.keller@gmail.com" className="lead text-muted">
            aaron.k.keller@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://github.com/bio-digitalpulse"
            target="_blank"
            className="btn btn-secondary my-2 mr-3 mt-5 mb-5"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-keller-b54941212/"
            target="_blank"
            className="btn btn-secondary my-2 mt-5 mb-5"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
