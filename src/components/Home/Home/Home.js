import React from 'react';
import Banner from '../Banner/Banner';
import Career from '../Career/Career';
import FAQs from '../FAQs/FAQs';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <Career></Career>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;