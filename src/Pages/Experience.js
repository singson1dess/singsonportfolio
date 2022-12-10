import React from 'react'
import { Container } from 'react-bootstrap'
import "./CSS/Experience.css"
import Footer from "../Components/Footer"

export default function Experience() {
  return (
    <div>
    <section className='ExpSection'>
      <Container>
      <h2 className='h2Title'>Experience</h2>
      <p className='Ptext'>As for my future, I hope to one day my Dream come true.</p>
      <div className="timeline">
      <div className="containe left">
        <div className="content">
          <h6>Apr 2018 - March 2018  (1 Month)</h6>
          <h5>Planning Office</h5>
          <h6 className='company'>@ Municipal Lianga Surigao del Sur </h6>
          <p>As one of the intern @ lianga municipal I participate in every activity and explore new skills and knowledge, its great upportunity to work in our municipality</p>
        </div>
      </div>
      <div className="containe right">
        <div className="content">
          <h6>October 2018 - November 2018 (1 Month)</h6>
          <h5>Design Floor Plan </h5>
          <h6 className='company'>Anibongan National High School</h6>
          <p>its exciting to design a class roo building , Gym building and houses tough by our instructor @ anibongan national High school  </p>
        </div>
      </div>
      <div className="containe left">
        <div className="content">
          <h6>october 8, 2019 - October 10,2018 (2 Days)</h6>
          <h5>Technical Drafting (NCII)</h5>
          <h6 className='company'>@ Surigao City (SEC) </h6>
          <p>Apply NCII holder before graduate of senior at ANIBONGAN NATIONAL HIGH SCHOOL, TVL of TECHNICAL DRAFTING </p>
        </div>
      </div>
      <div className="containe right">
        <div className="content">
          <h6>June 15, 2021 -August 15, 2020 (1 Month)</h6>
          <h5>Associate Digital Marketing Intern</h5>
          <h6 className='company'>@  NeoDocto Inc.</h6>
          <p>Worked as a Digital Marketing and talk with other people from other country and have a experience as a project head in a short time beacuase I have only 1 month Duration and busy that time. its great upportunity to talk to co interns @ NeoDocto Inc. it help you to inhance your comunication skills.</p>
        </div>
      </div>
      </div>
      </Container>
    </section>

    <Footer />
    
    </div>
  )
}
