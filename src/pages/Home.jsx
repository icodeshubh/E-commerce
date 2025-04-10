import React from 'react'

import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import ProductItems from '../components/ProductItems'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <CategoryMenu/>
    <ProductItems />
    <Cart />
    <Footer />
    
    </>
  )
}

export default Home