import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../public/data/sliderimages.js";
import "../assets/HeroSlider.css";
import "../assets/AnimateClick.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import bg_img from './images/coffeshopinterior.jpg';

function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(data[0]);
  const [previousImage, setPreviousImage] = useState(data[data.length-1]);
  const [nextImage, setNextImage] = useState(data[1]);
  const [wobble, setWobble] = useState(0);
  const [bussyfade, setBussyfade] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
    const currentIndex = data.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % data.length;
    const previousIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;

    setCurrentImage(data[nextIndex]);
    setPreviousImage(data[previousIndex]);
    setNextImage(data[(nextIndex + 1) % data.length]);
    setWobble(1);
    setBussyfade(1);
  }, 15000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  function handlePrevious() {
    setCurrentImage(current => {
      const currentIndex = data.indexOf(current);
      const previousIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
      const previousPreviousIndex = previousIndex === 0 ? data.length - 1 : previousIndex - 1;
      setPreviousImage(data[previousPreviousIndex]);
      setNextImage(current);
      setWobble(1);
      setBussyfade(1);
      return data[previousIndex];
    });
  }
  function handleNext() {
    setCurrentImage(current => {
      const currentIndex = data.indexOf(current);
      const nextIndex = (currentIndex + 1) % data.length;
      const nextNextIndex = (nextIndex + 1) % data.length;
      setPreviousImage(current);
      setNextImage(data[nextNextIndex]);
      setWobble(1);
      setBussyfade(1);
      return data[nextIndex];
    });
  }
  function onAnimationEnds() {
    setBussyfade(0);
    setWobble(0);
  }
  return(
    <div
    className="hero-container cover-background flex-center"
    style={{ backgroundImage: `url(${bg_img})` }}
  >
    {data && data.length > 0 ? (
      <div className="hero-wrapper flex-center"
      >
        
        <div
          className="hero-texts target-animation-bussyfade"
          bussyfade={bussyfade}
        >
          <div className="hero-background-div"></div>
          <h2 className="hero-title">
            {currentImage.header_text}
          </h2>
          <p className="hero-sub-title">
            {currentImage.p_text}
          </p>
          {currentImage.button_text && (
            <button
              className="hero-button target-animation-wobble"
              wobble={wobble}
              onClick={() => setWobble(1)}
              onAnimationEnd={onAnimationEnds}
              type="button"
            >
              <Link to={currentImage.link}>{currentImage.button_text}</Link>
            </button>
          )}
        </div>
        <div className="sliding-hero-images-container flex-center
        target-animation-bussyfade"
        bussyfade={bussyfade}
        >
          <div>
            
            <button
              style={{ backgroundImage: `url(${previousImage.background_img})` }}
              className="left-arrow flex-center cover-background target-animation"
              onClick={handlePrevious}
              onAnimationEnd={onAnimationEnds}
            >
              <BsArrowLeft className="custom-icon-arrow" />
            </button>
          </div>
          <div className="hero-image-containerx cover-background"
          style={{ backgroundImage: `url(${currentImage.background_img})` }}>
            
            <h2>
              <Link to={currentImage.link}>
              {currentImage.button_text}
              </Link>
            </h2>
            
          </div>
          <div>
            <button
              style={{ backgroundImage: `url(${nextImage.background_img})` }}
              className="right-arrow flex-center cover-background target-animation"
              onClick={handleNext}
              onAnimationEnd={onAnimationEnds}
            >
              <BsArrowRight className="custom-icon-arrow" />
            </button>
          </div>
        </div>
      </div>
      
    ) : (
      <div className="slider-wrapper-default">
        <h3>No data found!</h3>
        <p>{data[0].p_text}</p>
        <button>
          <Link to={data[0].link}>Opps</Link>
        </button>
      </div>
    )}
  </div>
  );

}

export default HeroSlider;