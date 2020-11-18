import React from 'react';
import eventImage from '../../../../Assets/Images/events-model.webp';
import '../../HomeLeftSection.css';
import '../../main.css'; 
import {  Link } from 'react-router-dom' 
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function EventSection() {

  const styleSpan = {
    fontWeight: "700",
    letterSpacing: "1.5px"
  };


  return (

    <section className="events-section">
      <Container className="text-center re-order">
        <Row>
          <Col lg={6} md={12} sm={12} className="first">
            <h1 className="desktop-header section-heading" style={{ color: "#4183F3" }}>Events</h1>
            <p className="team-para"><span style={styleSpan}>"Technology is  best when it brings people together".</span><br></br>
                            We organize numerous events to incite the culture of technology among the students. Our events provide an opportunity for the university students who are ardent about developing their skillsets to grow and rise in their fields. Whether it is a new kid on the block or an advanced developer, our events are an optimal room for sharing, learning and developing.
                          </p>
            {/* <Link to="/event">
              <div className="align-btn">
                <Button className="events-button">See our events</Button>
              </div>
            </Link> */}

          </Col>
          <Col lg={6} md={12} sm={12} className="Second">
            <h1 className="section-heading mobile-tab-header" style={{ color: "#4183F3" }}>Events</h1>
            <Image className="img-fluid event-image" src={eventImage} data-alos="fade-left"></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );

}


export default EventSection