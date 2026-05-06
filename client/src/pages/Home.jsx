import { useState } from "react";
import { HomeIcon, Sofa, Paintbrush, Phone } from "lucide-react";

const portfolioImages = [
  "/portfolio/project1.jpeg",
  "/portfolio/project2.jpeg",
  "/portfolio/project3.jpeg",
  "/portfolio/project4.jpeg",
  "/portfolio/project5.jpeg",
  "/portfolio/project6.jpeg",
  "/portfolio/project7.jpeg",
  "/portfolio/project8.jpeg",
  "/portfolio/project9.jpeg",
  "/portfolio/project10.jpeg",
  "/portfolio/project11.jpeg",
  "/portfolio/project12.jpeg",
  "/portfolio/project13.jpeg",
  "/portfolio/project14.jpeg",
  "/portfolio/project15.jpeg",
  "/portfolio/project16.jpeg",
  "/portfolio/project17.jpeg",
  "/portfolio/project18.jpeg",
  "/portfolio/ceiling.jpeg",
  "/portfolio/project19.jpeg",
  "/portfolio/project20.jpeg",
];


export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? portfolioImages : portfolioImages.slice(0, 4);

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

      <section id="portfolio" className="section dark portfolio-section">
        <h2>Our Real Projects</h2>
        <p className="section-subtitle">
          Actual interior work completed by HomeVista Interior team
        </p>

        <div className="portfolio-grid premium-portfolio">
          {visibleImages.map((image, index) => (
            <div className="portfolio-card" key={index}>
              <img src={image} alt={`HomeVista Interior Project ${index + 1}`} />
            </div>
          ))}
        </div>

        {portfolioImages.length > 4 && (
          <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View More Projects"}
          </button>
        )}
      </section>

      <section className="section reviews-section">
      
         <h2>Project Experience</h2>
        <p className="section-subtitle">
          Trusted by homeowners and shop owners for quality interior work
        </p>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              HomeVista Interior completed our room design beautifully. The finishing
              and lighting work was very good.
            </p>
            <h3>Rahul Sharma</h3>
            <span>Home Interior Client</span>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Their team made our modular kitchen very clean and modern. Work was done
              on time with good material.
            </p>
            <h3>Priya Singh</h3>
            <span>Modular Kitchen Client</span>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Best service for painting and false ceiling. They explained the cost
              clearly before starting the work.
            </p>
            <h3>Amit Verma</h3>
            <span>Renovation Client</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Pricing Plans</h2>

        <div className="cards">
          <div className="card price">
            <h3>Basic</h3>
            <h1>₹699</h1>
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
      <a
        href="https://wa.me/918528539188"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </>
  );
}