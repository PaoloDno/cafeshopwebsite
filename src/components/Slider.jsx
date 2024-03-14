import { Fragment, useState, useEffect } from "react";
import data from "../../public/data/sliderimages.js";
import "../assets/Slider.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function HomepageSlider() {
  
  const [bgImage, setBgImage] = useState(data[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setBgImage(data[0]);
  }, []);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <Fragment>
      <div className="container">
        {data && data.length > 0 ?
          <div className="slider-wrapper"
            style={{
              backgroundImage: `url("${bgImage.background_img}")`,
             }}
          >
            <div>
            <button className="left-button button"onClick={handlePrevious}><SlArrowLeft /> </button>
            </div>
            <div className="item">
             <h2>{bgImage.header_text}</h2>
            </div>
            <div>
              <button className="right-button button"onClick={handleNext}><SlArrowRight /> </button>
            </div>
          </div>
          : 
          <div className="slider-wrapper-default">
            <h3>No data found!</h3>
          </div>
        }
      </div>
    </Fragment>
  );
}

export default HomepageSlider;
