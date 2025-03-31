import React from 'react';
import { Link } from 'react-router-dom';
import imgSeeds from '../images/seeds.png';
import imgFertilizers from '../images/fertilizers.png';
import imgPesticides from '../images/pesticides.png';
import imgMachinery from '../images/machinery.png';

const Portfolio = () => {
    return (
        <div className="my-4 py-4" id='portfolio'>
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
            <div className='flex justify-center'>
                <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
            </div>

            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">    
                    {/* SEEDS */}                        
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                            <img alt="Seeds" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={imgSeeds} />
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center">SEEDS</h4>
                            <p className="text-lg font-medium">
                                High-yielding, disease-resistant, and drought-tolerant seeds for cereals, vegetables, and other crops.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link to="/get-demo" className="text-white bg-green-700 hover:bg-green-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Get Started
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* FERTILIZERS */}
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                            <img alt="Fertilizers" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={imgFertilizers} />
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center">FERTILIZERS</h4>
                            <p className="text-lg font-medium">
                                Conventional and organic fertilizers tailored to different soil types and crop requirements.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link to="/get-demo" className="text-white bg-green-700 hover:bg-green-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* PESTICIDES */}
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                            <img alt="Pesticides " className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={imgPesticides} />
                            <h4 className="font-semibold my -4 text-lg md:text-2xl text-center">PESTICIDES & CROP PROTECTION</h4>
                            <p className="text-lg font-medium">
                                A wide range of herbicides, fungicides, and insecticides to protect crops from pests and diseases.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link to="/get-demo" className="text-white bg-green-700 hover:bg-green-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* MACHINERY */}
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                            <img alt="Farm Machinery" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={imgMachinery} />
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center">FARM MACHINERY & EQUIPMENT</h4>
                            <p className="text-lg font-medium">
                                Tractors, harvesters, planters, sprayers, and other machinery from leading global brands.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link to="/get-demo" className="text-white bg-green-700 hover:bg-green-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;