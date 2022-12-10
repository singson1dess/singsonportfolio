import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CSS/Home.css"
import Sagar from "../Images/HeroImage.png"
import Linkedin from "../Images/Social Media/linkedin.png"
import Facebook from "../Images/Social Media/facebook.png"
import instagram from "../Images/Social Media/instagram.png"
import Footer from "../Components/Footer";
import Contact from "./Contact";




const Home = () => {
    function OpenCV(){
      window.open(
        "https://drive.google.com/file/d/1HLA39b9tPsW72-HBDIRdPwHntWz-eXmm/view?usp=sharing", "_blank");
      }

    return <div>
            {/*Hero Section */}
            <Container>
              <Row className="Hero">
                <Col sm={12} md={6}>
                  <img className="ProfileImage" src={Sagar} alt="sagar chatur profile"/>
                </Col>
                <Col sm={12} md={6} className="HeroContent">
                  <h6>Hello! <span style={{color:"#084AF3"}}>Dessa Mae Singson</span></h6>
                  <h2 className="Animatedh2">
                      <span className="Animated_Title"> </span>
                  </h2>
                  <p>Helping companies to create websites and maintain a better code base for reusability. capable of continuous learning from senior developers. Passionate and hardworking with a penchant for meeting deadlines. Interested in a role with the company promoting best practices and offering diverse customer projects.</p>
                  <p>Front End Developer and Web Designer with proven experience at ViniPay Fintech Pvt Ltd and Corehitech Solutions Pvt Ltd. Helping companies to create and maintain a better code base for reusability.</p>
                    <div className="btngrp"> 
                    <Link to="/About">
                    <button className="primary" 
                    style={{marginRight:"10px"}}
                    >About Me
                    </button>
                  </Link>
                  <button className="secondary"
                    onClick={OpenCV}>
                    Download CV
                  </button>
                    </div>
                </Col>
              </Row>
            </Container>

            {/*Counter Section */}
            <section>
              <Container>
              <div className="counter pb-2">
              <div className="container">
                  <div className="row">
                      <Col lg={3} md={3} sm={3} xs={6}>
                        <div className="design">
                            <p className="counter-count">2+</p>
                            <p className="design-p">Months of Experience</p>
                        </div>
                      </Col>

                  </div>
              </div>
          </div>
              </Container>
            </section>
            
            
            {/*About Section */}
            <section className="About">
            <Container>
            <Row>
              <Col sm={10} xs={12} md={8} lg={9} xl={10} className="AboutContent">
              
                <h2>Nice to meet you!! </h2>
                <p>I am <Link to="/About" style={{textDecoration:"none", color:"#084AF3"}}>Dessa Mae Singson</Link>, a Coputer Science student @ NEMSU - Lianga campus <Link to="/Experience" style={{textDecoration:"none", color:"#084AF3"}}>experience</Link> as  a Student I have Only few experience Due to my Situtaion is always Busy</p>
                <p>have experience as an intern @ <a href="https://www.linkedin.com/company/neodocto/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BaI%2F2M839Tay2boN3KH7Bbw%3D%3D" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"#084AF3"}}> NeoDocto Inc.</a> and <a href="https://www.google.com/search?q=surigao+city&rlz=1C1CHWL_enPH968PH968&sxsrf=ALiCzsYInWjo0ucOjadZw5i5PRkmHereYg:1670251960510&tbm=isch&source=iu&ictx=1&vet=1&fir=Ew3u-ekurPS5LM%252CvycT67CP5WP4IM%252C%252Fm%252F06p1qz&usg=AI4_-kTE-XuarEUZOXU8BItVIdNTt_w0tg&sa=X&ved=2ahUKEwj6jKq23eL7AhX1plYBHcNPDBsQ_B16BAhsEAE#imgrc=Ew3u-ekurPS5LM" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"#084AF3"}}>TECHNICAL DRAFTING NCII</a> THANK YOU!! </p>
                <p>Student now @ NORTH EASTERN MINDANAO UNIVERSITY</p>
                <p>I'm DESSA MAE SINGSON was born in Talaibon Ibaan Batangas.</p>
                <div className="d-flex pt-1">
                  <div className="SocialIcon">
                    <a href="https://www.linkedin.com/in/sagar-chatur/" target="_blank" rel="noreferrer">
                      <img src={Linkedin} alt="Linkedin" />
                    </a>
                  </div>
                  <div className="SocialIcon">
                    <a href="https://www.facebook.com/sagar.chatur.33/" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="Facebook" />
                    </a>
                  </div>
                  <div className="SocialIcon">
                    <a href="https://www.instagram.com/sagarchatur.dev" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                </div>
              
              </Col>
              <Col sm={2} md={4} lg={3} xl={2}>
              </Col>
              
            </Row>
            </Container>
            </section>


            {/*Contact Section */}
            <Contact />
            
            <Footer />
            
          </div>
  };
  
  export default Home;