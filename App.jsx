import React from "react";
import Navbar from "./Navbar.jsx";
import Welcome from "./Welcome.jsx";
import ServicesPage from "./servicespage.jsx";
import HappyClients from "./HappyClients.jsx";
import ClientTestimonials from "./Testimonials";
import FAQPage from "./Faq.jsx";
import ContactSection from "./contact.jsx";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <ServicesPage />
      <HappyClients />
      <ClientTestimonials />
      <FAQPage />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default App;
