import React from "react";
import { GalleryImage1, GalleryImage2, GalleryImage3 } from "../../assets";

function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-container container">
        <div className="gallery-title">
          <div className="vector-img"></div>
          <h1>Our Gallery</h1>
        </div>

        <div className="gallery-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={GalleryImage1}
                  alt="img1"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={GalleryImage2}
                  alt="img2"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={GalleryImage3}
                  alt="img3"
                />
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
