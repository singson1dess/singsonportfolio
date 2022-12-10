import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Linkedin from "../Images/Social Media/linkedin.png"
import Facebook from "../Images/Social Media/facebook.png"
import instagram from "../Images/Social Media/instagram.png"
import logo from"../Images/dessa.png";






export default function Footer() {
  return (
    <div>
        {/* Footer */}
        <section className="Footer">
        <footer>
          <Container>
            <Row>
              <Col sm={4}>
                <div className="iconcont">
                  <div className="SocialIco">
                    <a href="https://www.linkedin.com/in/sagar-chatur/" target="_blank" rel="noreferrer">
                      <img src={Linkedin} alt="Linkedin" />
                    </a>
                  </div>
                  <div className="SocialIco">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="Facebook" />
                    </a>
                  </div>
                  <div className="SocialIco">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                </div>
              </Col>

              <Col sm={4} className="text-center">
              <Link to="/"><img src={logo} className="FooterLogo" alt="Logo" /></Link>
              </Col>

              <Col sm={4} className="FooterLinks copytxt">
              <p>2022-2023 - Singson Dessa Mae S.</p>
              </Col>
              
            </Row>
          </Container>
        </footer>
      </section>
    </div>
  )
}
