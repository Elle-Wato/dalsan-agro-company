import React from 'react';
import img from '../images/agriculture.png'; // Update the image to reflect agriculture technology
import { Link } from 'react-router-dom';

const MissionVision = () => {
    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 h-screen" id='about'>
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                    <img alt="Agriculture Technology" className="rounded-t float-right w-[500%] h-[90vh] object-cover opacity-80" src={img} />
                </div>
                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                    <h3 className="text-3xl text-green-700 font-bold">Our Mission</h3>
                    <p className='my-3 text-xl text-gray-600 font-semibold'>
                        At <strong>Dalsan Agro Solutions</strong>, our mission is to procure and deliver high-quality agricultural inputs at competitive prices, provide safe working conditions and deliver quality services within a reasonable timeframe.
                        We aim to empower farmers with the tools, knowledge and resources they need to achieve their fullest potential and contribute to a thriving agricultural sector.
                    </p>
                    
                    <h3 className="text-3xl text-green-700 font-bold mt-6">Our Vision</h3>
                    <p className='my-3 text-xl text-gray-600 font-semibold'>
                        Our vision is to become the <strong>market leader and a reputed global brand</strong> in agricultural solutions, recognized for our exceptional service delivery, customer satisfaction and contribution to sustainable farming practices.
                    </p>
                    
                    <Link to="/contact" className="text-white bg-green-700 hover:bg-green-600 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                        Contact us
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MissionVision;