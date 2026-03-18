export default function ProductCard({ product }) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919621199989"; // 91 country code + 96211 99989
    const message = `Hi, We visited website and would like to order ${product.name}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="product-card" onClick={handleWhatsAppClick} style={{ cursor: "pointer" }}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}