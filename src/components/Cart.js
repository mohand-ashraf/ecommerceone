import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishList, clearProducts, decrement, increment, removeFromWishList, removeProduct } from './redux/appSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Cart = () => {

    const dispatch = useDispatch();
    const { cart, wishList } = useSelector((state) => state.category);
    const [cartAddMessage, setAddCartMessage] = useState('');
    const [cartRemoveMessage, setRemoveCartMessage] = useState('');
    const theme = useSelector((state) => state.category.theme);

    const isProductInWishList = (productId) => {
        return wishList.some(product => product.id === productId);
    }

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
                <div className='container py-10 sml:px-3 sm:px-3 xs:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 mx-auto xs:pt-[220px] sm:pt-[220px] sml:pt-[220px] md:pt-[170px] mdl:pt-[170px] lg:pt-[170px] xl:pt-[170px] lxl:pt-[170px] lgl:pt-[170px] pt-[170px]'>
                    {cart.length > 0 ? <>
                        <div className='flex justify-center items-center'>
                            <button onClick={() => {
                                setRemoveCartMessage('Removed all items from cart successfully!');
                                setTimeout(() => {
                                    setRemoveCartMessage('');
                                }, 3000);
                                dispatch(clearProducts(cart.id))
                            }}
                                className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] mx-auto transition-all duration-300 text-[20px] font-medium py-[10px] rounded-md w-[500px]'>Remove all products</button>
                        </div>
                        <div className='gap-10 xl:gap-10 lxl:gap-10 lgl:gap-2 md:gap-10 justify-center flex flex-wrap items-center mt-7'>
                            {cart.map((product) => (
                                <div key={product.id} className='border-blue-200 dark:border-bghead lg:mx-[13px] mdl:mx-0 lgl:mb-[30px] xl:mb-0 lxl:mb-0 shadow-md transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(173,216,230,0.5)] border-2 rounded-2xl w-[320px] h-[580px] xl:mx-[13px] lxl:mx-[13px] lgl:mx-0 mx-[13px]'>
                                    <Link to={`/product/${product.id}`} className='bg-white ml-2 rounded-2xl flex w-[300px] h-[360px] justify-center items-center mt-2 cursor-pointer'>
                                        <img src={`/${product.image}`} alt={product.title} className='object-contain max-w-[270px] max-h-[350px]' />
                                    </Link>
                                    <div>
                                        <Link to={`/product/${product.id}`}>
                                            <p className='text-[#4F5866] dark:text-[#B8BABE] px-2 text-[18px] mt-4 font-medium truncate cursor-pointer'>{product.title}</p>
                                        </Link>
                                        <p className='text-[#374a68] dark:text-[#B8BABE] px-2 text-[17px] mt-3 text-center font-medium'>EGP {product.quantity * product.price}</p>
                                    </div>
                                    <div className='flex items-center justify-evenly mt-3 mb-3'>
                                        <button className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] rounded-full w-10 h-10 font-bold text-[20px]'
                                            onClick={() => { dispatch(decrement(product.id)) }}
                                        >-</button>
                                        <span className='text-[#604E48] font-bold text-[20px]'>{product.quantity}</span>
                                        <button className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] rounded-full w-10 h-10 font-semibold text-[20px]'
                                            onClick={() => { dispatch(increment(product.id)) }}
                                        >+</button>
                                    </div>
                                    <div className='gap-4 mt-4 flex items-center mx-4'>
                                        <button onClick={() => {
                                            setRemoveCartMessage('Item removed from cart successfully!');
                                            setTimeout(() => {
                                                setRemoveCartMessage('');
                                            }, 3000);
                                            dispatch(removeProduct(product.id))
                                        }}
                                            className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] rounded-md w-[100%]'>Remove</button>
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
                            ))}
                        </div>
                    </> : <>
                        <div className='flex justify-center items-center h-[500px]'>
                            <h1 className='font-Playwrite text-[70px] text-[#005E55] dark:text-color1 font-semibold opacity-50'>Cart Empty</h1>
                        </div>
                    </>}
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
            </div>
        </div>
    )
}

export default Cart