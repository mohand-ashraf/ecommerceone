import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaMoon, FaSearch, FaShoppingCart, FaSignInAlt, FaSun } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoPersonAdd } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, toggleTheme } from './redux/appSlice';
import { FiLogOut } from "react-icons/fi";
import { FaXmark } from 'react-icons/fa6';


const Header = () => {

    const userInfo = useSelector((state) => state.category.userInfo);
    const dispatch = useDispatch();
    const location = useLocation();
    const theme = useSelector((state) => state.category.theme);
    const [changeIcon, setChangeIcon] = useState("false");
    const [menu, setMenu] = useState('false');

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            dispatch(setUser(userInfo));
        }
    }, [dispatch]);

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        dispatch(setUser(null));
    };

    const toggleDarkMode = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className={`fixed top-0 right-0 left-0 z-20 ${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bghead pt-5 pb-5'>
                <div className='container mx-auto my-auto xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 justify-between flex items-center'>
                    <Link to="/" className='xs:text-3xl sm:text-3xl sml:text-3xl md:text-3xl mdl:text-3xl lg:text-3xl xl:text-3xl lxl:text-3xl lgl:text-3xl font-rubik font-semibold text-3xl text-[#004D40] dark:text-color1'>E-Commerce</Link>
                    <div className='xs:hidden sm:hidden sml:hidden md:hidden mdl:hidden lg:flex xl:flex lxl:flex lgl:flex flex p-2 justify-center items-center bg-white dark:bg-bghead border-2 border-solid border-[#004D40] dark:border-color1 rounded-md'>
                        <input type='search' placeholder='What do you want ?' className='text-[#005E55] dark:text-color1 lg:pr-10 xl:pr-28 lxl:pr-28 lgl:pr-28 pr-28 bg-transparent outline-none' />
                        <FaSearch className='text-[#004D40] dark:text-color1' />
                    </div>
                    <div className='flex items-center gap-3'>
                        {userInfo ? (<>
                            <p className='text-[#004D40] xs:hidden sm:hidden sml:hidden md:flex mdl:flex lg:flex xl:flex lxl:flex lgl:flex dark:text-color1 xs:mr-0 sm:mr-0 sml:mr-[10px] md:mr-[30px] mdl:mr-[30px] lg:mr-[30px] xl:mr-[30px] lxl:mr-[30px] lgl:mr-[30px] text-[20px] mr-[30px] font-medium font-Playwrite'>{userInfo.userName}</p>
                            <FiLogOut className='xs:hidden sm:hidden sml:hidden md:flex mdl:flex lg:flex xl:flex lxl:flex lgl:flex cursor-pointer mr-[30px] xs:mr-[10px] sm:mr-[10px] sml:mr-[10px] md:mr-[30px] mdl:mr-[30px] lg:mr-[30px] xl:mr-[30px] lxl:mr-[30px] lgl:mr-[30px] text-2xl text-[#004D40] dark:text-color1' onClick={handleLogout} />
                        </>) : (<>
                            <Link to="/signup" className='xs:hidden sm:hidden sml:hidden md:flex mdl:flex lg:flex xl:flex lxl:flex lgl:flex flex items-center text-[17px] hover:bg-[#E5EDEC] dark:hover:bg-[#030E17] dark:bg-[#030E17] bg-[#F2F6F5] text-[#20726A] dark:text-color1 border-2 border-solid border-[#005E55] dark:border-color1 rounded-md py-1 px-2 transition-all duration-300'>
                                <IoPersonAdd className='mr-2 text-[#005E55] dark:text-color1' />
                                Sign Up
                            </Link>
                            <Link to="/signin" className='xs:hidden sm:hidden sml:hidden md:flex mdl:flex lg:flex xl:flex lxl:flex lgl:flex flex items-center hover:bg-[#FFEEE8] text-[17px] text-[#604E48] dark:text-color2 bg-[#FFF6F4] dark:bg-[#1D0F13] dark:hover:bg-[#1D0F13] border-2 border-solid border-[#604E48] dark:border-color2 rounded-md py-1 px-2.5 transition-all duration-300'>
                                <FaSignInAlt className='mr-2 text-[#604E48] dark:text-color2' />
                                Sign In
                            </Link>
                        </>)}
                        <div className="flex items-center cursor-pointer transition-all duration-300" onClick={toggleDarkMode}>
                            {theme === "dark" ? (
                                <FaMoon className="text-2xl text-white" />
                            ) : (
                                <FaSun className="text-2xl text-[#7e6530]" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white dark:bg-bghead pb-2 md:hidden mdl:hidden lg:hidden xl:hidden lxl:hidden lgl:hidden'>
                <div className='container mx-auto my-auto xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 justify-between flex items-center'>
                    <nav className='md:hidden mdl:hidden lg:hidden xl:hidden lxl:hidden lgl:hidden flex items-center justify-center gap-5'>
                        <Link to="/cart" className='justify-center flex items-center font-medium text-[20px] text-[#4B5563] dark:text-[#B8BABE] hover:text-[#004D40] dark:hover:text-color1 transition-all duration-300 '>
                            <FaShoppingCart className='text-[23px]' />
                        </Link>
                        <Link to="/wishlist" className='justify-center flex font-medium text-[#4B5563] dark:text-[#B8BABE] hover:text-[#004D40] dark:hover:text-color1 transition-all duration-300 items-center text-[20px]'>
                            <FaHeart className='text-[23px]' />
                        </Link>
                    </nav>
                    <div className='flex items-center gap-3'>
                        {userInfo ? (<>
                            <p className='text-[#004D40] dark:text-color1 text-[20px] mr-[10px] font-medium font-Playwrite'>{userInfo.userName}</p>
                            <FiLogOut className='cursor-pointer text-2xl text-[#004D40] dark:text-color1' onClick={handleLogout} />
                        </>) : (<>
                            <Link to="/signup" className='flex items-center text-[17px] hover:bg-[#E5EDEC] dark:hover:bg-[#030E17] dark:bg-[#030E17] bg-[#F2F6F5] text-[#20726A] dark:text-color1 border-2 border-solid border-[#005E55] dark:border-color1 rounded-md py-1 px-2 transition-all duration-300'>
                                <IoPersonAdd className='mr-2 text-[#005E55] dark:text-color1' />
                                Sign Up
                            </Link>
                            <Link to="/signin" className='flex items-center hover:bg-[#FFEEE8] text-[17px] text-[#604E48] dark:text-color2 bg-[#FFF6F4] dark:bg-[#1D0F13] dark:hover:bg-[#1D0F13] border-2 border-solid border-[#604E48] dark:border-color2 rounded-md py-1 px-2.5 transition-all duration-300'>
                                <FaSignInAlt className='mr-2 text-[#604E48] dark:text-color2' />
                                Sign In
                            </Link>
                        </>)}
                    </div>
                </div>
            </div>
            <div className='bg-[#E5EDEC] dark:bg-bgall shadow-[0_4px_10px_0_rgba(173,216,230,0.8)] border-b-2 border-[#004D40] dark:border-color1'>
                <div className='container mx-auto xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 justify-between flex items-center py-3'>
                    <nav className='xs:hidden sm:hidden sml:hidden md:flex mdl:flex lg:flex xl:flex lxl:flex lgl:flex flex items-center justify-center gap-5'>
                        <Link to="/cart" className='justify-center flex items-center font-medium gap-2 text-[20px] text-[#4B5563] dark:text-[#B8BABE] hover:text-[#004D40] dark:hover:text-color1 transition-all duration-300 '>
                            Cart
                            <FaShoppingCart className='text-[23px]' />
                        </Link>
                        <Link to="/wishlist" className='justify-center flex font-medium text-[#4B5563] dark:text-[#B8BABE] hover:text-[#004D40] dark:hover:text-color1 transition-all duration-300 items-center gap-2 text-[20px]'>
                            Wishlist
                            <FaHeart className='text-[23px]' />
                        </Link>
                    </nav>
                    <div className='xs:flex sm:flex sml:flex md:hidden mdl:hidden lg:hidden xl:hidden lxl:hidden lgl:hidden flex p-[7px] justify-center items-center bg-white dark:bg-bghead border-2 border-solid border-[#004D40] dark:border-color1 rounded-md'>
                        <input type='search' placeholder='What do you want ?' className='text-[#005E55] dark:text-color1 xs:pr-4 sm:pr-16 sml:pr-20 md:pr-20 mdl:pr-20 lg:pr-20 xl:pr-20 lxl:pr-20 lgl:pr-20 pr-20 bg-transparent outline-none' />
                        <FaSearch className='text-[#004D40] dark:text-color1' />
                    </div>
                    <nav className='xs:hidden sm:hidden sml:hidden md:hidden mdl:hidden lg:flex xl:flex lxl:flex lgl:flex flex gap-6 items-center text-[#4B5563] dark:text-[#B8BABE] text-[17px] font-medium'>
                        <Link to="/" className={`relative group ${location.pathname === '/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Home
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/mobiles"
                            className={`relative group ${location.pathname === '/mobiles' || location.pathname === '/mobiles/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Mobiles
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/laptops"
                            className={`relative group ${location.pathname === '/laptops' || location.pathname === '/laptops/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Laptops
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/appliances"
                            className={`relative group ${location.pathname === '/appliances' || location.pathname === '/appliances/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Home Appliances
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/games"
                            className={`relative group ${location.pathname === '/games' || location.pathname === '/games/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Games
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/perfumes"
                            className={`relative group ${location.pathname === '/perfumes' || location.pathname === '/perfumes/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Perfumes
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>
                    <div className='xs:flex sml:flex mdl:flex lg:hidden xl:hidden lxl:hidden lgl:hidden items-center'>
                        {changeIcon === "false" ?
                            <>
                                <FaBars className='text-[#004D40] dark:text-color1 text-[25px] cursor-pointer' onClick={() => {
                                    setChangeIcon('true')
                                    setMenu('true')
                                }} />
                            </>
                            : <>
                                <FaXmark className='text-[#004D40] dark:text-color1 text-[25px] cursor-pointer' onClick={() => {
                                    setChangeIcon('false')
                                    setMenu('false')
                                }} />
                            </>}
                    </div>
                </div>
            </div>
            {menu === "true" ?
                <div className='lg:px-3 xs:px-3 sm:px-3 sml:px-3 md:px-3 xl:px-3 mdl:px-3 lxl:px-0 lgl:px-3 z-50 bg-[#E5EDEC] rounded-b-lg dark:bg-bghead py-3 container mx-auto'>
                    <nav className='flex flex-col gap-6 items-center text-[#4B5563] dark:text-[#B8BABE] text-[17px] font-medium'>
                        <Link to="/" className={`relative group ${location.pathname === '/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Home
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/mobiles"
                            className={`relative group ${location.pathname === '/mobiles' || location.pathname === '/mobiles/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Mobiles
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/laptops"
                            className={`relative group ${location.pathname === '/laptops' || location.pathname === '/laptops/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Laptops
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/appliances"
                            className={`relative group ${location.pathname === '/appliances' || location.pathname === '/appliances/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Home Appliances
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/games"
                            className={`relative group ${location.pathname === '/games' || location.pathname === '/games/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Games
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/perfumes"
                            className={`relative group ${location.pathname === '/perfumes' || location.pathname === '/perfumes/' ? 'border-b-2 border-[#004D40] dark:border-color1 font-bold' : ''}`}>
                            Perfumes
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#004D40] dark:bg-color1 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>
                </div>
                : <>
                </>}
        </div>
    )
}

export default Header