import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
            Hi Everyone, I am <span className="purple">Nagul K S</span> from{" "}
            <span className="purple">Salem, India.</span>
            <br />
            I am a Computer Science and Engineering graduate from{" "}
            <span className="purple">Kongu Engineering College</span>.
            <br />
            I have professional experience as a{" "}
            <span className="purple">Web Developer</span> at Optimus
            Technocrates (India) Pvt. Ltd.
            <br />
            I also have experience as an{" "}
            <span className="purple">IoT Developer Intern</span> at Magnertia
            TBI@KEC, working with IoT hardware, AWS, and ThingSpeak.
            <br />
            <br />
            I am interested in software development, web technologies, IoT,
            cloud integration, and building practical technology solutions.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>

          <footer className="blockquote-footer">Nagul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
