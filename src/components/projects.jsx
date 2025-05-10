import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'motion/react';
import '../App.css'

const Projects = () => {
    return (<>
        <div className='w-full flex justify-center font-bold text-5xl my-10 p-5 h-fit bg-gray-900 text-white'>
            <motion.span className='bg-gradient-to-r p-5 from-blue-500 to-pink-500 text-transparent bg-clip-text' initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }}>Projects</motion.span>
        </div>
        <div id='projects' className='w-full gap-10 mt-5 grid grid-cols-1 xl:grid-cols-2 p-10 h-fit bg-gray-900 text-center text-white'>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 to-green-500 rounded-4xl grid grid-cols-1 gap-5'>
                <span className='text-xl font-bold'>Filler</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim!</span>
                <span><a target='_blank' ><GitHubIcon fontSize="large" /></a></span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 to-green-500 rounded-4xl grid grid-cols-1 gap-5'>
                <span className='text-xl font-bold'>Filler</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim!</span>
                <span><a target='_blank' ><GitHubIcon fontSize="large" /></a></span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 to-green-500 rounded-4xl grid grid-cols-1 gap-5'>
                <span className='text-xl font-bold'>Filler</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim!</span>
                <span><a target='_blank' ><GitHubIcon fontSize="large" /></a></span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 to-green-500 rounded-4xl grid grid-cols-1 gap-5'>
                <span className='text-xl font-bold'>Filler</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim!</span>
                <span><a target='_blank' ><GitHubIcon fontSize="large" /></a></span>
            </motion.p>
        </div>
    </>)
}

export default Projects