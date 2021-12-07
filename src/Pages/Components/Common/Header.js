import React from 'react';
import { useHistory } from 'react-router-dom';
import './../../css/Header.css';

const Header = () => {
    const history = useHistory();
    function nav_show(){
        document.getElementById("showbar").style.display = "none";
        document.getElementById("cutbar").style.display = "block";
        document.getElementById("nav").style.display = "block";
    }
    function nav_hide(){
        document.getElementById("showbar").style.display = "block";
        document.getElementById("cutbar").style.display = "none";
        document.getElementById("nav").style.display = "none";
    }
    return (
        <>
            <header className="header" id="Top">
                <div className="for-logo">
                    <img src="media/logo.png" alt="kissan-logo" className="logo" />
                </div>
                <div className="btns-div" id="header-btn">
                    <button className="btn btn-top" onClick={()=>history.push("/Home")}>Home</button>
                    <button className="btn btn-top"  onClick={()=>history.push("/Products")}>Products</button>
                    <button className="btn btn-top"  onClick={() => document.getElementById("contact-div").style.display = "block"}>Contact</button>
                    <button className="btn btn-top"  onClick={() => document.getElementById("Payment-div").style.display = "block"}>Pay Balance</button>
                    <a href="https://goo.gl/maps/FGA4Mz2e8qS4a6MX8" style={{textDecoration : 'none'}} target="_Location"><button className="btn btn-top">Track us</button></a>

                </div>
                <span className="bars-span" onClick={()=>nav_show()} id="showbar">
                    <i className="fas fa-bars"></i>
                </span>
                <span className="bars-span" onClick={()=>nav_hide()} id="cutbar">
                    <i className="fas fa-times"></i>
                </span>
                <div style={{clear:"both"}}></div>
            </header>
            <nav className="nav" id="nav">
                <span className="nav-items" onClick={()=>history.push("/Home")}>Home</span>
                <span className="nav-items"  onClick={()=>history.push("/Products")}>Products</span>
                <span className="nav-items"  onClick={() =>{nav_hide(); document.getElementById("contact-div").style.display = "block";}}>Contact</span>
                <span className="nav-items"  onClick={() =>{nav_hide(); document.getElementById("Payment-div").style.display = "block";}}>Pay Balance</span>
                <a href="https://goo.gl/maps/FGA4Mz2e8qS4a6MX8" style={{textDecoration : 'none'}} target="_Location"><span className="nav-items nav-last">Track us</span></a>
            </nav>
            <div className="background-black" id="contact-div">
                <div className="dialog-box">
                    <span className="contact-cut-sign" onClick={() => document.getElementById("contact-div").style.display = "none"}>
                        <i className="fas fa-times"></i>
                    </span>
                    <div className="call-icon">
                    </div>
                    <h6 className="contactus-text">
                        आप हमारे नम्बर पर दिन के समय कभी भी कॉल कर सकते हैं।
                    </h6>
                    <h6 className="contact-number">
                        (+91) 9896158756
                    </h6>
                    <button className="btn btn-primary btn-call-us"  onClick={()=>window.location.assign("tel:9896158756")}>
                        Call us
                    </button>
                </div>
            </div>
            <div className="background-black" id="Payment-div">
                <div className="dialog-box">
                    <span className="contact-cut-sign" onClick={() => document.getElementById("Payment-div").style.display = "none"}>
                        <i className="fas fa-times"></i>
                    </span>
                    <div className="pay-icon">
                    </div>
                    <h6 className="payus-text">
                        हमारे यहाँ पे डिजिटल पेमेंट के सभी तरीके उपलब्ध है। आप किसी भी मोबाइल ऐप का इस्तमाल कर के भुगतन कर सकते हैं जैसे की PhonePe, Google Pay आदि। यहां आप अपने डेबिट कार्ड और क्रेडिट कार्ड से भी भुगतान कर सकते हैं।
                        <br/>आप अपने पिछले ऋणों का भुगतान करने के लिए PhonePe और Google Pay के माध्यम से इस नंबर पर (9896158756) कर सकते हैं।
                    </h6>
                    <h6 className="contact-number">
                        Pay Us On 9896158756
                    </h6>
                    <button className="btn btn-primary btn-call-us">
                        Pay Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;
