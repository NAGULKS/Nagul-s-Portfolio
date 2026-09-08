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
  SiAmazonaws,
  SiMathworks,
  SiLinux,
} from "react-icons/si";

import { FaPython, FaMicrochip } from "react-icons/fa";

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
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip />
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
