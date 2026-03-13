import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function Products(){

  return (
    <div>

      <Navbar/>

      <h2>All Products</h2>

      <div className="product-grid">

        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>

    </div>
  );

}