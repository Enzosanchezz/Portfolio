import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings. I am <span className="teal">Enzo Sanchez </span>
            from <span className="teal"> Santiago del Estero, Argentina.</span>
            <br />I am a ...
            <br />I'm ... 
            <br /> I've ...
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 
            </li>
            <li className="about-activity">
              <ImPointRight /> 
            </li>
            <li className="about-activity">
              <ImPointRight />
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
