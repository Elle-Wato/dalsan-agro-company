import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import MissionVision from '../components/MissionVision';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <HeroCarousel />
            <MissionVision />
            <Services />
            <Portfolio />
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

