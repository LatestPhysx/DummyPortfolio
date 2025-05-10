import React from 'react'
import '../App.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "motion/react"
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [showSideMenu, setShowSideMenu] = useState(false);
    let sideMenuStyle;
    let sideDiv;
    if (showSideMenu) {
        sideMenuStyle = 'lg:hidden flex bg-gray-900 flex-col gap-5 text-center text-2xl font-bold justify-center duration-700 ease-in bg-grey-50 transition-all fixed top-0 right-0 w-1/2 h-full bg-black text-white capitalize p-5'
        sideDiv = 'lg:hidden flex bg-gray-100 flex-col gap-5 text-center text-2xl font-bold justify-center duration-700 ease-in bg-grey-50 transition-all fixed top-0 left-0 w-1/2 h-full bg-black text-white capitalize p-5 opacity-50'
        document.body.style.overflow = 'hidden';
    }
    else {
        sideMenuStyle = 'lg:hidden bg-gray-900 opacity-100 flex flex-col duration-700 ease-in transition-all gap-5 text-center text-2xl font-bold justify-center fixed top-0 -right-full w-1/2 h-full bg-black text-white capitalize overscroll-auto overscroll-none'
        sideDiv = 'lg:hidden bg-gray-900 opacity-100 flex flex-col duration-700 ease-in transition-all gap-5 text-center text-2xl font-bold justify-center fixed top-0 -left-full w-1/2 h-full bg-black text-white capitalize overscroll-auto overscroll-none'
        document.body.style.overflow = 'auto';
    }

    return (<>
        <motion.nav initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='z-50 relative'>
            <div className='hidden lg:flex w-full bg-gray-900 text-xl gap-5 text-white font-bold px-5 py-10 whitespace-nowrap'>
                <span className='text-2xl bg-grey-50 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Dummy Text</span>
                <div className='absolute right-0 flex gap-5 me-5'>
                    <BrowserRouter>
                        <HashLink to='#education'>
                            <span className='self-center group hover:cursor-pointer transition duration-700'>Education<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                        </HashLink>
                        <HashLink to='#certificats'>
                            <span className='self-center group hover:cursor-pointer transition duration-700'>Certificats<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                        </HashLink>
                        <HashLink to='#skills'>
                            <span className='self-center group hover:cursor-pointer transition duration-700'>Skills<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                        </HashLink>
                        <HashLink to='#projects'>
                            <span className='self-center group hover:cursor-pointer transition duration-700'>Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                        </HashLink>
                        <HashLink to='#contact'>
                            <span className='self-center group hover:cursor-pointer transition duration-700'><EmailIcon fontSize="large" /><span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                        </HashLink>
                        <a target="_blank"><span className='self-center group hover:cursor-pointer transition duration-700'><LinkedInIcon fontSize="large" /><span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span></a>
                    </BrowserRouter>
                </div>
            </div>
            <div className='lg:hidden w-full bg-gray-900 p-5 text-white font-bold flex justify-between'>
                <span className='capitalize self-center text-2xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Dummy Text</span>
                <button onClick={() => { setShowSideMenu((prevState) => !prevState) }} className='cursor-pointer p-3 border-s-white border-2 duration-700 rounded-2xl hover:bg-gray-500'><MenuIcon /></button>
            </div>
            <div className={sideMenuStyle}>
                <BrowserRouter>
                    <button onClick={() => { setShowSideMenu((prevState) => !prevState) }} className='capitalize m-1.5 text-white rounded-2xl absolute top-0 right-0 p-3 duration-700 cursor-pointer'><CloseIcon fontSize="large" /></button>
                    <HashLink to='#education'>
                        <span className='self-center group hover:cursor-pointer transition duration-700'>Education<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                    </HashLink>
                    <HashLink to='#certificats'>
                        <span className='self-center group hover:cursor-pointer transition duration-700'>Certificats<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                    </HashLink>
                    <HashLink to='#skills'>
                        <span className='self-center group hover:cursor-pointer transition duration-700'>Skills<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                    </HashLink>
                    <HashLink to='#projects'>
                        <span className='self-center group hover:cursor-pointer transition duration-700'>Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                    </HashLink>
                    <HashLink to='#contact'>
                        <span className='self-center group hover:cursor-pointer transition duration-700'><EmailIcon fontSize="large" /><span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span>
                    </HashLink>
                    <a target="_blank"><span className='self-center group hover:cursor-pointer transition duration-700'><LinkedInIcon fontSize="large" /><span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span></span></a>
                </BrowserRouter>
            </div>
            <div className={sideDiv}></div>
        </motion.nav>
    </>)
}

export default Navbar