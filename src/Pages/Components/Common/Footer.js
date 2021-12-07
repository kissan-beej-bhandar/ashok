import React from 'react';
import { useHistory } from 'react-router-dom';
import './../../css/Footer.css';

const Footer = () => {
    const history = useHistory();
    return (
        <>
            <footer className="footer">
                <div className="center-footer-logo">
                    <img src="media/logo.png" alt="logo" className="footer-logo" />
                </div>
                <div className="main-footer-body">
                    <div className="footer-part-1">
                        <h6 className="ownername-footer">
                            श्री अशोक कुमार (मालिक) <br/> लिसाना, रेवाड़ी
                        </h6>
                        <div className="owner-photo-div">
                            <img src="https://image.shutterstock.com/image-vector/silhouette-people-unknown-male-person-260nw-1372192277.jpg" className="owner-image" alt="owner" />
                        </div>
                    </div>
                    <div className="footer-part-1 footer-part-2">
                        <h5 className="more-about-heading">
                            अधिक जाने:
                        </h5>
                        <h6 className="about-shop-footer">
                            किसान बीज भंडार, बीकानेर<br/>
                            मेन रोड बीकानेर, नजदिकि सर्व हरियाणा ग्रामीण बैंक,<br/>
                            <span className="red">अशोक कुमार :</span> 9896158756 <br/>
                            <span className="red">दुकान खोलने का समय :</span> सुबह 8:30 बजे से लेकर शाम 5 बजे तक।
                        </h6>
                    </div>
                    <div className="footer-part-1 footer-part-3">
                        <h5 className="more-about-heading">
                            Links
                        </h5>
                        <h6 className="about-shop-footer">
                            <span className="footer-links-1" onClick={() => history.push("/Home")}>Home</span> 
                            <span className="footer-links-1" onClick={() => document.getElementById("contact-div").style.display = "block"}>Contact</span> 
                            <span className="footer-links-1" onClick={() => document.getElementById("Payment-div").style.display = "block"}>Pay</span> 
                            <span className="footer-links-1" onClick={() => history.push("/Products")}>Products</span> 
                            <a href="https://goo.gl/maps/FGA4Mz2e8qS4a6MX8" style={{textDecoration : 'none'}} target="_Location"><span className="footer-links-1">Location</span></a> <br/>

                        </h6>
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
            </footer>
            <div className="last">
                &#169; Kissan Beej Bhandar - 2021
            </div>
        </>
    )
}

export default Footer;
