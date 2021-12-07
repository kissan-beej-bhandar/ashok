import React from 'react';
import Header from './Components/Common/Header';
import Product from './Components/Product';
import Front from './Components/Front';

const Prods = () => {
    return (
        <>
            <Header/>
            <Front />
            <Product/>
            <div style={{height:"10rem"}}></div>
        </>
    )
}

export default Prods;
