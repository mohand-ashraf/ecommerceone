import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Gategories = () => {

    const theme = useSelector((state) => state.category.theme);

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall'>
                <div className='container sm:px-3 md:px-3 xs:px-3 mdl:px-3 sml:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 mx-auto py-14'>
                    <span className='font-Playwrite text-[25px] border-b-2 border-[#004D40] dark:border-color1 font-semibold dark:text-color1 text-[#004D40]'>Gategories</span>
                    <ul className='flex gap-6 sm:px-0 xs:px-0 sml:px-5 md:px-5 lg:px-10 xl:px-20 lxl:px-20 lgl:px-20 justify-center items-center flex-wrap px-20 mt-8'>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/mobiles'>
                                <img src='/images/mobiles.avif' alt='mobiles' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/televisions'>
                                <img src='/images/televisions.avif' alt='televisions' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/laptops'>
                                <img src='/images/laptops.avif' alt='laptops' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/watches'>
                                <img src='/images/watches.avif' alt='watches' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/appliances'>
                                <img src='/images/appliances.avif' alt='appliances' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/perfumes'>
                                <img src='/images/fragrances.avif' alt='fragrances' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/games'>
                                <img src='/images/games.avif' alt='games' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/beauty'>
                                <img src='/images/beauty.avif' alt='beauty' width='90px' height="90px" />
                            </Link>
                        </li >
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-3'>
                            <Link to='/head'>
                                <img src='/images/headsets.avif' alt='headsets' width='90px' height="90px" />
                            </Link>
                        </li>
                        <li className='bg-white dark:bg-[#6B7280] dark:border-[#6B7280] border-2 border-solid border-white shadow-2xl rounded-lg px-2 py-2'>
                            <Link to='/fashion'>
                                <img src='/images/menfashion.avif' alt='menfashion' width='90px' height="90px" />
                            </Link>
                        </li>
                    </ul >
                </div >
            </div>
        </div>
    )
}

export default Gategories