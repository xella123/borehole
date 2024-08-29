import React from "react";
import "./Welcome.css"; // Import the CSS file for styling

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="image-slider">
        <div className="slider-wrapper">
          <img src="https://picsum.photos/800/600?random=1" alt="Image 1" />
          <img src="https://picsum.photos/800/600?random=2" alt="Image 2" />
          <img src="https://picsum.photos/800/600?random=3" alt="Image 3" />
          <img src="https://picsum.photos/800/600?random=4" alt="Image 4" />
          <img src="https://picsum.photos/800/600?random=5" alt="Image 5" />
          <img src="https://picsum.photos/800/600?random=1" alt="Image 1" />
          <img src="https://picsum.photos/800/600?random=2" alt="Image 2" />
          <img src="https://picsum.photos/800/600?random=3" alt="Image 3" />
          <img src="https://picsum.photos/800/600?random=4" alt="Image 4" />
          <img src="https://picsum.photos/800/600?random=5" alt="Image 5" />
        </div>
      </div>
      <div className="welcome-text">
        <h1>Welcome To Aztec Infrastructure (K) LTD.</h1>
        <p className="motto">
          "Providing Sustainable Water Solutions for a Better Tomorrow"
        </p>
      </div>
    </div>
  );
}

export default Welcome;
