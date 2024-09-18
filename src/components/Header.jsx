/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        {/* Left Side */}
        <div>
            <p>Book Appointment <br /> With Trusted Doctors</p>
            <div>
                <img src={assets.group_profiles} alt="group  profiles not found" />
                <p>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
                <a href="">Book Appointment <img src={assets.arrow_icon} alt="arrow icon not found" /></a>
            </div>
        </div>
        {/* Right Side */}
        <div>

        </div>
    </div>
  )
}

export default Header