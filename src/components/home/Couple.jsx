import React from "react";
import { kalay, koko } from "../../assets";

function Couple() {
  return (
    <section id="couple">
      <div className="couple-container container">
        <div className="couple-title">
          <div className="vector-img"></div>
          <h1>Happy Couple</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 border-right">
            <div className="couple-wrap">
              <div className="couple-img">
                <img src={koko} alt="Koko" />
              </div>
              <div className="couple-content">
                <h3>Ko KO</h3>
                <p>
                 
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="couple-wrap">
              <div className="couple-img">
                <img src={kalay} alt="kalay" />
              </div>
              <div className="couple-content">
                <h3>Ka Lay Lay</h3>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
