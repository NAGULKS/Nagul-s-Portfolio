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
            style={{
              maxWidth: "250px",
              borderRadius: "20px",
            }}
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

        <p
          style={{
            fontSize: "1.2rem",
            margin: "10px 0",
          }}
        >
          SOFTWARE ENGINEER | IoT ENGINEER
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
          }}
        >
          Salem, Tamil Nadu | +91 9843680094
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
          }}
        >
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

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "1.25rem" }}>
            B.E. Computer Science and Engineering
          </h3>
          <p style={{ lineHeight: "1.6" }}>
            Kongu Engineering College, Perundurai | 2020 – 2024 | CGPA: 8.21
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "1.25rem" }}>
            AISSCE (Class XII) – Mathematics and Computer Science
          </h3>
          <p style={{ lineHeight: "1.6" }}>
            Bharathiyar Hi-Tech International Senior Secondary School CBSE,
            Attur | 2020 | 71%
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem" }}>
            AISSE (Class X)
          </h3>
          <p style={{ lineHeight: "1.6" }}>
            Bharathiyar Hi-Tech International School CBSE, Attur | 2018 | 68%
          </p>
        </div>
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

        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "1.3rem" }}>
            Web Developer | Optimus Technocrates (India) Pvt. Ltd.
          </h3>

          <p>
            <strong>Apr 2025 – Sep 2025</strong>
          </p>

          <p style={{ lineHeight: "1.7" }}>
            Developed responsive web applications for client-based projects.
            Implemented web application requirements using frontend and backend
            technologies. Collaborated with the development team on application
            development and project delivery. Supported application testing,
            troubleshooting, and implementation activities.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.3rem" }}>
            IoT Developer Intern | Magnertia TBI@KEC
          </h3>

          <p>
            <strong>Apr 2023 – Dec 2023</strong>
          </p>

          <p style={{ lineHeight: "1.7" }}>
            Integrated IoT hardware with AWS and ThingSpeak for real-time cloud
            monitoring. Worked on IoT solutions involving hardware, software,
            and cloud integration. Supported real-time data monitoring through
            cloud-connected IoT systems. Collaborated with the development team
            to improve IoT system connectivity and prototype development.
          </p>
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

        <p style={{ lineHeight: "1.8" }}>
          <strong>Programming Languages:</strong> Java, Python, C, Embedded C
        </p>

        <p style={{ lineHeight: "1.8" }}>
          <strong>Web Development:</strong> HTML, CSS, Bootstrap, JavaScript,
          React.js, PHP
        </p>

        <p style={{ lineHeight: "1.8" }}>
          <strong>Database:</strong> MySQL, Oracle
        </p>

        <p style={{ lineHeight: "1.8" }}>
          <strong>IoT and Cloud:</strong> AWS, ThingSpeak, IoT Hardware
          Integration, Cloud Integration
        </p>

        <p style={{ lineHeight: "1.8" }}>
          <strong>AI and Machine Learning:</strong> Machine Learning, MATLAB
        </p>

        <p style={{ lineHeight: "1.8" }}>
          <strong>Tools and Operating Systems:</strong> Linux, COOJA
        </p>
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

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "1.2rem" }}>
            Cotton Boll Detection Using Deep Learning
          </h3>

          <p style={{ lineHeight: "1.7" }}>
           IEEE Conference, 2023; indexed in IEEE Xplore in 2024. DOI: 10.1109/ICACRS58579.2023.10405080
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.2rem" }}>
            Exploring the Impact of COVID-19 on Thailand’s Tourism Industry:
            A Sentiment Analysis Approach Using Twitter Data
          </h3>

          <p style={{ lineHeight: "1.7" }}>
            2024 4th International Conference on Sustainable Expert Systems (ICSES), IEEE Xplore, 2024. DOI: 10.1109/ICSES63445.2024.10763265
          </p>
        </div>
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

        <p style={{ lineHeight: "1.8" }}>
          Joint Secretary, CSE Association | 2023 – 2024
        </p>

        <p style={{ lineHeight: "1.8" }}>
          Software Coordinator, TBI@KEC | 2022 – 2023
        </p>

        <p style={{ lineHeight: "1.8" }}>
          Presented papers on IoT and Cybersecurity at national-level
          symposiums.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          Volunteer, NSS | 2022 – 2023
        </p>
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

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "1.2rem" }}>
            Cotton Boll Recognition for Robotic Harvesting Using CNN U-Net
          </h3>

          <p style={{ lineHeight: "1.7" }}>
            Developed a deep learning model using CNN and U-Net to detect and
            classify cotton bolls for agricultural automation and robotic
            harvesting.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "1.2rem" }}>
            Thailand Tourism Sentiment Analysis
          </h3>

          <p style={{ lineHeight: "1.7" }}>
            Conducted sentiment analysis on Twitter data to evaluate public
            perception and tourism recovery trends following the COVID-19
            pandemic.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "1.2rem" }}>
            Sree Senthoor Tiles & Ceramics
          </h3>

          <p style={{ lineHeight: "1.7" }}>
            Designed and developed a PHP-based platform for product management
            and customer handling.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.2rem" }}>
            Single Portal for Land Survey
          </h3>

          <p style={{ lineHeight: "1.7" }}>
            Proposed a centralized digital solution for land record management
            as part of Ideathon 2022 at Kongu Engineering College.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default ResumeNew;
