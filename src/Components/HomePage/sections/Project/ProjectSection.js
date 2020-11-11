import React from 'react';
import projectImage from '../../../../Assets/Images/projects-model.webp';
import '../../HomeRightSection.css';
import '../../HomeLeftSection.css';
import '../../main.css'; 

import { Container, Row, Col, Image } from 'react-bootstrap';

function TeamSection() {
  return (
    <section className="project-section">

      <Container className="text-center re-order">
        <Row>

          <Col lg={6} md={12} sm={12} className="second">
            <h1 className="mobile-tab-header project-header section-heading">Our <span style={{ color: "#E94335" }}>projects</span></h1>
            <Image className="img-fluid project-image" src={projectImage}></Image>
          </Col>
          <Col lg={6} md={12} sm={12} className="first">
            <h1 className="desktop-header project-header section-heading">Our <span style={{ color: "#E94335" }}>projects</span></h1>
            <p className="project-para">DSC BVP Pune has always strived to create and establish projects that have a long-lasting impact, and try to solve 
            problems that we often come across as students or professionals. Since the club's inception in 2019, we have worked on 
            numerous projects, be it Web Development or App Development to develop solutions to real life problems. 
            </p>
            {/* <div className="align-btn">
              <Button className="project-button">See our projects</Button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>

  )
}


export default TeamSection