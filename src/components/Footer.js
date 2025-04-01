import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">Dalsan Agro Solutions</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>Dalsan Agro Solutions</h5>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Bakaro Market, Mogadishu, Somalia.</p>
                                <p><FontAwesomeIcon icon={faPhone} /> +252 61 234 5678</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> info@dalsanagrosolutions.com</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Agronomic Services</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Financial Services</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Seeds</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Training and Workshops</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                        <div className="text-md font-medium mb-6">
                            Follow us on social media.
                        </div>
                        <div className="mx-auto text-center mt-2">
                            <ul className="flex justify-center mb-4 md:mb-0">
                                <li>
                                    <a href="https://x.com/dalsanagrosol?s=11" target="_blank" rel="noreferrer" className="flex justify-center items -center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns ="http://www.w3.org/2000/svg">
                                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="https://www.tiktok.com/@dalsan.agro.solut?_t=ZM-8vAvB2JB3Dj&_r=1" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1" aria-label="TikTok">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10V6h-2v2h-2V4h2V2h-4v10a4 4 0 1 1-4-4v2a2 2 0 1 0 2 2V2h-2z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{"  "}
                                <HashLink
                                    to="#"
                                    className=" hover:text-gray-900"
                                >
                                    Dalsan Agro Solutions
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;