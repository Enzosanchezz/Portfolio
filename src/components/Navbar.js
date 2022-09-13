import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logoTransparente.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineUser,
  AiOutlineDownload,
} from "react-icons/ai";

const CV = "/CV/CV ENZO GABRIEL SANCHEZ.pdf"
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineProject
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>       
                  <button  className={`btn`} style={{color: "white", marginBottom: "3px" , fontSize: "19.2px", padding: "12.8px 16px"}}>
                        <a  style={{ textDecoration: "none", color: "white",}} href={CV} target="_blank" rel="noopener noreferrer" download="CV ENZO GABRIEL SANCHEZ.pdf" > 
                      <AiOutlineDownload style={{ color: "white", marginBottom: "2px" }} />{" "}
                       CV
                        </a>
                  </button>  
            </Nav.Item>
            <Nav.Item>
            <img style={{ width: "20px", marginTop : "18px" }} src="https://counter9.stat.ovh/private/contadorvisitasgratis.php?c=yfcmut3918kkkpak1ctf3pkslc3jbmb6" border="0" title="contador de visitas" alt="contador de visitas"/>
            </Nav.Item> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
