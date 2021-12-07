import React from 'react'
import "../css/Payment.css";

const Payment = () => {
    return (
        <>
            <div className="payment-div" id="Pay">
                <h4 className="payment-heading">डिजिटल पेमेंट</h4>

                <div className="payment-main">
                    <div className="payment-left">
                        <div className="pic_square">
                            <div className="pic_square_top">
                                <div className="pic-div-top-left">
                                    <img src="https://pbs.twimg.com/profile_images/1228394203421372416/4X3QZazb_400x400.jpg" alt="payment-modes" className="payment-pic" />
                                </div>
                                <div className="pic-div-top-right">
                                    <img src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.png" alt="payment-modes" className="payment-pic" />
                                </div>
                            </div>
                            <div className="pic_square_bottom">
                                <div className="pic-div-top-left">
                                    <img src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-cartoon-pos-machine-icon-download-image_1147318.jpg" alt="payment-modes" className="payment-pic" />
                                </div>
                                <div className="pic-div-top-right">
                                    <img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/22337486/new_icon.png" alt="payment-modes" className="payment-pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-right">
                        <div className="text-payment">
                            हमारे यहाँ पे डिजिटल पेमेंट के सभी तरीके उपलब्ध है। आप किसी भी मोबाइल ऐप का इस्तमाल कर के भुगतन कर सकते हैं जैसे की PhonePe, Google Pay आदि। यहां आप अपने डेबिट कार्ड और क्रेडिट कार्ड से भी भुगतान कर सकते हैं।
                            <br/>
                            आप अपने पिछले ऋणों का भुगतान करने के लिए PhonePe और Google Pay के माध्यम से इस नंबर पर <span className="red">(9896158756)</span> कर सकते हैं।
                        </div>
                    </div>
                    <div style={{clear:'Both'}}></div>
                </div>
            </div>  
        </>
    )
}

export default Payment;







