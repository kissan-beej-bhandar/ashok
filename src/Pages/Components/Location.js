import React from 'react'
import "../css/Location.css";

const Location = () => {
    return (
        <>
            <div className="location-div">
                <h4 className="location-heading">हमारा पता</h4>
                
                <div className="location-frame">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7028.869859056875!2d76.60843962522219!3d28.254825980273345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d5b11a5e92a07%3A0x447d1874f4396b05!2sBikaner%2C%20Haryana!5e0!3m2!1sen!2sin!4v1638902645238!5m2!1sen!2sin" title="location-frame-1" className="iframe_location"></iframe>
                </div>
            </div>  
        </>
    );
}

export default Location;







