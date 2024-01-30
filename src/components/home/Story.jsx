import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const story1 =''
const story2 =''
const story3 =''
const story4 =''

function Story() {
  return (
    <section id="story">
      <div className="story-container container">
        <div className="story-title">
          <div className="vector-img"></div>
          {/* <h1>Our Love Story</h1> */}
        </div>
        <div className="story-wrap">
           <div className="row">
            {/* <div className="col-lg-6 col-md-6 pr">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src="images/Story-img-1.jpg"
                  alt="story1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text left-align-text">
                <h3>First time we met</h3>
                <p className="date"></p>
                <p className="story">{story1.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story1">Read More</Link>
              </div>
            </div> */}

           

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
