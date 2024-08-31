import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tiles from "../../Assets/Projects/Tiles.png";
import Cotton from "../../Assets/Projects/Cotton.png";
import Sun from "../../Assets/Projects/Sun.png";
import Nagul from "../../Assets/Projects/Nagul.png";
import Audi from "../../Assets/Projects/Audi.png";
import Sentiment from "../../Assets/Projects/Sentiment.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nagul}
              isBlog={false}
              title="Nagul's Music"
              description="Created a responsive music website using HTML, CSS, Bootstrap, and JavaScript, with features like playlist management and user-friendly navigation."
              ghLink="https://github.com/NAGULKS/Nagul-s-Music.git"
              demoLink="https://nagulks.github.io/Nagul-s-Music/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Audi}
              isBlog={false}
              title="Audi Clone"
              description="Developed an Audio lone website using HTML, CSS, and Bootstrap, focusing on responsive design and seamless user experience without JavaScript."
              ghLink="https://github.com/NAGULKS/Audiclone.git"
              demoLink="https://nagulks.github.io/Audiclone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sun}
              isBlog={false}
              title="Sun Traders"
              description="Built a Suntraders website using PHP, delivering a robust and dynamic platform with efficient backend functionality and a responsive design."
              ghLink="https://github.com/NAGULKS/Suntraders_Project.git"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tiles}
              isBlog={false}
              title="Sree Senthoor Tileas and Ceramics"
              description="Developed the Sree Senthoor Tiles and Ceramics website using PHP, providing a dynamic and user-friendly platform with efficient backend operations."
              ghLink="https://github.com/NAGULKS/Sree_Senthoor_Tiles_and_Ceramics.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cotton}
              isBlog={false}
              title="Cotton Boll Detection using DL"
              description="Developed and published a project in a Scopus-indexed journal, focusing on accurately detecting cotton bolls using advanced deep learning techniques, enhancing agricultural efficiency and productivity."
              ghLink="https://github.com/NAGULKS/Cottonboll_Researchproject.git"
              demoLink="https://ieeexplore.ieee.org/abstract/document/10405080/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sentiment}
              isBlog={false}
              title="Sentiment Analysis using Twitter Data"
              description="Developed a machine learning model to analyze sentiment from Twitter data related to Thailand tourism, providing valuable insights for enhancing tourist experiences and strategies."
              ghLink="https://github.com/NAGULKS/Sentiment_Analysis.git"
              demoLink=""     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
