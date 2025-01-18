import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Home from './components/Home';
import HomeAppliances from './components/HomeAppliances';
import Games from './components/Games';
import Perfumes from './components/Perfumes';
import WishList from './components/WishList';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import Televisions from './components/Televisions';
import Watches from './components/Watches';
import Beauty from './components/Beauty';
import HeadSets from './components/HeadSets';
import MensFashion from './components/MensFashion';
import ContactUs from './components/ContactUs';
import Apple from './components/Apple';
import Samsung from './components/Samsung';
import Xiaomi from './components/Xiaomi';
import Hp from './components/Hp';
import Tefal from './components/Tefal';
import ProductDetails from './components/ProductDetails';
import ScrollToTop from './components/ScrollToTop'
import './App.css';

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const App = () => {

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/' element={<Layout />}>
                    <Route index path='/' element={<Home />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/wishlist' element={<WishList />}></Route>
                    <Route path='/mobiles' element={<Mobiles />}></Route>
                    <Route path='/laptops' element={<Laptops />}></Route>
                    <Route path='/appliances' element={<HomeAppliances />}></Route>
                    <Route path='/games' element={<Games />}></Route>
                    <Route path='/perfumes' element={<Perfumes />}></Route>
                    <Route path='/aboutus' element={<AboutUs />}></Route>
                    <Route path='/televisions' element={<Televisions />}></Route>
                    <Route path='/watches' element={<Watches />}></Route>
                    <Route path='/beauty' element={<Beauty />}></Route>
                    <Route path='/head' element={<HeadSets />}></Route>
                    <Route path='/fashion' element={<MensFashion />}></Route>
                    <Route path='/contactus' element={<ContactUs />}></Route>
                    <Route path='/apple' element={<Apple />}></Route>
                    <Route path='/samsung' element={<Samsung />}></Route>
                    <Route path='/xiaomi' element={<Xiaomi />}></Route>
                    <Route path='/hp' element={<Hp />}></Route>
                    <Route path='/tefal' element={<Tefal />}></Route>
                    <Route path='/product/:id' element={<ProductDetails />}></Route>
                </Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/signin' element={<SignIn />}></Route>
            </Route>
        )
    )

    return (
        <div >
            <RouterProvider router={router} />
        </div>
    )
}

export default App