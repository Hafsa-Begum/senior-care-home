import React from 'react';
import Banner from '../Banner/Banner';
import FAQs from '../FAQs/FAQs';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;