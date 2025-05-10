import React, { useRef } from 'react'
import { motion } from 'motion/react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();
 
    const sendMail = (e) => {
        e.preventDefault();
        emailjs
      .sendForm('service_id', 'template_id', form.current, {
        publicKey: 'Your_public_Key',
      })
      .then(
        () => {
          alert('Message Send Successfully!');
        },
        (error) => {
          alert('Message Not Send, Try Again!');
          console.log('FAILED...', error.text);
        },
      );
        
    }

    return (<>
    <motion.div id='certificats' initial={{ position: 'absolute', right: '100%' }} animate={{ position: 'relative', right: '0' }} transition={{ duration: 0.85 }} className='w-full h-fit p-5 my-5 flex justify-center capitalize text-5xl text-white'><span className='bg-gradient-to-r p-5 font-bold from-blue-500 to-pink-500 text-transparent bg-clip-text'>Contact</span></motion.div>
      <form ref={form} onSubmit={sendMail} class="m-auto space-y-4 md:space-y-6 w-full p-5 md:w-1/2" method="POST">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-white">Your full name</label>
          <input type="text" name="user_name" id="name" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
        </div>
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-white">Email</label>
          <input type="email" name="user_email" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-white">Message</label>
          <textarea name="message" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
        </div>
        <button onClick={sendMail} type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>)
}

export default Contact