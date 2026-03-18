import { useMemo, useState } from "react";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function Products(){
  const [activeCategory, setActiveCategory] = useState(categories?.[0] || "All");

  const filteredProducts = useMemo(() => {
    if (!activeCategory || activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>

      <Navbar/>

      <h2 style={{ textAlign: "center", margin: "20px 0", color: "#8b0000" }}>Products</h2>

      <div className="product-tabs" role="tablist" aria-label="Product categories">
        {(categories?.length ? categories : ["All"]).map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`product-tab ${isActive ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="product-grid">

        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>

    </div>
  );

}