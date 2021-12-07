import React from 'react';
import "../css/Product.css";

const Product = () => {
     
    return (
        <>
            <div className="product-main" id="Products">
                <h5 className="product-heading">
                    Range of Products
                </h5>
                <div className="main-in-products">
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="https://iffco.in/assets/images/dap-product.jpg" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            DAP
                        </h2>
                    </div>
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="https://iffco.in/assets/images/urea.jpg" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            Urea
                        </h2>
                    </div>
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="https://5.imimg.com/data5/IB/CO/FV/SELLER-25464873/super-potash-500x500.jpg" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            Super potash
                        </h2>
                    </div>
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="media/item4.jpg" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            Zyme : Plant Growth Granules
                        </h2>
                    </div>
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="https://5.imimg.com/data5/ANDROID/Default/2020/9/FV/TG/BG/88630990/product-jpeg-500x500.jpg" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            Pioneer Hybrid Seeds
                        </h2>
                    </div>
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="https://facilitycart.in/staging/img/p/9/7/0/970-home_default.jpg" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            Insecticides
                        </h2>
                    </div>
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="https://img2.exportersindia.com/product_images/bc-full/2018/10/5929346/pestiside-bags-1539068289-4372905.png" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            Pesticides
                        </h2>
                    </div>
                    <div className="product-card">
                        <div className="card-photo-div">
                            <img src="https://5.imimg.com/data5/JG/HL/MG/SELLER-4389025/2-in-1-500x500.jpg" alt="Product-img" className="product-img" />
                        </div>
                        <h2 className="product-names text-truncate">
                            Herbicides and Spray Machines
                        </h2>
                    </div>

                </div>
            </div>   
        </>
    )
}

export default Product
