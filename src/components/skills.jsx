import React from 'react'
import { motion } from 'motion/react'

const Skills = () => {
    return (<>
        <motion.div id='skills' initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='w-full h-fit p-5 my-5 flex justify-center capitalize text-5xl text-white'><span className='bg-gradient-to-r p-5 font-bold from-blue-500 to-pink-500 text-transparent bg-clip-text'>Skills</span></motion.div>
        <div className='grid grid-cols-1 text-white text-center md:grid-cols-2 w-full h-fit capitalize font-bold text-xl p-5 gap-10'>
            <motion.span className='p-5 bg-gradient-to-r from bg-blue-700 to-white rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
            <motion.span className='p-5 bg-gradient-to-r from bg-white to-blue-700 rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
            <motion.span className='p-5 bg-gradient-to-r from bg-blue-700 to-white rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
            <motion.span className='p-5 bg-gradient-to-r from bg-white to-blue-700 rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
            <motion.span className='p-5 bg-gradient-to-r from bg-blue-700 to-white rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
            <motion.span className='p-5 bg-gradient-to-r from bg-white to-blue-700 rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
            <motion.span className='p-5 bg-gradient-to-r from bg-blue-700 to-white rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
            <motion.span className='p-5 bg-gradient-to-r from bg-white to-blue-700 rounded-4xl text-black' animate={{ x: [-100, 100, 0] }}>Filler</motion.span>
        </div>
    </>)
}

export default Skills