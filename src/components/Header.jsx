/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* Left Side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p>Book Appointment <br /> With Trusted Doctors</p>
            <div>
                <img src={assets.group_profiles} alt="group  profiles not found" />
                <p>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
                <a href="">Book Appointment <img src={assets.arrow_icon} alt="arrow icon not found" /></a>
            </div>
        </div>
        {/* Right Side */}
        <div>
            <img src={assets.header_img} alt="header img not found" />
        </div>
    </div>
  )
}

export default Header