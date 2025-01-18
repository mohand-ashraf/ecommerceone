import React from 'react'
import Banner from './Banner'
import Gategories from './Gategories'
import CategoriesPage from './CategoriesSection'
import Sales from './Sales'

const Home = () => {

    return (
        <div>
            <Banner />
            <Gategories />
            <Sales />
            <CategoriesPage />
        </div>
    )
}

export default Home