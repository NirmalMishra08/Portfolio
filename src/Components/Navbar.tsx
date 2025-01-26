
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
    return (
        <nav className='my-2 mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img
                    className="mx-2 w-28 bg-cover bg-center filter sepia contrast-200 invert"
                    src="N.png"
                    alt="logo"
                />

            </div>
            <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
                <a target="_blank" href="https://www.linkedin.com/in/nirmal-mishra-01a0942b6/" about='/blank'><FaLinkedin /></a>
                <a target="_blank" href="https://x.com/MishraNirmal2"><FaTwitter /></a>
                <a target="_blank" href="https://github.com/NirmalMishra08"><FaGithub /></a>
                <a target="_blank" href=""><FaInstagram /> </a>
            </div>
        </nav>
    )
}

export default Navbar