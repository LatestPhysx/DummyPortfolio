import React, { useEffect } from 'react'
import { motion } from 'motion/react'

const Education = () => {

    useEffect(() => {
        document.i
        document.title = "Omar's Portfolio";
      }, []);

    return (<>
        <motion.div id='education' initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='w-full h-fit p-5 my-5 flex justify-center capitalize text-5xl text-white'><span className='bg-gradient-to-r p-5 font-bold from-blue-500 to-pink-500 text-transparent bg-clip-text'>education</span></motion.div>
        <motion.div initial={{ position: 'absolute', left: '100%' }} animate={{ position: 'relative', left: '0' }} transition={{ duration: 0.85 }} className=' text-xl text-white w-full gap-10 h-fit p-5 grid grid-cols-1 md:grid-cols-2'>
            <p className='grid gap-5 grid-cols-1 text-xl p-5 bg-gradient-to-r from-gray-800 to-green-900 rounded-4xl'>
                <span className='font-bold text-2xl'>Year:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, delectus.
            </p>
            <p className='grid gap-5 p-5 bg-gradient-to-r from-gray-800 to-green-900  grid-cols-1 rounded-4xl text-xl'>
                <span className='font-bold text-2xl'>Year:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, delectus.
            </p>
        </motion.div>
    </>)
}

export default Education