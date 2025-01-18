import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearProductsWishList, removeProduct, removeProductWishList } from './redux/appSlice';

const WishList = () => {

    const { wishList, cart } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const [cartAddMessage, setAddCartMessage] = useState('');
    const [cartRemoveMessage, setRemoveCartMessage] = useState('');
    const theme = useSelector((state) => state.category.theme);

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

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='bg-white dark:bg-bgall'>
                <div className='container py-10 mx-auto xs:px-3 sm:px-3 sml:px-3 md:px-3 mdl:px-3 lg:px-3 xl:px-3 lxl:px-0 lgl:px-3 xs:pt-[210px] sm:pt-[210px] sml:pt-[210px] md:pt-[160px] mdl:pt-[160px] lg:pt-[160px] xl:pt-[160px] lxl:pt-[160px] lgl:pt-[160px] pt-[170px]'>
                    {wishList.length > 0 ? <>
                        <div className='flex justify-center items-center'>
                            <button onClick={() => {
                                setRemoveCartMessage('Removed all items from wishlist successfully!');
                                setTimeout(() => {
                                    setRemoveCartMessage('');
                                }, 3000);
                                dispatch(clearProductsWishList(wishList.id))
                            }}
                                className='hover:bg-[#4e403b] bg-[#604E48] text-[#F2F6F5] mx-auto transition-all duration-300 text-[20px] font-medium py-[10px] rounded-md w-[500px]'>Remove all products</button>
                        </div>
                        <div className='gap-10 xl:gap-10 lxl:gap-10 lgl:gap-2 md:gap-10 justify-center flex flex-wrap items-center mt-7'>
                            {wishList.map((product) => (
                                <div key={product.id} className='border-blue-200 dark:border-bghead lg:mx-[13px] mdl:mx-0 lgl:mb-[30px] xl:mb-0 lxl:mb-0 xl:mx-[13px] lxl:mx-[13px] shadow-md transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(173,216,230,0.5)] border-2 rounded-2xl w-[320px] h-[580px] lgl:mx-0 mx-[13px]'>
                                    <Link to={`/product/${product.id}`} className='bg-white ml-2 rounded-2xl flex w-[300px] h-[360px] justify-center items-center mt-2 cursor-pointer'>
                                        <img src={`/${product.image}`} alt={product.title} className='object-contain max-w-[270px] max-h-[350px]' />
                                    </Link>
                                    <div>
                                        <Link to={`/product/${product.id}`}>
                                            <p className='text-[#4F5866] dark:text-[#B8BABE] px-2 text-[18px] mt-4 font-medium truncate cursor-pointer'>{product.title}</p>
                                        </Link>
                                        <p className='text-[#374a68] dark:text-[#B8BABE] px-2 text-[17px] mt-3 text-center font-medium'>EGP {product.quantity * product.price}</p>
                                    </div>
                                    <div className='flex flex-col items-center mx-4'>
                                        {!isProductIncart(product.id) ?
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className='text-[#F2F6F5] mt-4 transition-all duration-300 text-[17px] font-medium py-[8px] hover:bg-[#0e443f] bg-[#005E55] rounded-md w-[100%]'>Add to cart</button>
                                            :
                                            <button onClick={() => {
                                                setRemoveCartMessage('Item removed from cart successfully!');
                                                setTimeout(() => {
                                                    setRemoveCartMessage('');
                                                }, 3000);
                                                dispatch(removeProduct(product.id))
                                            }}
                                                className='hover:bg-[#4e403b] mt-4 bg-[#604E48] text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] rounded-md w-[100%]'>Remove from cart</button>
                                        }
                                        <button onClick={() => {
                                            setRemoveCartMessage('Item removed from wishlist successfully!');
                                            setTimeout(() => {
                                                setRemoveCartMessage('');
                                            }, 3000);
                                            dispatch(removeProductWishList(product.id))
                                        }}
                                            className='hover:bg-[#4e403b] mt-2 bg-[#604E48] text-[#F2F6F5] transition-all duration-300 text-[17px] font-medium py-[8px] rounded-md w-[100%]'>Remove from wishlist</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </> : <>
                        <div className='flex justify-center items-center h-[500px]'>
                            <h1 className='font-Playwrite text-[70px] text-[#005E55] dark:text-color1 font-semibold opacity-50'>Wishlist Empty</h1>
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

export default WishList