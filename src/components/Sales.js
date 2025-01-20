import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../api/productsApi';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { addToCart, addToWishList, removeFromWishList, removeProduct } from './redux/appSlice';
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';

const Sales = () => {

    const dispatch = useDispatch();
    const { products, wishList, cart } = useSelector((state) => state.category);
    const [cartAddMessage, setAddCartMessage] = useState('');
    const [cartRemoveMessage, setRemoveCartMessage] = useState('');
    const [randomData, setRandomData] = useState([]);
    const theme = useSelector((state) => state.category.theme);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const isProductInWishList = (productId) => {
        return wishList.some(product => product.id === productId);
    }
    const isProductIncart = (productId) => {
        return cart.some(product => product.id === productId);
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));

        setAddCartMessage('Item added to cart successfully!');
        setTimeout(() => {
            setAddCartMessage('');
        }, 3000);
    };

    const handleIconChange = (productId) => {
        if (isProductInWishList(productId)) {
            dispatch(removeFromWishList({ id: productId }));
        } else {
            dispatch(addToWishList({ id: productId, quantity: 1 }));
        }
    };

    useEffect(() => {
        if (products.length > 0) {
            const getRandomItems = (array, count) => {
                const shuffled = [...array].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, Math.min(count, array.length));
            };
            setRandomData(getRandomItems(products, 30));
        }
    }, [products]);

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall'>
                <div className='sales container xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 py-10 mx-auto'>
                    <span className='font-Playwrite text-[25px] border-b-2 border-[#004D40] dark:border-color1 dark:text-color1 font-semibold text-[#004D40]'>Best Seller</span>
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
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={5}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            1536: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            860: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            667: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper mt-7"
                    >
                        <div className='justify-center flex flex-wrap items-center'>
                            {randomData.map((product) => {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <div className='shadow-md transition-all duration-300 hover:shadow-2xl border-2 border-[#E5EDEC] dark:border-bghead xs:w-[305px] mdl:w-[320px] sm:w-[320px] sml:w-[320px] md:w-[320px] lg:w-[320px] xl:w-[320px] lxl:w-[320px] lgl:w-[320px] w-[320px] h-[535px] mx-[13px]'>
                                            <Link to={`/product/${product.id}`} className='flex bg-white ml-2 w-[300px] h-[360px] justify-center items-center mt-2 cursor-pointer'>
                                                <img src={`/${product.image}`} alt={product.title} className='object-contain max-w-[270px] max-h-[350px]' />
                                            </Link>
                                            <div>
                                                <Link to={`/product/${product.id}`}>
                                                    <p className='text-[#4F5866] dark:text-[#B8BABE] px-2 text-[18px] mt-4 font-medium truncate cursor-pointer'>{product.title}</p>
                                                </Link>
                                                <p className='text-[#374a68] dark:text-[#B8BABE] px-2 text-[15px] mt-3 font-medium'>EGP {product.price}</p>
                                                <div className='gap-4 mt-7 flex items-center mx-4'>
                                                    {!isProductIncart(product.id) ?
                                                        <button
                                                            onClick={() => handleAddToCart(product)}
                                                            className='text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] hover:bg-[#0e443f] bg-[#005E55] rounded-md w-[100%]'>
                                                            Add to cart
                                                        </button>
                                                        :
                                                        <button onClick={() => {
                                                            setRemoveCartMessage('Item removed from cart successfully!');
                                                            setTimeout(() => {
                                                                setRemoveCartMessage('');
                                                            }, 3000);
                                                            dispatch(removeProduct(product.id))
                                                        }}
                                                            className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] rounded-md w-[100%]'>Remove</button>
                                                    }
                                                    <button className='transition-transform duration-300 hover:scale-110'
                                                        onClick={() => {
                                                            handleIconChange(product.id)
                                                        }}
                                                    >
                                                        {isProductInWishList(product.id)
                                                            ? <FaHeart onClick={() => {
                                                                setRemoveCartMessage('Item removed from wishlist successfully!');
                                                                setTimeout(() => {
                                                                    setRemoveCartMessage('');
                                                                }, 3000);
                                                                dispatch(removeFromWishList({
                                                                    id: product.id,
                                                                    title: product.title,
                                                                    price: product.price,
                                                                    image: product.image,
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
                                                                    id: product.id,
                                                                    title: product.title,
                                                                    price: product.price,
                                                                    image: product.image,
                                                                    quantity: 1
                                                                }));
                                                            }}
                                                                className='text-[#004D40] transition-transform duration-300 hover:scale-110 cursor-pointer text-[27px] justify-center flex items-center' />
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Sales