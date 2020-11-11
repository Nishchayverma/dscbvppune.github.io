import React from "react";
import { Form } from "react-bootstrap";
import "./Footer.css"
import {Row,Col,Container} from "react-bootstrap";

class FooterSection extends React.Component{
    render(){
        return(
            <div className="footer">
                <Row>
                    <Col md={12} sm={12} xs={12} className="footer-text">
                        Made with <span style={{color:"#db332e", fontSize:"20px"}}>&hearts;</span> by Developer Student Clubs Bharati Vidyapeeth Deemed University College of Engineering Pune.
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FooterSection;