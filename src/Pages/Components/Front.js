import React from 'react';
import "./../css/Front.css";

const Front = () => {

    function background_changer(){
        var x = Math.floor(Math.random() * 4);
        let background="";
        // console.log(x);
        if(x===1){
            background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://modernfarmingindiahome.files.wordpress.com/2019/01/cropped-modern-farming-in-india.png")`;
        }else if(x===2){
            background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://fasal.haryana.gov.in/assets/img/fasal4.jpg")`;
        }else{
            background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://www.agliteracy.org/slide/images/wheat_field.jpg")`;
        }
        document.getElementById("FrontFace").style.background = background;
        document.getElementById("FrontFace").style.backgroundSize = "cover"; 
    }
    setTimeout(background_changer, 100);
    return (
        <>
            <div className="front-face" id="FrontFace">
                <h1 className="front-heading">
                    किसान बीज भंडार, बीकानेर
                </h1>
                <h6 className="sub-front-font">
                    मेन रोड बीकानेर, नजदिकि सर्व हरियाणा ग्रामीण बैंक,
                </h6>
                <h6 className="ownername-front-face">
                    अशोक कुमार : 9896158756
                </h6>
                <a href="https://goo.gl/maps/FGA4Mz2e8qS4a6MX8" style={{textDecoration : 'none'}} target="_Location">
                    <button className="btn btn-front">Track us</button>
                </a>
            </div>
        </>
    )
}

export default Front;
