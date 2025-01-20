import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useSelector } from 'react-redux';


const Footer = () => {

    const theme = useSelector((state) => state.category.theme);

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-[#005048] dark:bg-[#111827] dark:border-t-2 dark:border-color1'>
                <div className='container xs:px-3 sm:px-3 xs:flex-wrap sm:flex-wrap md:flex-nowrap sml:flex-wrap mdl:flex-nowrap lg:flex-nowrap xl:flex-nowrap lxl:flex-nowrap lgl:flex-nowrap md:px-3 sml:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 mx-auto my-auto justify-between flex py-6'>
                    <div>
                        <span className='font-Playwrite text-white font-bold text-[25px] border-b-2 border-solid'>E-Commerce</span>
                    </div>
                    <div>
                        <span className='text-white font-bold text-[25px] border-b-2 border-solid'>WEBSITE</span>
                        <ul className='mt-1 text-[18px] text-[#c0dbd4]'>
                            <li className='mt-2 hover:text-white font-medium'><Link to="/aboutus">About Us</Link></li>
                            <li className='mt-2 hover:text-white font-medium'><Link to='/contactus'>Contact US</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span className='text-white font-bold text-[25px] border-b-2 border-solid'>ELECTRONICS</span>
                        <ul className='mt-1 text-[18px] text-[#c0dbd4]'>
                            <li className='mt-2mt-2 hover:text-white font-medium'><Link to="/mobiles">Mobiles</Link></li>
                            <li className='mt-2mt-2 hover:text-white font-medium'><Link to="/laptops">Laptops</Link></li>
                            <li className='mt-2mt-2 hover:text-white font-medium'><Link to="/appliances">Home Appliances</Link></li>
                            <li className='mt-2mt-2 hover:text-white font-medium'><Link to="/games">Video Game</Link></li>
                            <li className='mt-2mt-2 hover:text-white font-medium'><Link to='/televisions'>Televisions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span className='text-white font-bold text-[25px] border-b-2 border-solid'>TOP BRANDS</span>
                        <ul className='mt-1 text-[18px] text-[#c0dbd4]'>
                            <li className='mt-2 hover:text-white font-medium'><Link to='/apple'>Apple</Link></li>
                            <li className='mt-2 hover:text-white font-medium'><Link to='/samsung'>Samsung</Link></li>
                            <li className='mt-2 hover:text-white font-medium'><Link to='/xiaomi'>Xiaomi</Link></li>
                            <li className='mt-2 hover:text-white font-medium'><Link to='/hp'>Hp</Link></li>
                            <li className='mt-2 hover:text-white font-medium'><Link to='/tefal'>Tefal</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='container xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 mx-auto my-auto py-3 justify-between dark:bg-[#111827] bg-[#005048]'>
                    <span className='text-[white] font-bold xs:text-[20px] sm:text-[23px] sml:text-[23px] md:text-[23px] mdl:text-[23px] lg:text-[23px] xl:text-[23px] lxl:text-[23px] lgl:text-[23px] text-[23px] border-b-2 border-solid'>To follow us or communicate</span>
                    <ul className='flex items-center my-5 gap-6 xs:mx-1 sm:mx-1.5 sml:mx-1.5 md:mx-1.5 mdl:mx-1.5 lg:mx-1.5 xl:mx-1.5 lxl:mx-1.5 lgl:mx-1.5 mx-1.5 text-[22px]'>
                        <li className='border-2 border-solid p-2 rounded-xl text-[#c0dbd4] hover:text-white'><a href='https://www.facebook.com/share/18TcaizHxm/' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a></li>
                        <li className='border-2 border-solid p-2 rounded-xl text-[#c0dbd4] hover:text-white'><a href='https://x.com/Mohand1647723?t=CNx4p3IxCA2rJOYwjLGhkg&s=09' target='_blank' rel='noopener noreferrer'><FaXTwitter /></a></li>
                        <li className='border-2 border-solid p-2 rounded-xl text-[#c0dbd4] hover:text-white'><a href='https://github.com/mohand-ashraf' target='_blank' rel='noopener noreferrer'><FaGithub /></a></li>
                        <li className='border-2 border-solid p-2 rounded-xl text-[#c0dbd4] hover:text-white'><a href='https://wh.ms/201159424411' target='_blank' rel='noopener noreferrer'><FaPhoneFlip /></a></li>
                        <li className='border-2 border-solid p-2 rounded-xl text-[#c0dbd4] hover:text-white'><a href='mailto:mohandashraf540@gmail.com' target='_blank' rel='noopener noreferrer'><MdEmail /></a></li>
                    </ul>
                </div>
                <div className='bg-[#004841] dark:bg-[#1F2937] text-center text-white py-3 text-[17px] font-medium'>
                    <span>Created and designed by <span className='font-bold'>Mohand Ashraf</span></span>
                    <br />
                    <span>2024</span>
                </div>
            </div>
        </div>
    )
}

export default Footer