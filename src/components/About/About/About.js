import React from 'react';
import TeamMembers from '../../Home/TeamMembers/TeamMembers';
import AboutUs from '../AboutUs/AboutUs';

const About = () => {
    return (
        <div>
            <h2 className='pt-5'>About Us</h2>
            <div className='underline mb-5 mx-auto'></div>
            <AboutUs></AboutUs>
            <TeamMembers></TeamMembers>
        </div>
    );
};

export default About;