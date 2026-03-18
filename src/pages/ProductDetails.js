import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  const handleWhatsAppOrder = () => {
    if (!product) return;
    const phoneNumber = "919621199989"; // 91 country code + 96211 99989
    const message = `Hi, We visited website and would like to order ${product.name}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!product) {
    return <div className="product-detail">Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button onClick={handleWhatsAppOrder}>Order on WhatsApp</button>
    </div>
  );
}