import React from 'react'
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import homeImage from '../images/dashboard.jpg'
import Icon1 from '../images/homeChannelDoctor.jpg';
import Icon2 from '../images/homeAddPateint.jpg';
import Icon3 from '../images/homeAddStaff.jpg';
import { QuickLinksContainer, QuickLinksWrapper, QuickLinksCard, QuickLinksH2 } from './pages/homeQLinksElements'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './pages/homeServicesElements'
import { Nav } from 'react-bootstrap';

function Home() {
    return (
        <div className='home'>
            <h1>WELCOME TO MEDTOR</h1>
            <img class='homeImage' src={homeImage} alt="home image" />
            <div className='homeContent'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                <div className='homeServices'>
                    <ServicesContainer id='services'>
                        <ServicesH1>QUICK LINKS</ServicesH1>
                        <ServicesWrapper>
                            <ServicesCard>
                                <ServicesH2>Channel a Doctor</ServicesH2>
                                <ServicesIcon src={Icon1} />
                                <h4><NavLink to='#'>View</NavLink></h4>
                            </ServicesCard>

                            <ServicesCard>
                                <ServicesH2>Admit Patient</ServicesH2>
                                <ServicesIcon src={Icon2} />
                                <h4><NavLink to='/'>View</NavLink></h4>
                            </ServicesCard>

                            <ServicesCard>
                                <ServicesH2>Add a New Employee</ServicesH2>
                                <ServicesIcon src={Icon3} />
                                <h4><NavLink to='/addStaff'>View</NavLink></h4>
                            </ServicesCard>
                        </ServicesWrapper>
                    </ServicesContainer>
                </div>
            </div>
        </div >
    );
}

export default Home;