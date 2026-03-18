import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function Products(){
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");
  const initialCategory =
    urlCategory && categories.includes(urlCategory) ? urlCategory : (categories?.[0] || "All");

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (!activeCategory || activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat && cat !== "All") {
      setSearchParams({ category: cat }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  return (
    <div>

      <Navbar/>

      <h2 className="page-title">Products</h2>
      <p className="page-callout">
        🔔 Click any product card to order instantly on WhatsApp.
      </p>

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
              onClick={() => handleCategoryChange(cat)}
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