import React from 'react'
import { FaFilter, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiShoppingBag } from 'react-icons/gi';
import { IoMdNotifications } from 'react-icons/io';
import { MdInsertComment } from 'react-icons/md';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { useSelector } from 'react-redux';


const AboutUs = () => {

    const theme = useSelector((state) => state.category.theme);

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall'>
                <div className='container py-10 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 xs:px-3 sm:px-3 mx-auto xs:pt-[210px] sm:pt-[210px] sml:pt-[210px] md:pt-[160px] mdl:pt-[160px] lg:pt-[160px] xl:pt-[160px] lxl:pt-[160px] lgl:pt-[160px] pt-[160px]'>
                    <h1 className='font-Playwrite text-[30px] text-[#004D40] dark:text-color1 font-semibold mb-5'>About US</h1>
                    <p className='text-[18px] dark:text-[#B8BABE] mb-20'><span className='text-[#004D40] dark:text-color1 font-semibold'>E-Commerce </span>
                        is an easy and secure platform for people to
                        discover and shop the products they love. With fast delivery, easy payment
                        and return options and a 24-hour customer service, find everything you need at competitive
                        prices. All our products are backed by our authenticity promise and
                        <span className='text-[#004D40] dark:text-color1 font-semibold'> E-Commerce</span> warranty.</p>
                    <h1 className='font-Playwrite text-[30px] text-[#004D40] dark:text-color1 font-semibold mb-5'>What is on the site?</h1>
                    <p className='text-[18px] dark:text-[#B8BABE] mb-4'>Here is summary of what exists</p>
                    <div className='flex flex-wrap items-center justify-center mt-8'>
                        <div className='shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] rounded-lg hover:-translate-y-3 transition-all duration-300 h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mb-6 mr-4 p-4 flex flex-col items-center justify-center'>
                            <FaUser className='text-[50px] text-[#004D40] dark:text-color1' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>User</h1>
                            <p className='text-center dark:text-[#B8BABE]'>Manage your profile or even delete it.</p>
                        </div>
                        <div className='rounded-lg hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mb-6 mr-4 p-4 flex flex-col items-center justify-center'>
                            <FaHeart className='text-[50px] text-[#FF5722]' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>Wishlist</h1>
                            <p className='text-center dark:text-[#B8BABE]'>Responsible for managing your favorite products.</p>
                        </div>
                        <div className='rounded-lg hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mb-6 mr-4 p-4 flex flex-col items-center justify-center'>
                            <FaShoppingCart className='text-[50px] text-[#000000] dark:text-color1' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>Cart</h1>
                            <p className='text-center dark:text-[#B8BABE]'>Review your products before buying them.</p>
                        </div>
                        <div className='rounded-lg hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mb-6 mr-4  p-4 flex flex-col items-center justify-center'>
                            <IoMdNotifications className='text-[50px] text-[#2196F3]' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>Notifications</h1>
                            <p className='text-center dark:text-[#B8BABE]'>Watching your profile updates.</p>
                        </div>
                        <div className='rounded-lg hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mb-6 mr-4 p-4 flex flex-col items-center justify-center'>
                            <FaFilter className='text-[50px] text-[#FF9800]' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>Feltering</h1>
                            <p className='text-center dark:text-[#B8BABE]'>Filter products and the filtering isn't changing when you are taking the link to your friend or anybody else.</p>
                        </div>
                        <div className='rounded-lg hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mb-6 mr-4 p-4 flex flex-col items-center justify-center'>
                            <GiShoppingBag className='text-[50px] text-[#004D40] dark:text-color1' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>Orders</h1>
                            <p className='text-center dark:text-[#B8BABE]'>Manage the orders you have created, whether you want to delete them or track their progress.</p>
                        </div>
                        <div className='rounded-lg hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mb-6 mr-4 p-4 flex flex-col items-center justify-center'>
                            <TfiCommentsSmiley className='text-[50px] text-[#2196F3]' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>Products comments</h1>
                            <p className='text-center dark:text-[#B8BABE]'>To share your opinion about the product you have purchased, this section becomes available after the purchase is complete.</p>
                        </div>
                        <div className='rounded-lg hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] h-[200px] xs:w-[100%] sm:w-[100%] sml:w-[90%] md:w-[90%] mdl:w-[46%] lg:w-[46%] lgl:w-[40%] xl:w-[30%] lxl:w-[23%] w-[23%] gap-2 mr-4 mb-6 p-4 flex flex-col items-center justify-center'>
                            <MdInsertComment className='text-[50px] text-[#FF9800]' />
                            <h1 className='text-[22px] dark:text-[#B8BABE]'>Interact</h1>
                            <p className='text-center dark:text-[#B8BABE]'>By sending emails to your email address, we keep you informed about anything related to your account and your orders.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs