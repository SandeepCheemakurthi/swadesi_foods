import AdvancedCarousel from "./AdvancedCarousel";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-tag">Fresh | Homemade | Authentic</span>
          <h1>Authentic Andhra Sweets &amp; Snacks</h1>
          <p className="hero-subtitle">
            Traditional recipes, premium ingredients, and pure ghee goodness —
            delivered from our kitchen in Andhra to your home.
          </p>

          <div className="hero-cta-row">
            <button onClick={goToProducts}>Shop Now</button>
            <span className="hero-secondary">
              or click any product to order directly on WhatsApp.
            </span>
          </div>

          <div className="hero-badges">
            <div className="hero-badge">No preservatives</div>
            <div className="hero-badge">Made to order</div>
            <div className="hero-badge">Pan-India delivery</div>
          </div>
        </div>

        <div className="hero-media">
          <AdvancedCarousel />
        </div>
      </div>
    </section>
  );
}