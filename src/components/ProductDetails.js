import React, { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../api/productsApi';
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { addToCart, addToWishList, removeFromWishList, removeProduct } from './redux/appSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


const ProductDetails = () => {

    const dispatch = useDispatch();
    const { products, wishList, cart } = useSelector((state) => state.category);
    const [cartAddMessage, setAddCartMessage] = useState('');
    const [cartRemoveMessage, setRemoveCartMessage] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedTwo, setIsExpandedTwo] = useState(false);
    const { id } = useParams();
    const [randomizedProducts, setRandomizedProducts] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const details = randomizedProducts.find((item) => item.id === parseInt(id));
    const theme = useSelector((state) => state.category.theme);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));

        setAddCartMessage('Item added to cart successfully!');
        setTimeout(() => {
            setAddCartMessage('');
        }, 3000);
    };

    const isProductInWishList = (productId) => {
        return wishList.some(product => product.id === productId);
    }

    const isProductIncart = (productId) => {
        return cart.some(product => product.id === productId);
    }

    const handleIconChange = (productId) => {
        if (isProductInWishList(productId)) {
            dispatch(removeFromWishList({ id: productId }));
        } else {
            dispatch(addToWishList({ id: productId, quantity: 1 }));
        }
    };

    useEffect(() => {
        const savedRandomOrder = localStorage.getItem("randomOrder");
        if (savedRandomOrder) {
            setRandomizedProducts(JSON.parse(savedRandomOrder));
        } else {
            const randomProducts = [...products].sort(() => Math.random() - 0.5);
            setRandomizedProducts(randomProducts);
            localStorage.setItem("randomOrder", JSON.stringify(randomProducts));
        }
    }, [products]);

    if (!details) {
        return <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall pt-[170px]'>
            </div>
        </div>;
    }

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall'>
                <div className='container details xs:px-3 sm:flex-wrap sm:px-3 sml:px-3 md:px-3 sml:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap lxl:flex-nowrap lgl:flex-nowrap mdl:flex-wrap mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 py-10 mx-auto flex xs:pt-[220px] sm:pt-[220px] sml:pt-[220px] md:pt-[170px] mdl:pt-[170px] lg:pt-[170px] xl:pt-[170px] lxl:pt-[170px] lgl:pt-[170px] pt-[170px]'>
                    {cartAddMessage && (
                        <div className="w-[280px] fixed top-10 left-1/2 transform -translate-x-1/2 bg-[#E5EDEC] text-[#004D40] z-50 text-center py-3 px-5 rounded-lg font-medium">
                            {cartAddMessage}
                        </div>
                    )}
                    {cartRemoveMessage && (
                        <div className="w-[280px] fixed top-10 left-1/2 transform -translate-x-1/2 bg-[#FFEEE8] text-[#604E48] z-50 text-center py-3 px-5 rounded-lg font-medium">
                            {cartRemoveMessage}
                        </div>
                    )}
                    <div className='sm:w-[100%] sml:w-[100%] lg:w-[100%] md:w-[100%] xl:w-[45%] lxl:w-[45%] lgl:w-[45%] mdl:w-[100%] w-[45%] h-[60%] flex flex-col items-center justify-center'>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            centeredSlides={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 min-h-[350px] flex items-center"
                        >
                            {details.image && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image2 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image2}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image3 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image3}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image4 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image4}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image5 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image5}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image6 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image6}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image7 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image7}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image8 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image8}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image9 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image9}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                            {details.image10 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image10}`} alt={details.title} className='object-contain max-w-[350px] max-h-[450px]' />
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={3}
                            slidesPerView={6}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 4,
                                },
                                1536: {
                                    slidesPerView: 6,
                                },
                                1280: {
                                    slidesPerView: 5,
                                },
                                860: {
                                    slidesPerView: 6,
                                },
                                768: {
                                    slidesPerView: 6,
                                },
                                667: {
                                    slidesPerView: 6,
                                },
                                500: {
                                    slidesPerView: 5,
                                },
                                375: {
                                    slidesPerView: 3,
                                },
                            }}
                            freeMode={true}
                            watchSlidesProgress={true}
                            centeredSlides={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper flex items-center justify-center mt-5"
                        >
                            {details.image && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image2 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image2}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image3 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image3}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image4 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image4}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image5 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image5}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image6 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image6}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image7 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image7}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image8 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image8}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image9 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image9}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                            {details.image10 && (
                                <SwiperSlide className='flex items-center justify-center my-auto'>
                                    <img src={`/${details.image10}`} alt={details.title} className='object-contain max-w-[80px] max-h-[130px]' />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div className='lg:ml-6 sm:ml-0 sml:ml-0 md:ml-6 xl:ml-6 lxl:ml-6 lgl:ml-6 mdl:ml-6 lg:mt-4 sml:mt-4 md:mt-4 xl:mt-0 lxl:mt-0 lgl:mt-0 mdl:mt-4 ml-6'>
                        <h1 className='text-[27px] dark:text-[#B8BABE] font-semibold'>{details.title}</h1>
                        <h1 className='text-[27px] text-[#004D40] dark:text-color1 opacity-70 font-medium mt-2 mb-6'>EGP {details.price}</h1>
                        {details.details && (
                            <>
                                {Object.entries(details.details)
                                    .slice(0, 5)
                                    .map(([key, value], index) => (
                                        value && (
                                            <div key={index} className='flex lg:w-[420px] sm:w-[300px] sml:w-[420px] md:w-[420px] xl:w-[420px] lxl:w-[420px] lgl:w-[420px] mdl:w-[420px] w-[420px]'>
                                                <span className='w-[220px] dark:text-[#B8BABE] text-[16px] font-bold mb-1'>
                                                    {formatKey(key)}
                                                </span>
                                                <span className='dark:text-[#B8BABE]'>{value}</span>
                                            </div>
                                        )
                                    ))}
                                {isExpanded &&
                                    Object.entries(details.details)
                                        .slice(5)
                                        .map(([key, value], index) => (
                                            value && (
                                                <div key={index} className='flex lg:w-[420px] sm:w-[300px] sml:w-[420px] md:w-[420px] xl:w-[420px] lxl:w-[420px] lgl:w-[420px] mdl:w-[420px] w-[420px]'>
                                                    <span className='w-[220px] dark:text-[#B8BABE] text-[16px] font-bold mb-1'>
                                                        {formatKey(key)}
                                                    </span>
                                                    <span className='dark:text-[#B8BABE]'>{value}</span>
                                                </div>
                                            )
                                        ))}
                                {Object.keys(details.details).length > 5 && (
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="text-[#005E55] dark:text-color1 font-normal hover:font-medium"
                                    >
                                        {isExpanded ? 'See Less' : 'See More'}
                                    </button>
                                )}
                            </>
                        )}
                        <h1 className='text-[20px] dark:text-[#B8BABE] font-bold mt-4'>About this item</h1>
                        {details.about &&
                            Object.keys(details.about)
                                .slice(0, isExpandedTwo ? Object.keys(details.about).length : 4)
                                .map((key, index) => (
                                    <li key={index} className='font-semibold dark:text-[#B8BABE] mb-1'>
                                        {details.about[key]}
                                    </li>
                                ))}
                        {Object.keys(details.about).length > 4 && (
                            <button
                                onClick={() => setIsExpandedTwo(!isExpandedTwo)}
                                className="text-[#005E55] dark:text-color1 font-normal hover:font-medium"
                            >
                                {isExpandedTwo ? 'See Less' : 'See More'}
                            </button>
                        )}
                        <div className='flex items-center justify-center gap-10 mt-6'>
                            {!isProductIncart(details.id) ?
                                <button
                                    onClick={() => handleAddToCart(details)}
                                    className='text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] hover:bg-[#0e443f] bg-[#005E55] rounded-md w-[50%]'>
                                    Add to cart
                                </button>
                                :
                                <button onClick={() => {
                                    setRemoveCartMessage('Item removed from cart successfully!');
                                    setTimeout(() => {
                                        setRemoveCartMessage('');
                                    }, 3000);
                                    dispatch(removeProduct(details.id))
                                }}
                                    className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] rounded-md w-[50%]'>Remove</button>
                            }
                            <button className='transition-transform duration-300 hover:scale-110'
                                onClick={() => {
                                    handleIconChange(details.id)
                                }}
                            >
                                {isProductInWishList(details.id)
                                    ? <FaHeart onClick={() => {
                                        setRemoveCartMessage('Item removed from wishlist successfully!');
                                        setTimeout(() => {
                                            setRemoveCartMessage('');
                                        }, 3000);
                                        dispatch(removeFromWishList({
                                            id: details.id,
                                            title: details.title,
                                            price: details.price,
                                            image: details.image,
                                            quantity: 1
                                        }))
                                    }}
                                        className='text-[#004D40] transition-transform duration-300 hover:scale-110 cursor-pointer text-[27px] justify-center flex items-center' />
                                    : <FaRegHeart onClick={() => {
                                        setAddCartMessage('Item added to wishlist successfully!');
                                        setTimeout(() => {
                                            setAddCartMessage('');
                                        }, 3000);
                                        dispatch(addToWishList({
                                            id: details.id,
                                            title: details.title,
                                            price: details.price,
                                            image: details.image,
                                            quantity: 1
                                        }));
                                    }}
                                        className='text-[#004D40] transition-transform duration-300 hover:scale-110 cursor-pointer text-[27px] justify-center flex items-center' />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
}

export default ProductDetails