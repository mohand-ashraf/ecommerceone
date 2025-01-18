import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../api/productsApi';
import { Link } from 'react-router-dom';
import { addToCart, addToWishList, removeFromWishList, removeProduct } from './redux/appSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


const Watches = () => {

    const dispatch = useDispatch();
    const { products, wishList, cart } = useSelector((state) => state.category);
    const [cartAddMessage, setAddCartMessage] = useState('');
    const [cartRemoveMessage, setRemoveCartMessage] = useState('');
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


    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall'>
                <div className='container xs:px-3 py-10 sm:px-3 sml:px-3 md:px-3 mdl:px-3 xl:px-3 lg:px-3 lxl:px-0 lgl:px-3 mx-auto xs:pt-[210px] sm:pt-[210px] sml:pt-[210px] md:pt-[160px] mdl:pt-[160px] lg:pt-[160px] xl:pt-[160px] lxl:pt-[160px] lgl:pt-[160px] pt-[160px]'>
                    <span className='font-Playwrite text-[25px] border-b-2 border-[#004D40] dark:border-color1 dark:text-color1 font-semibold text-[#004D40]'>Watches</span>
                    <div className='gap-10 xl:gap-10 lxl:gap-10 lgl:gap-2 md:gap-10 justify-center flex flex-wrap items-center mt-7'>
                        {products.map((watches) => (
                            watches.type === 'watches' ? (
                                <>
                                    <div key={watches.id} className='border-blue-200 dark:border-bghead lg:mx-[13px] mdl:mx-0 lgl:mb-[30px] xl:mb-0 lxl:mb-0 xl:mx-[13px] lxl:mx-[13px] shadow-md transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(173,216,230,0.5)] border-2 rounded-2xl w-[320px] h-[550px] lgl:mx-0 mx-[13px]'>
                                        <Link to={`/product/${watches.id}`} className='bg-white ml-2 rounded-2xl flex w-[300px] h-[360px] justify-center items-center mt-2 cursor-pointer'>
                                            <img src={`/${watches.image}`} alt={watches.title} className='object-contain max-w-[270px] max-h-[350px]' />
                                        </Link>
                                        <div>
                                            <Link to={`/product/${watches.id}`}>
                                                <p className='text-[#4F5866] dark:text-[#B8BABE] px-2 text-[18px] mt-4 font-medium truncate cursor-pointer'>{watches.title}</p>
                                            </Link>
                                            <p className='text-[#374a68] dark:text-[#B8BABE] px-2 text-[15px] mt-3 font-medium'>EGP {watches.price}</p>
                                            <div className='gap-4 mt-7 flex items-center mx-4'>
                                                {!isProductIncart(watches.id) ?
                                                    <button
                                                        onClick={() => handleAddToCart(watches)}
                                                        className='text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] hover:bg-[#0e443f] bg-[#005E55] rounded-md w-[100%]'>
                                                        Add to cart
                                                    </button>
                                                    :
                                                    <button onClick={() => {
                                                        setRemoveCartMessage('Item removed from cart successfully!');
                                                        setTimeout(() => {
                                                            setRemoveCartMessage('');
                                                        }, 3000);
                                                        dispatch(removeProduct(watches.id))
                                                    }}
                                                        className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] rounded-md w-[100%]'>Remove</button>
                                                }
                                                <button className='transition-transform duration-300 hover:scale-110'
                                                    onClick={() => {
                                                        handleIconChange(watches.id)
                                                    }}
                                                >
                                                    {isProductInWishList(watches.id)
                                                        ? <FaHeart onClick={() => {
                                                            setRemoveCartMessage('Item removed from wishlist successfully!');
                                                            setTimeout(() => {
                                                                setRemoveCartMessage('');
                                                            }, 3000);
                                                            dispatch(removeFromWishList({
                                                                id: watches.id,
                                                                title: watches.title,
                                                                price: watches.price,
                                                                image: watches.image,
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
                                                                id: watches.id,
                                                                title: watches.title,
                                                                price: watches.price,
                                                                image: watches.image,
                                                                quantity: 1
                                                            }));
                                                        }}
                                                            className='text-[#004D40] transition-transform duration-300 hover:scale-110 cursor-pointer text-[27px] justify-center flex items-center' />
                                                    }
                                                </button>
                                            </div>
                                        </div>
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
                                    </div>
                                </>
                            ) : (<> </>)
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watches