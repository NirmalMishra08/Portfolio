import React from 'react'
import logo from "../react-portfolio-assets-kevin/assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
    return (
        <nav className='my-2 mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
                <FaLinkedin/>
                <FaTwitter/>
                <FaGithub/>
                <FaInstagram/>
            </div>
        </nav>
    )
}

export default Navbar