import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails(){

  const {id} = useParams();

  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="product-detail">

      <img src={product.image} alt={product.name}/>

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>₹{product.price}</h3>

      <button>Add To Cart</button>

    </div>
  );

}