import React from 'react';
import './HeaderSection.css';
import logo from '../../../../Assets/Images/dsc-logo.png';
import { Navbar } from "react-bootstrap";

function HeaderSection() {
    return (
        <div>
            <Navbar fixed="top" className="nav-bar">
                <div className="header">
                    <div className="container padding-removed">
                        <div className="row padding-removed">
                            <div className="col-2">
                                <img src={logo} className="logo img-fluid" alt="DSC Logo" />
                            </div>
                            <div className="col-10 padding-removed ">
                                <div className="row padding-removed">
                                    <div className="row">
                                        <div className="col-12 header-text header-txt-bold margin-adjust">
                                            Developer Student Clubs
                             </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 header-text header-chapter-name margin-adjust">
                                            Bharati Vidyapeeth Deemed University College of Engineering Pune
                             </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Navbar>

        </div>

    );
}

export default HeaderSection