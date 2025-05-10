import React from 'react'
import '../App.css'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import OutboundIcon from '@mui/icons-material/Outbound';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { motion } from "motion/react"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router';

const Info = () => {
    return (
        <div className='grid mt-10 capitalize gap-15 grid-cols-1 md:grid-cols-2 text-2xl text-black p-7 md:p-10 lg:p-13 z-0 xl:text-4xl dark:text-white'>
            <motion.div id='info' initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='grid gap-10 whitespace-pre-line'>
                <BrowserRouter>
                    <HashLink to='#contact'>
                        <p className='p-1.5 text-2xl h-fit w-fit bg-white text-black rounded-xl'><CheckCircleRoundedIcon fontSize='large' className='mr-1' /><span className='bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text'>Available For Work</span></p>
                    </HashLink>
                    <p className='font-bold text-white'>
                        about me
                    </p>
                    <p className='font-bold text-xl text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem nemo, corporis consectetur unde velit impedit minima itaque maiores id.
                    </p>
                    <p className='flex flex-col gap-5 md:flex-row'>
                        <HashLink to='#contact'>
                            <p className='capitalize p-1.5 text-xl w-fit h-fit bg-white text-black whitespace-nowrap rounded-xl'>
                                <OutboundIcon fontSize='large' className='mr-1' /><span className='bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text'>work with me</span>
                            </p>
                        </HashLink>
                        <a target='_blank'><p className='capitalize p-1.5 whitespace-nowrap text-xl  w-fit h-fit bg-white text-black rounded-xl'>
                            <DownloadForOfflineRoundedIcon fontSize='large' className='mr-1' /><span className='bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text'>download cv</span>
                        </p></a>
                    </p>
                </BrowserRouter>
            </motion.div>
            <motion.div initial={{ position: 'absolute', left: '100%' }} animate={{ position: 'relative', left: '0' }} transition={{ duration: 0.85 }} className='text-white flex justify-center self-center'>
                {/*<img src={image} className='w-70 xl:w-110 bg-none rounded-l-full rounded-r-full hover:shadow-amber-50 duration-700 drop-shadow shadow-2xl' alt="" />*/} image goes here
            </motion.div>
        </div>
    )
}

export default Info