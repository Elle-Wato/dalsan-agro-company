import React from 'react';
import imgWeb from '../images/agronomic.png'; 
import imgApp from '../images/financial.png';
import imgDataAnalysis from '../images/data-analysis.png';
import imgAgriTech from '../images/agri.png';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-green-800 uppercase font-bold">Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-green-800'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-800">We offer a comprehensive range of services designed to meet the diverse needs of farmers & agribusinesses.</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-green-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Agronomic Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={imgWeb} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Agronomic Services</h2>
                                <p className="text-lg font-medium">
                                    We specialize in soil testing, crop consulting, and farm management advice to optimize production, as well as customized recommendations for soil health, fertilization, and pest management.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-green-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Financial Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={imgApp} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Financial Services</h2>
                                <p className="text-lg font-medium">
                                    We provide tailored financing options for farmers to purchase agricultural inputs and machinery on flexible payment terms.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-green-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Data Analysis" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={imgDataAnalysis} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Training and Workshops</h2>
                                <p className="text-lg font-medium">
                                    We provide regular training sessions on modern agricultural practices, sustainable farming methods, and new technology adoption.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
