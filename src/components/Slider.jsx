import React, { Fragment, useState, useEffect } from "react";
import data from "../../public/data/sliderimages.js";
import "../assets/Slider.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function HomepageSlider() {
  const [currentImage, setCurrentImage] = useState(data[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (data.indexOf(currentImage) + 1) % data.length;
      setCurrentImage(data[nextIndex]);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  function handlePrevious() {
    const currentIndex = data.indexOf(currentImage);
    const previousIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentImage(data[previousIndex]);
  }

  function handleNext() {
    const currentIndex = data.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentImage(data[nextIndex]);
  }

  return (
    <Fragment>
      <div className="slider-container cover-background" 
        style={{ backgroundImage: `url("${currentImage.background_img}")` }}>
        {data && data.length > 0 ? (
          <div className="slider-wrapper flex-center" >
            
              <button className="arrow-button-left-arrow flex-center" onClick={handlePrevious}>
                <SlArrowLeft className="custom-icon"/>
              </button>
            
            <div className="slider-item">
              <div className="hero-background-div"></div>
              <h2 className="slide-in-left">
                {currentImage.header_text}
              </h2>
              <p className="slide-in-left">{currentImage.p_text}</p>
              { currentImage.button_text != "" ?
              <button className="slider-item-button"><a href={currentImage.link}>{currentImage.button_text}</a></button>
              : ""
              }
              
            </div>
            
              <button className="arrow-button-right-arrow flex-center" onClick={handleNext}>
                <SlArrowRight className="custom-icon"/>
              </button>
            
          </div>
        ) : (
          <div className="slider-wrapper-default">
            <h3>No data found!</h3>
            <p>{datum.p_text}</p>
            <button><a href={datum.link}>Order Now</a></button>
          </div>
        )}
      </div>
      <div className="non-slider-container" id="non-slider-container">
        
          {data.map((datum, index) => (
              <div className="card flex-center cover-background" key={index} 
              style={{backgroundImage: `url("${datum.bg_card_images}")`, 
              display: index === 0 ? "none" : "flex" 
              }}>
                <div className="card-description flex-center">
                <h2>{datum.header_text}</h2>
                <button className="card-button">
                  <a href={datum.link}>
                    {datum.button_text}
                  </a></button>
                </div>
                
              </div> 
          ))}
  
        
      </div>
    </Fragment>
  );
}

export default HomepageSlider;
