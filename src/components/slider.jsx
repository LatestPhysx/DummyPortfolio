import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import image from '../assets/perso.png'
import { Autoplay, Navigation } from 'swiper/modules';
import '../App.css'
import 'swiper/css/navigation';
import { motion } from 'motion/react';
const Slider = () => {

  return (<>
    <div className='w-full my-10 flex justify-center p-5'>
      <Swiper className='self-center text-white w-full md:w-2/3'
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide><img src={image} className='mx-auto' /> </SwiperSlide>
        <SwiperSlide><img src={image} className='mx-auto' /> </SwiperSlide>
        <SwiperSlide><img src={image} className='mx-auto' /> </SwiperSlide>
        <SwiperSlide><img src={image} className='mx-auto' /> </SwiperSlide>
        <SwiperSlide><img src={image} className='mx-auto' /> </SwiperSlide>
      </Swiper>
    </div>
    <div className='w-full h-fit capitalize p-10 xl:p-20 m-auto  bg-black text-white grid text-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
      <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='flex flex-col text-center md:text-start'>
        <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text'>Dummy text</span>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem illo corrupti placeat labore. Optio, ea. Quisquam dolor soluta est.</span>
      </motion.p>
      <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='flex flex-col text-center md:text-start'>
        <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text'>Dummy text</span>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem illo corrupti placeat labore. Optio, ea. Quisquam dolor soluta est.</span>
      </motion.p>
      <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='flex flex-col text-center md:text-start'>
        <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text'>Dummy text</span>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem illo corrupti placeat labore. Optio, ea. Quisquam dolor soluta est.</span>
      </motion.p>
      <motion.p initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='flex flex-col text-center md:text-start'>
        <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text'>Dummy text</span>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem illo corrupti placeat labore. Optio, ea. Quisquam dolor soluta est.</span>
      </motion.p>
    </div>
  </>)
}

export default Slider