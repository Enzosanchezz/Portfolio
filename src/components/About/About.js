import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
// import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <h1 className="project-heading">
          Tools I <strong className="teal">Know </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="teal">I</strong> Can Use
        </h1>
        <Toolstack /> */}
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
