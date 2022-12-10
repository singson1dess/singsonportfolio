import React from 'react'
import AboutIntro from "../Images/119356-development.gif"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Skills.css"
import WebDesign from "../Images/Skills/web-design.png"
import FrontEnd from "../Images/Skills/improvement.png"
import UiUx from "../Images/Skills/ui.png"
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';




export default function Skills() {

  function OpenCV(){
    window.open(
      "https://drive.google.com/file/d/1HLA39b9tPsW72-HBDIRdPwHntWz-eXmm/view?usp=sharing", "_blank");
    }

  return (
    <div>

    {/*Skills  */}
    <section className="SkillsSection">
    <Container>
      <Row className="text-center">
        <h2>My Skills</h2>
        <p>none <Link to="/Projects" style={{textDecoration:"none", color:"#084AF3"}}></Link></p>

        <Col sm="4" className="SkillBox">
          <img src={WebDesign} alt="Web Design"/>
          <h4>CSS</h4>
          <p>none</p>
        </Col>

        <Col sm="4" className="SkillBox">
          <img src={FrontEnd} alt="Front End"/>
          <h4>TECHNICAL DRAFTING</h4>
          <p>none </p>
        </Col>

        <Col sm="4" className="SkillBox">
          <img src={UiUx} alt="Ui UX"/>
          <h4>HML</h4>
          <p>none</p>
        </Col>

      </Row>
    </Container>
    </section>


      {/* Skills bars Section */}
      <section className="Skillssection">
      <Container>
                <Row>
                  <Col sm={6} className="Skillbars">
                    <h4>My Skill </h4>
                    <ProgressBar now={80} label="HTML" />
                    <ProgressBar now={70} label="CSS" />
                    <ProgressBar now={50} label="Computer Science" />
                    <ProgressBar now={30} label="Design ( Learning...)" animated />
                    <button className="primary"
                    onClick={OpenCV}>
                    Download CV
                  </button>
                  </Col>
                  <Col sm={6} className="SkillIntro">
                    <img src={AboutIntro} alt="About Skills" className="EDLogo"/>
                  </Col>
                </Row>
              </Container>
      
              
      </section>


      <Footer />
    </div>
  )
}
