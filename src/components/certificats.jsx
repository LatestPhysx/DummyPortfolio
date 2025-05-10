import React from 'react'
import '../App.css'
import { motion } from 'motion/react'

const Certificats = () => {
    return (<>
        <motion.div id='certificats' initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='w-full h-fit p-5 my-5 flex justify-center capitalize text-5xl text-white'><span className='bg-gradient-to-r p-5 font-bold from-blue-500 to-pink-500 text-transparent bg-clip-text'>Certificats</span></motion.div>
        <div className='w-full text-white text-center gap-20 h-fit p-5 grid grid-cols-1 md:grid-cols-2'>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 via-blue-700 to-black rounded-4xl grid grid-cols-1 gap-5'>
                <span className='font-bold text-xl'>Filler Text</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat, voluptates vero vel et numquam corrupti tenetur, iste sit aut necessitatibus quas, eligendi consequatur enim excepturi ratione esse facere reiciendis.</span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 via-blue-700 to-black rounded-4xl grid grid-cols-1 gap-5'>
                <span className='font-bold text-xl'>Filler Text</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat, voluptates vero vel et numquam corrupti tenetur, iste sit aut necessitatibus quas, eligendi consequatur enim excepturi ratione esse facere reiciendis.</span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 via-blue-700 to-black rounded-4xl grid grid-cols-1 gap-5'>
                <span className='font-bold text-xl'>Filler Text</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat, voluptates vero vel et numquam corrupti tenetur, iste sit aut necessitatibus quas, eligendi consequatur enim excepturi ratione esse facere reiciendis.</span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 via-blue-700 to-black rounded-4xl grid grid-cols-1 gap-5'>
                <span className='font-bold text-xl'>Filler Text</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat, voluptates vero vel et numquam corrupti tenetur, iste sit aut necessitatibus quas, eligendi consequatur enim excepturi ratione esse facere reiciendis.</span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 via-blue-700 to-black rounded-4xl grid grid-cols-1 gap-5'>
                <span className='font-bold text-xl'>Filler Text</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat, voluptates vero vel et numquam corrupti tenetur, iste sit aut necessitatibus quas, eligendi consequatur enim excepturi ratione esse facere reiciendis.</span>
            </motion.p>
            <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='p-5 bg-gradient-to-r from-blue-950 via-blue-700 to-black rounded-4xl grid grid-cols-1 gap-5'>
                <span className='font-bold text-xl'>Filler Text</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat, voluptates vero vel et numquam corrupti tenetur, iste sit aut necessitatibus quas, eligendi consequatur enim excepturi ratione esse facere reiciendis.</span>
            </motion.p>
        </div>
    </>)
}

export default Certificats