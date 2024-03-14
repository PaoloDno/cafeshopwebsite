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
    }, 5000);

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
      <div className="slider-container">
        {data && data.length > 0 ? (
          <div className="slider-wrapper" style={{ backgroundImage: `url("${currentImage.background_img}")` }}>
            <div>
              <button className="arrow-button left-arrow" onClick={handlePrevious}>
                <SlArrowLeft />
              </button>
            </div>
            <div className="slider-item">
              <h2>{currentImage.header_text}</h2>
            </div>
            <div>
              <button className="arrow-button right-arrow" onClick={handleNext}>
                <SlArrowRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="slider-wrapper-default">
            <h3>No data found!</h3>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default HomepageSlider;
