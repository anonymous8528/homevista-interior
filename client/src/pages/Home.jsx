import { HomeIcon, Sofa, Paintbrush, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Home With Modern Interior Design</h1>
          <p>
            HomeVista Interior provides complete home, office, shop and modular
            kitchen interior solutions in Gorakhpur.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">Get Free Quote</a>
            <a
              href="https://wa.me/919682018623?text=Hello%20HomeVista%20Interior,%20I%20want%20interior%20design%20service"
              className="btn-secondary"
              target="_blank"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>
        <p className="section-subtitle">Complete interior solution from design to execution</p>

        <div className="cards">
          <div className="card">
            <HomeIcon size={40} />
            <h3>Home Interior</h3>
            <p>Bedroom, living room, false ceiling, lighting and furniture design.</p>
          </div>

          <div className="card">
            <Sofa size={40} />
            <h3>Modular Kitchen</h3>
            <p>Modern kitchen design with smart storage and premium finish.</p>
          </div>

          <div className="card">
            <Paintbrush size={40} />
            <h3>Painting & Renovation</h3>
            <p>Wall painting, texture design, POP work and complete renovation.</p>
          </div>

          <div className="card">
            <Phone size={40} />
            <h3>Free Consultation</h3>
            <p>Discuss your idea and get estimated cost before starting work.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section dark">
        <h2>Portfolio</h2>
        <p className="section-subtitle">Modern designs for Indian homes</p>

        <div className="portfolio-grid">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" />
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
        </div>
      </section>

      <section className="section">
        <h2>Pricing Plans</h2>

        <div className="cards">
          <div className="card price">
            <h3>Basic</h3>
            <h1>₹499</h1>
            <p>Single room design idea</p>
          </div>

          <div className="card price featured">
            <h3>Standard</h3>
            <h1>₹1999</h1>
            <p>Full home interior design plan</p>
          </div>

          <div className="card price">
            <h3>Premium</h3>
            <h1>Custom</h1>
            <p>Design + material + labour execution</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Want to design your dream home?</h2>
        <a href="/contact" className="btn-primary">Book Free Consultation</a>
      </section>
    </>
  );
}