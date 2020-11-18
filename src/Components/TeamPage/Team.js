import React from 'react';
import Header from '../HomePage/sections/Header/HeaderSection';
import Footer from '../HomePage/sections/Footer/FooterSection';
import OurTeam from './sections/OurTeam/OurTeam.js';
import Members from './sections/Members/Members.js';
import '../HomePage/sections/Header/HeaderSection.css'
import "../TeamPage/sections/MemberTile/MemberTile.css";

function Team() {
    return (
        <div>
            <Header/>
            <OurTeam/>
            <Members/>
            <Footer />
        </div>
    )
}

export default Team