import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg1 from '../images/agri1.png';
import heroImg2 from '../images/agri2.png';
import heroImg3 from '../images/agri3.png';

const slides = [
    {
        image: heroImg1,
        title: 'CULTIVATING GROWTH, HARVESTING SUCCESS',
        description: 'At Dalsan Agro Solutions, we believe that agriculture is the backbone of Somalia\'s economy. We invite farmers, agribusinesses, and partners to join us in transforming the agricultural sector.',
    },
    {
        image: heroImg2,
        title: 'INNOVATION IN AGRICULTURE',
        description: 'We leverage modern technology to enhance agricultural productivity and sustainability, ensuring a brighter future for rural communities.',
    },
    {
        image: heroImg3,
        title: 'SUSTAINABLE FARMING SOLUTIONS',
        description: 'Our goal is to empower farmers with innovative solutions that increase yield and reduce environmental impact.',
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero w-full h-[80vh] relative" id='hero'>
            <NavBar />
            <div className="relative w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex flex-col justify-end items-center text-center bg-black bg-opacity-30 transition-opacity duration-1000 w-full h-full pb-20 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{slide.title}</h1>
                            <p className="text-lg font-semibold tracking-tight text-gray-200 mb-3">{slide.description}</p>
                        </div>
                    </div>
                ))}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-green-700' : 'bg-gray-300'}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
