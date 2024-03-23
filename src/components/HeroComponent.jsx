import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../public/data/sliderimages.js";
import "../assets/HeroComponents.css"

function HeroComponent() {
  return(

    <Fragment>
      <div className="hero-components-container">
      {data.map((datum, index) => (
        <div
          className="card flex-center cover-background"
          key={index}
          style={{
            backgroundImage: `url('${datum.bg_card_images}')`,
            display: index === 0 ? "none" : "flex",
          }}
        > 
          <div className="card-description flex-center">
            <h2>{datum.header_text}</h2>
            <button className="card-button flex-center">
              <Link to={datum.link}>{datum.button_text}</Link>
            </button>
          </div>
        </div>
      ))}
      </div>
    </Fragment>
  );
}


export default HeroComponent;