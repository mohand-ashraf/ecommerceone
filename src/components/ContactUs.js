import React from 'react'
import { useSelector } from 'react-redux';
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {

    const theme = useSelector((state) => state.category.theme);

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall xl:h-[750px] lxl:h-[750px] lgl:h-[900px] mdl:h-[1120px] md:h-[1150px] sml:h-[1150px] xs:h-[1170px] sm:h-[1170px] lg:h-[900px] h-[750px]'>
                <div className='bg-[#E5EDEC] dark:bg-bghead h-[460px] py-10 xs:pt-[160px] sm:pt-[210px] sml:pt-[210px] md:pt-[160px] mdl:pt-[160px] lg:pt-[160px] xl:pt-[160px] lxl:pt-[160px] lgl:pt-[160px] pt-[160px]'>
                    <div className='container md:px-3 sm:px-3 sml:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 relative mx-auto'>
                        <h1 className='text-[#005E55] dark:text-color1 md:text-[70px] sm:text-[50px] xs:text-[50px] sml:text-[70px] mdl:text-[70px] lg:text-[70px] xl:text-[70px] lxl:text-[70px] lgl:text-[70px] text-[70px] pt-[60px] text-center'>Contact Us</h1>
                        <div className='gap-10 xl:gap-6 lxl:gap-10 lgl:gap-10 absolute flex-wrap w-[100%] top-1/2 xl:mt-[260px] lxl:mt-[255px] lgl:mt-[370px] xs:mt-[510px] sm:mt-[510px] sml:mt-[495px] md:mt-[495px] mdl:mt-[495px] lg:mt-[370px] mt-[255px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
                            <div className='hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] flex items-center flex-col justify-center gap-2 rounded-xl w-[400px] h-[200px] p-3'>
                                <FaRegAddressCard className='text-[#005E55] dark:text-color1 text-[50px]' />
                                <h1 className='text-[#005E55] dark:text-color1 text-center text-[30px] font-semibold'>Address</h1>
                                <p className='text-[20px] dark:text-[#B8BABE] text-center font-medium'>1 Abdalluh Abdelhamed st.</p>
                                <p className='text-[20px] dark:text-[#B8BABE] text-center font-medium'>Faisel, Giza</p>
                            </div>
                            <div className='hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] flex items-center flex-col justify-center gap-2 rounded-xl w-[400px] h-[200px] p-3'>
                                <MdOutlineContacts className='text-[#005E55] dark:text-color1 text-[50px]' />
                                <h1 className='text-[#005E55] dark:text-color1 text-center text-[30px] font-semibold'>Contacts</h1>
                                <p className='text-[20px] dark:text-[#B8BABE] text-center font-medium'>01159424411 (Whatsapp)</p>
                                <p className='text-[20px] dark:text-[#B8BABE] text-center font-medium'>01090642050</p>
                            </div>
                            <div className='hover:-translate-y-3 transition-all duration-300 shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] flex items-center flex-col justify-center gap-2 rounded-xl w-[400px] h-[200px] p-3'>
                                <MdOutlineEmail className='text-[#005E55] dark:text-color1 text-[50px]' />
                                <h1 className='text-[#005E55] dark:text-color1 text-center text-[30px] font-semibold'>Emails</h1>
                                <p className='text-[20px] dark:text-[#B8BABE] text-center font-medium'>mohandashraf540@gmail.com</p>
                                <p className='text-[20px] dark:text-[#B8BABE] text-center font-medium'>mohandashraf40@yahoo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs