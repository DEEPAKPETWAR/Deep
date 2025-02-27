import React from 'react'
import logo from '../Assets/logo.jpg'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='py-12 bg-gray-200 '>
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8 '>
            <div className='space-y-6 mr-14'>
                <div className='flex items-center space-x-2'>
                    <img src={logo}alt=''className='w-32 h-auto'/>
                </div>
                <p className='text-black'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className='flex space-x-4'>
                    <a href="/#" className='bg-gray-200 text-green-400 rounded-full  size-10 flex items-center
                    hover:bg-green-500 hover:text-white' >
                        <FaFacebookF className='text-xl'/>
                    </a>
                    <a href="/#" className='bg-gray-200 text-green-400 rounded-full  size-10 flex items-center
                    hover:bg-green-500 hover:text-white' >
                        <FaTwitter className='text-xl'/>
                    </a> <a href="/#" className='bg-gray-200 text-green-400 rounded-full  size-10 flex items-center
                    hover:bg-green-500 hover:text-white' >
                        <FaInstagram className='text-xl'/>
                    </a> <a href="/#" className='bg-gray-200 text-green-400 rounded-full  size-10 flex items-center
                    hover:bg-green-500 hover:text-white' >
                        <FaLinkedin className='text-xl'/>
                    </a>
                </div>
            </div>
           
           <div className='space-y-6'>
                <h3 className='text-xl font-semibold '>Quick Links</h3>
                <ul className='space-y-3'>
                    <li>
                        <a href='#home'className=' hover:underline text-gray-700 '>Home</a>
                        </li>
                    <li>
                        <a href='#about'className=' hover:underline text-gray-700 '>About us</a>
                    </li>
                    <li>
                    <a href='#services'className=' hover:underline text-gray-700 '>Services</a>

                    </li>
                    <a href='#contact'className=' hover:underline text-gray-700 '>Contact</a>
                    <li></li>
                </ul>
           </div>


           <div className='space-y-6'>
                <h3 className='text-xl font-semibold '>Supports</h3>
                <ul className='space-y-3'>
                    <li>
                        <a href='#'className=' hover:underline text-gray-700 '>FAQs</a>
                        </li>
                    <li>
                        <a href='#'className=' hover:underline text-gray-700 '>Terms of Services</a>
                    </li>
                    <li>
                    <a href='#'className=' hover:underline text-gray-700 '>Privacy</a>

                    </li>
                    <a href='#'className=' hover:underline text-gray-700 '>Support Center</a>
                    <li></li>
                </ul>
           </div>
           <div className='space-y-6'>
                <h3 className='text-xl font-semibold '>Contact Info</h3>
                <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                        <FaMapMarkedAlt className='text-green-500'/>
                        <p className=' text-gray-700'>123 Street,City,Country</p>

                    </li>
                    <li className='flex items-center gap-2'>
                        <FaPhoneAlt className='text-green-500'/>
                        <p className=' text-gray-700'>/+123 456 7890</p>

                    </li><li className='flex items-center gap-2'>
                        <FaEnvelope className='text-green-500'/>
                        <p className=' text-gray-700'>info@healthwellness.com</p>

                    </li>
          

                </ul>
           </div>
        </div>
      
    </div>
  )
}

export default Footer
