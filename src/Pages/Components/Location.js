import React from 'react'
import "../css/Location.css";

const Location = () => {
    return (
        <>
            <div className="location-div">
                <h4 className="location-heading">हमारा पता</h4>
                
                <div className="location-frame">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28010.229353955667!2d77.21412773838199!3d28.651373574246072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a88dcc559%3A0x24fa43c081dbe51!2sChandni%20Chowk%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1638027694811!5m2!1sen!2sin" title="location-frame-1" className="iframe_location"></iframe>
                </div>
            </div>  
        </>
    );
}

export default Location;







