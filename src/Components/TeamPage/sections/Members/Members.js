import React,{Component} from "react";
import "./Members.css"
import { Container, Row } from 'react-bootstrap';
import MemberTile from '../MemberTile/MemberTile.js'
import teams from '../../../../Assets/data/website.json';

class Members extends Component{
    render(){
        const teamDetails = teams.teams;
        const teamMap = teamDetails.map((Data) => (
            <MemberTile key={Data.name} name1={Data.name} pImage={Data.profileImage} des={Data.title} ig={Data.instagram} lk={Data.linkedin} gt={Data.github}/>
        ));

        return(
            <div className="grid text-center">
                <Container>
                    <Row>
                        {teamMap}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Members;