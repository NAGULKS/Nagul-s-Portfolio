import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiGithub,
  SiDocker,
  SiArduino,
  SiPycharm,
  SiEclipseide,
  SiPostman,
  SiMysql,
  SiAmazonwebservices,
  SiThingspeak,
  SiMathworks,
  SiLinux,
} from "react-icons/si";

import { FaPython } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonwebservices />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiThingspeak />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMathworks />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>

    </Row>
  );
}

export default Toolstack;
