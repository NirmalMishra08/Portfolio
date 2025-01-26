import React from 'react'
import aboutImg from "../react-portfolio-assets-kevin/assets/about.jpg"
import { motion } from "motion/react"

const About = () => {
    const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
    return (
        <div className=' border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl '>About <span className='text-neutral-500'>Me</span> </h1>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={aboutImg} alt="" />
                    </div>
                    
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                        </div>
                    </motion.div>
            </div>
        </div>
    )
}

export default About