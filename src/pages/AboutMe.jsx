import React from "react";
import profilePicture from "../assets/images/sanfran.jpeg";

export default function AboutMe() {
  return (
    <div className="m-5 pt-3">
      <h2 className="text-center">About Me</h2>
      <div className="m-1 pt-3 d-flex">
        <img
          src={profilePicture}
          alt="My Profile"
          style={{ width: "350px", height: "400px" }}
          className="mb-4"
        />

        <div className="px-3">
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
            {" "}
            In her current role as a consultant at JDM Consulting and Associates,
            Jenni is highly knowledgeable in diverse areas of innovation and
            problem-solving. She utilizes creative strategies to help clients
            and is a key team player with excellent interpersonal communication
            skills. Jenni excels at establishing and maintaining strong
            relationships with both colleagues and clients. She possesses a
            strong ability to multi-task while applying time management skills
            to reach company goals. Highly motivated, organized, and
            detail-driven, Jenni proactively seeks opportunities for personal
            and career development.
          </p>
          <div className="text-center" >
            <p >Let's Get in Touch!</p>
            <p>Email: hjipark22@gmail.com</p>
            <p>Phone: 312-918-7146</p>
          </div>
        </div>
      </div>
    </div>
  );
}
