import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Nagul from "../../Assets/About.JPG";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>

            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={Nagul}
              alt="about"
              className="img-fluid"
              style={{ height: "60%", width: "80%" }}
            />
          </Col>
        </Row>

        {/* Professional Experience */}
        <h1
          className="project-heading"
          style={{ marginTop: "-80px", paddingBottom: "30px" }}
        >
          Professional <strong className="purple">Experience</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          <Col md={10}>
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "1.3rem" }}>
                Web Developer | Optimus Technocrates (India) Pvt. Ltd.
              </h3>

              <p>
                <strong>Apr 2025 – Sep 2025</strong>
              </p>

              <p style={{ lineHeight: "1.7" }}>
                Developed responsive web applications for client-based
                projects.
                <br />
                Implemented web application requirements using frontend and
                backend technologies.
                <br />
                Collaborated with the development team on application
                development and project delivery.
                <br />
                Supported application testing, troubleshooting, and
                implementation activities.
              </p>
            </div>

            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "1.3rem" }}>
                IoT Developer Intern | Magnertia TBI@KEC
              </h3>

              <p>
                <strong>Apr 2023 – Dec 2023</strong>
              </p>

              <p style={{ lineHeight: "1.7" }}>
                Integrated IoT hardware with AWS and ThingSpeak for real-time
                cloud monitoring.
                <br />
                Worked on IoT solutions involving hardware, software, and cloud
                integration.
                <br />
                Supported real-time data monitoring through cloud-connected IoT
                systems.
                <br />
                Collaborated with the development team to improve IoT system
                connectivity and prototype development.
              </p>
            </div>
          </Col>
        </Row>

        {/* Professional Skillset */}
        <h1
          className="project-heading"
          style={{ marginTop: "0px" }}
        >
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        {/* Tools */}
        <h1
          className="project-heading"
          style={{ marginTop: "0px" }}
        >
          <strong className="purple">Tools</strong> I use
        </h1>

        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
