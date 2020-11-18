import React, { Component } from "react";
import "./MemberTile.css";
import { Image,  Col,  Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class MemberTile extends Component {
    render() {
        return (
            <Col md={6} lg={4} xs={12} xl={4} sm={12} className="mb-5 card-col">
                <Card className="pt-2 member-card">
                    <div className="pImage-padding">
                        <Image src={this.props.pImage} roundedCircle className="profileImage" />
                    </div>
                    <Card.Body>
                        <Card.Title className="member-name">{this.props.name1}</Card.Title>
                        <Card.Text className="member-domain">
                            {this.props.des}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <div className="social-teams social">
                            {/* <a href="#"><i class="fab fa-twitter"></i></a> */}
                            <a href={this.props.ig} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href={this.props.lk} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href={this.props.gt} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>

        )
    }
}

export default MemberTile