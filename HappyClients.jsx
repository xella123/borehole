import React from "react";
import "./HappyClients.css"; // Import the CSS file for styling

function HappyClients() {
  const clients = [
    { name: "Client A", imgSrc: "https://picsum.photos/100?random=1" },
    { name: "Client B", imgSrc: "https://picsum.photos/100?random=2" },
    { name: "Client C", imgSrc: "https://picsum.photos/100?random=3" },
    { name: "Client D", imgSrc: "https://picsum.photos/100?random=4" },
    { name: "Client E", imgSrc: "https://picsum.photos/100?random=5" },
    { name: "Client F", imgSrc: "https://picsum.photos/100?random=6" },
    { name: "Client G", imgSrc: "https://picsum.photos/100?random=7" },
    { name: "Client H", imgSrc: "https://picsum.photos/100?random=8" },
    { name: "Client I", imgSrc: "https://picsum.photos/100?random=9" },
    { name: "Client J", imgSrc: "https://picsum.photos/100?random=10" },
    { name: "Client K", imgSrc: "https://picsum.photos/100?random=11" },
    { name: "Client L", imgSrc: "https://picsum.photos/100?random=12" },
    { name: "Client M", imgSrc: "https://picsum.photos/100?random=13" },
    { name: "Client N", imgSrc: "https://picsum.photos/100?random=14" },
    { name: "Client O", imgSrc: "https://picsum.photos/100?random=15" },
  ];

  return (
    <div className="happy-clients">
      <h1>Some of Our Happy Clients</h1>
      <div className="clients-container">
        {clients.map((client, index) => (
          <div key={index} className="client">
            <img src={client.imgSrc} alt={client.name} className="client-img" />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HappyClients;
