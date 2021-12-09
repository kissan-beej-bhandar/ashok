import React from 'react';
import "../css/Gallery.css";

const Gallery = () => {
    function gallery(x){
        document.getElementById("gallery").style.display = "block";
        document.getElementById("gallery-img").src = "media/"+x;
    }
    return (
        <>
            <div className="main-gallery">
                <h2 className="gallery-heading">
                    गैलरी
                </h2>
                <section className="section-gallery">
                    <div className="selction-gallery-1">
                        <div className="left-gallery-top">
                            <div className="left-top-left-photo">
                                <img src="https://kissan-beej-bhandar.github.io/ashok/media/img2.jpg" onClick={()=>gallery('img2.jpg')} alt="gallery-img" className="gallery-photo-1" />
                            </div>
                            <div className="left-top-right-photo">
                                <img src="https://kissan-beej-bhandar.github.io/ashok/media/img1.jpg" onClick={()=>gallery('img1.jpg')} alt="gallery-img" className="gallery-photo-1" />
                            </div>
                        </div>
                        <div className="left-gallery-bottom">
                            <div className="left-bottom-photo">
                                <img src="https://kissan-beej-bhandar.github.io/ashok/media/w2.jpg" onClick={()=>gallery('w2.jpg')}  alt="gallery-img" className="gallery-photo-1" />
                            </div>
                        </div>
                    </div>
                    <div className="selction-gallery-2">
                        <div className="left-gallery-bottom margin-1">
                            <div className="left-bottom-photo">
                                <img src="https://kissan-beej-bhandar.github.io/ashok/media/w1.jpg" onClick={()=>gallery('w1.jpg')} alt="gallery-img" className="gallery-photo-1" />
                            </div>
                        </div>
                        {/* class="img-collection " */}
                        <div className="left-gallery-top">
                            <div className="left-top-left-photo">
                                <img src="https://kissan-beej-bhandar.github.io/ashok/media/img4.jpg" onClick={()=>gallery('img4.jpg')} alt="gallery-img" className="gallery-photo-1" />
                            </div>
                            <div className="left-top-right-photo d2">
                                <img src="https://kissan-beej-bhandar.github.io/ashok/media/w4.jpg" onClick={()=>gallery('w4.jpg')} alt="gallery-img" className="gallery-photo-1" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>    
            <div className="black-background" id="gallery">
                <div className="ImageShower">
                    <span className="cut-gallery" onClick={()=>document.getElementById("gallery").style.display = 'none'}>
                        <i className="fa fa-times" />
                    </span>
                    <div className="main-ImageShower">
                        <img src="media/img2.jpg" id="gallery-img" alt="kissan-beej-bhandar" className="gal-img"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
