import React from "react";
import "./Testimonials.css"; // Import the CSS file for styling

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Client A",
      logo: "https://picsum.photos/100?random=1",
      testimonial:
        "Fantastic service! The team was professional and efficient.",
    },
    {
      name: "Client B",
      logo: "https://picsum.photos/100?random=2",
      testimonial:
        "Highly recommend! The drilling was done swiftly and with great precision.",
    },
    {
      name: "Client C",
      logo: "https://picsum.photos/100?random=3",
      testimonial:
        "Excellent experience from start to finish. The well development was top-notch.",
    },
    {
      name: "Client D",
      logo: "https://picsum.photos/100?random=4",
      testimonial:
        "Great job! The pump installation was flawless and works perfectly.",
    },
    {
      name: "Client E",
      logo: "https://picsum.photos/100?random=5",
      testimonial:
        "Impressed with the quality of work and customer service. Will use again.",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="client-testimonials">
      <h1>What Our Clients Say About Us</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img
              src={testimonial.logo}
              alt={testimonial.name}
              className="client-logo"
            />
            <div className="testimonial-content">
              <p className="client-name">{testimonial.name}</p>
              <p className="testimonial-text">"{testimonial.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientTestimonials;
