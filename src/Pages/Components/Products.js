import React from 'react';
import "../css/Products.css";

const Products = () => {
    return (
        <>
            <div className="product-main-wrapper">
                <h2 className="product-heading">
                    खाद अवं बीज भंडार
                </h2>
                <div className="product-info-card">
                    <div className="product-card-img-part">
                        <img src="./media/img2.jpg" alt="kissan_beej_bhandar" className="main_image" />
                    </div>
                    <div className="product-card-text-part">
                        <span className="product-para">
                        हमारे यहां कृषि से सम्बंधित सभी सामान मिलता है। जैसे की फसलो के बीज, 
                        सब्जियां के बीज, कीटनाशक दवाइयां, खाद (डीएपी, यूरिया आदि)। हमारे यहाँ
                        उच्च गुणवत्ता के फसलो के बीज मिलते हैं तथा जमीन की उपजाऊ शक्ति भडाने
                        हेतु डीएपी, यूरिया, ज़ाइम, पोटाश आदि मिलते हैं। <br/>
                        फसलों में होने वाले सभी रोगो की दवा मिलती है तथा उनको छिडकने हेतु
                        Spray Machine भी उपलब्ध करवाई जाती है।
                        </span>
                    </div>
                    
                    <div style={{clear: `both`}}></div>
                </div>
            </div>
        </>
    )
}

export default Products
