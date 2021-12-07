import React from 'react';
import Header from './Components/Common/Header';
import Front from './Components/Front';
import Products from './Components/Products';
import Gallery from './Components/Gallery';
import Location from './Components/Location';
import Payment from './Components/Payment';
import Footer from './Components/Common/Footer';
import Product from './Components/Product';

const Home = () => {
    return (
        <>
          <Header /> 
          <Front /> 
          <Products />
          <Product />
          <Gallery />
          <Location />
          <Payment />
          <Footer />
        </>
    )
}
export default Home;