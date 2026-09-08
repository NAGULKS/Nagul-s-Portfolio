import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Nagul.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{ padding: "20px" }}
      >
        <Particle />

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            padding: "20px 0",
          }}
        >
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
    <Container
      id="Resume"
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          NAGUL K.S
        </h1>

        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          SOFTWARE ENGINEER | IoT ENGINEER
        </p>

        <p style={{ fontSize: "1.1rem", margin: "10px 0" }}>
          Salem, Tamil Nadu | +91 9843680094
        </p>

        <p style={{ fontSize: "1.1rem", margin: "10px 0" }}>
          <a
            href="mailto:technagul01@gmail.com"
            style={{
              textDecoration: "none",
              color: "#007bff",
            }}
          >
            technagul01@gmail.com
          </a>
        </p>
      </header>

      {/* Professional Summary */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            borderBottom: "2px solid #007bff",
            paddingBottom: "10px",
          }}
        >
          Professional Summary
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
          }}
        >
          Software Engineer with a B.E. in Computer Science and Engineering
          and hands-on experience in web development, IoT, cloud integration,
          and software projects. Skilled in Java, Python, JavaScript, React.js,
          PHP, MySQL, AWS, ThingSpeak, Linux, and embedded systems. Strong
          foundation in software development, system troubleshooting,
          cloud-connected IoT solutions, and problem solving.
        </p>
      </section>

      {/* Education */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            borderBottom: "2px solid #007bff",
            paddingBottom: "10px",
          }}
        >
          Education
        </h2>

        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "15px" }}>
            <strong>B.E. Computer Science and Engineering</strong>
            <br />
            Kongu Engineering College, Perundurai | 2020 – 2024 | CGPA: 8.21
          </li>

          <li style={{ marginBottom: "15px" }}>
            <strong>
              AISSCE (Class XII) – Mathematics and Computer Science
            </strong>
            <br />
            Bharathiyar Hi-Tech International Senior Secondary School CBSE,
            Attur | 2020 | 71%
          </li>

          <li style={{ marginBottom: "15px" }}>
            <strong>AISSE (Class X)</strong>
            <br />
            Bharathiyar Hi-Tech International School CBSE, Attur | 2018 | 68%
          </li>
        </ul>
      </section>

      {/* Professional Experience */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            borderBottom: "2px solid #007bff",
            paddingBottom: "10px",
          }}
        >
          Professional Experience
        </h2>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "1.3rem" }}>
            Web Developer | Optimus Technocrates (India) Pvt. Ltd.
          </h3>

          <p>
            <strong>Apr 2025 – Sep 2025</strong>
          </p>

          <ul>
            <li>Developed responsive web applications for client-based projects.</li>
            <li>
              Implemented web application requirements using frontend and
              backend technologies.
            </li>
            <li>
              Collaborated with the development team on application development
              and project delivery.
            </li>
            <li>
              Supported application testing, troubleshooting, and implementation
              activities.
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.3rem" }}>
            IoT Developer Intern | Magnertia TBI@KEC
          </h3>

          <p>
            <strong>Apr 2023 – Dec 2023</strong>
          </p>

          <ul>
            <li>
              Integrated IoT hardware with AWS and ThingSpeak for real-time
              cloud monitoring.
            </li>
            <li>
              Worked on IoT solutions involving hardware, software, and cloud
              integration.
            </li>
            <li>
              Supported real-time data monitoring through cloud-connected IoT
              systems.
            </li>
            <li>
              Collaborated with the development team to improve IoT system
              connectivity and prototype development.
            </li>
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            borderBottom: "2px solid #007bff",
            paddingBottom: "10px",
          }}
        >
          Technical Skills
        </h2>

        <ul>
          <li style={{ marginBottom: "10px" }}>
            <strong>Programming Languages:</strong> Java, Python, C, Embedded C
          </li>

          <li style={{ marginBottom: "10px" }}>
            <strong>Web Development:</strong> HTML, CSS, Bootstrap, JavaScript,
            React.js, PHP
          </li>

          <li style={{ marginBottom: "10px" }}>
            <strong>Database:</strong> MySQL, Oracle
          </li>

          <li style={{ marginBottom: "10px" }}>
            <strong>IoT and Cloud:</strong> AWS, ThingSpeak, IoT Hardware
            Integration, Cloud Integration
          </li>

          <li style={{ marginBottom: "10px" }}>
            <strong>AI and Machine Learning:</strong> Machine Learning, MATLAB
          </li>

          <li style={{ marginBottom: "10px" }}>
            <strong>Tools and Operating Systems:</strong> Linux, COOJA
          </li>
        </ul>
      </section>

      {/* Publications */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            borderBottom: "2px solid #007bff",
            paddingBottom: "10px",
          }}
        >
          Publications
        </h2>

        <ul>
          <li style={{ marginBottom: "15px" }}>
            <strong>Cotton Boll Detection Using Deep Learning</strong>
            <br />
            2024 4th International Conference on Sustainable Expert Systems
            (ICSES), IEEE Xplore, 2024.
          </li>

          <li style={{ marginBottom: "15px" }}>
            <strong>
              Exploring the Impact of COVID-19 on Thailand’s Tourism Industry:
              A Sentiment Analysis Approach Using Twitter Data
            </strong>
            <br />
            IEEE Conference, 2023; indexed in IEEE Xplore in 2024.
          </li>
        </ul>
      </section>

      {/* Leadership and Activities */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            borderBottom: "2px solid #007bff",
            paddingBottom: "10px",
          }}
        >
          Leadership and Activities
        </h2>

        <ul>
          <li style={{ marginBottom: "10px" }}>
            Joint Secretary, CSE Association | 2023 – 2024
          </li>

          <li style={{ marginBottom: "10px" }}>
            Software Coordinator, TBI@KEC | 2022 – 2023
          </li>

          <li style={{ marginBottom: "10px" }}>
            Presented papers on IoT and Cybersecurity at national-level
            symposiums.
          </li>

          <li style={{ marginBottom: "10px" }}>
            Volunteer, NSS | 2022 – 2023
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            borderBottom: "2px solid #007bff",
            paddingBottom: "10px",
          }}
        >
          Projects
        </h2>

        <ul>
          <li style={{ marginBottom: "15px" }}>
            <strong>
              Cotton Boll Recognition for Robotic Harvesting Using CNN U-Net
            </strong>
            <br />
            Developed a deep learning model using CNN and U-Net to detect and
            classify cotton bolls for agricultural automation and robotic
            harvesting.
          </li>

          <li style={{ marginBottom: "15px" }}>
            <strong>Thailand Tourism Sentiment Analysis</strong>
            <br />
            Conducted sentiment analysis on Twitter data to evaluate public
            perception and tourism recovery trends following the COVID-19
            pandemic.
          </li>

          <li style={{ marginBottom: "15px" }}>
            <strong>Sree Senthoor Tiles & Ceramics</strong>
            <br />
            Designed and developed a PHP-based platform for product management
            and customer handling.
          </li>

          <li style={{ marginBottom: "15px" }}>
            <strong>Single Portal for Land Survey</strong>
            <br />
            Proposed a centralized digital solution for land record management
            as part of Ideathon 2022 at Kongu Engineering College.
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default ResumeNew;
