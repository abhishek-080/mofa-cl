/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>

            <div name="Home">
                <nav className=" bg-blue-800 w-full z-40 h-[60px] ">
                    <div className="container mx-auto flex flex-wrap ">
                        <div className="w-full relative flex justify-between lg:w-auto lg:justify-start">
                            <button
                                className=" text-white pointer text-xl  px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden md:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <FaBars />
                            </button>
                        </div>
                        <div
                            className={
                                "lg:flex flex-grow md:flex ml-[-1.4em] rounded  " +
                                (navbarOpen ? " flex p-10 bg-blue-700" : " hidden ")
                            }
                        >
                            <ul className="flex flex-col justify-start lg:flex-row  lg:ml-auto md:flex-row md:ml-auto  ">


                            <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Home</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">About Us</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Gallery</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Archieve</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Local Levels</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Gis Maps</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Publication</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Existing Locals</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Model Laws</span>
                                        </a>
                                    </li>
                                </div>

                                <div>
                                    <li

                                        className="nav-item pointer pr-2 md:mt-[-40px] lg:mt-[10px]"
                                    >
                                        <a className="px-3 py-2 flex  text-base uppercase cursor-pointer text-white hover:opacity-60 ">
                                            <span className="ml-2 ">Contact</span>
                                        </a>
                                    </li>
                                </div>




                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar