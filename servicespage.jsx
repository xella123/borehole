import React from "react";
import "./servicespage.css"; // Import the CSS file for styling

function ServicesPage() {
  return (
    <div className="services-page">
      <h1>What We Do</h1>
      <div className="services-container">
        <div className="service">
          <img
            src="https://picsum.photos/200?random=1"
            alt="Preliminary Works"
            className="service-img"
          />
          <h2>Preliminary Works</h2>
          <p>
            We conduct thorough site assessments and geological surveys to
            determine the best location and method for borehole drilling.
          </p>
        </div>
        <div className="service">
          <img
            src="https://picsum.photos/200?random=2"
            alt="Borehole Drilling"
            className="service-img"
          />
          <h2>Borehole Drilling</h2>
          <p>
            Our advanced drilling techniques ensure the efficient and precise
            creation of boreholes to access underground water sources.
          </p>
        </div>
        <div className="service">
          <img
            src="https://picsum.photos/200?random=3"
            alt="Well Development"
            className="service-img"
          />
          <h2>Well Development</h2>
          <p>
            We enhance well performance through methods like well cleaning,
            casing, and development to ensure long-term water supply.
          </p>
        </div>
        <div className="service">
          <img
            src="https://picsum.photos/200?random=4"
            alt="Pump Testing and Installation"
            className="service-img"
          />
          <h2>Pump Testing and Installation</h2>
          <p>
            We test and install high-quality pumps to ensure reliable water flow
            from your borehole or well.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
