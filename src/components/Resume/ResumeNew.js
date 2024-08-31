import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/NAGUL.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ padding: '20px' }}>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", padding: '20px 0' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", borderRadius: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Resume />
      </Container>
    </div>
  );
}

const Resume = () => {
  return (
    <Container id="Resume" style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>NAGUL K S</h1>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Email: <a href="mailto:technagul01@gmail.com" style={{ textDecoration: "none", color: "#007bff" }}>technagul01@gmail.com</a>
        </p>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>Mobile: +91 8610874800</p>
      </header>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Career Objective</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Seeking a challenging position in a work environment where I can grow and also contribute to the company's growth using my excellent development and management skills.
        </p>
      </section>

      <section  style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Educational Qualifications</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>BE in Computer Science and Engineering at Kongu Engineering College, Perundurai with a CGPA of 8.21.</li>
          <li style={{ marginBottom: "10px" }}>AISSCE in 2020 at Bharathiyar Hi-Tech International Senior Secondary School (CBSE), Attur with 75.0%</li>
          <li style={{ marginBottom: "10px" }}>AISSE in 2018 at Bharathiyar Hi-Tech International School (CBSE), Attur with 68.0%</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Skill Set</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>C, Java, Python, C++</li>
          <li style={{ marginBottom: "10px" }}>MySQL</li>
          <li style={{ marginBottom: "10px" }}>MATLAB</li>
          <li style={{ marginBottom: "10px" }}>HTML, CSS, Bootstrap, JavaScript</li>
          <li style={{ marginBottom: "10px" }}>Machine Learning</li>
          <li style={{ marginBottom: "10px" }}>IoT, ThingSpeak, AWS</li>
          <li style={{ marginBottom: "10px" }}>COOJA Simulation Tool</li>
          <li style={{ marginBottom: "10px" }}>Linux</li>
        </ul>
      </section>

      <section  style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Intern</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          JAVA FULL STACK DEVELOPER TRAINEE with IZEON INNOVATIVE
        </p>
      </section>

      <section  style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Areas of Interest</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>Full Stack Development</li>
          <li style={{ marginBottom: "10px" }}>Internet of Things</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Projects Done</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>“Image recognition using MATLAB” at two-credit course, KEC.</li>
          <li style={{ marginBottom: "10px" }}>“Single Portal for Land survey” at the Ideathon-2022, KEC.</li>
          <li style={{ marginBottom: "10px" }}>“Sree Senthoor Tiles & Ceramics” as Academic Project, KEC.</li>
          <li style={{ marginBottom: "10px" }}>“Automated Street Light” at the SIH Presentation</li>
          <li style={{ marginBottom: "10px" }}>“Cotton Boll Detection Using Deep Learning” as Academic Project, KEC.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Papers Presented</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>“Role of Cybersecurity in Education” in EIE at KEC.</li>
          <li style={{ marginBottom: "10px" }}>“Smart Irrigation System using IoT” in Renaissance 2k22 at KEC.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Other Presentations</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>“Smart Irrigation System using IoT” in IoT INNOVATION CUP at Bannari Amman Institute of Technology Erode, November 14th 2021</li>
          <li style={{ marginBottom: "10px" }}>“Security threats on the World Wide Web” in IoT INNOVATION CUP at Bannari Amman Institute of Technology Erode, November 14th 2021</li>
        </ul>
      </section>

      <section  style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Industrial Training & Visits</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>Underwent 7 days training in Web Technology at OPTIMUS TECHNOCRATES from July 19 to July 25, 2022</li>
          <li style={{ marginBottom: "10px" }}>Visited Kerala Innovation, Cochin on May 28th 2022 for gaining industrial experiences.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Membership in Professional & Academic Bodies</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>Joint Secretary in Computer Science and Engineering Association (CSEA)</li>
          <li style={{ marginBottom: "10px" }}>Volunteer in NSS</li>
          <li style={{ marginBottom: "10px" }}>Executive Member in MADC of KEC (2022-2023)</li>
          <li style={{ marginBottom: "10px" }}>Software Coordinator in IIC(IEF) of KEC (2022-2023)</li>
          <li style={{ marginBottom: "10px" }}>Coordinator Public and Corporate Relations IEF@KEC (2023-2024)</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Other Credentials</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "10px" }}>Participated in Coffee with Java by Samhita 22, a National Level Coding Competition</li>
          <li style={{ marginBottom: "10px" }}>Participated in Blind Coding by Renaissance’21, at KEC</li>
          <li style={{ marginBottom: "10px" }}>Intern as IoT Developer in Magnertia company (April 2023 to Dec 2023)</li>
          <li style={{ marginBottom: "10px" }}>Published Paper in Scopus Journal, an IEEE conference</li>
        </ul>
      </section>
    </Container>
  );
};

export default ResumeNew;
