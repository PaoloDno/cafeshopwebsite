
import React from "react";
import HeroSlider from "./HeroSlider";
import HeroComponent from "./HeroComponent";
import Header from "./Header";
function Homepage() {
return(
  <div className="body-container">
    <Header />
    <div className="body-content">
    <HeroSlider />
    <HeroComponent />
    </div>
  </div>
);
}

export default Homepage;