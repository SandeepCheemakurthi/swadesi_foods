import AdvancedCarousel from "./AdvancedCarousel";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="hero">

      <h1>Authentic Andhra Sweets</h1>

      <button onClick={goToProducts}>Shop Now</button>

      <div style={{ margin: '10px' }}>
        <AdvancedCarousel />
      </div>

    </div>
  );

}