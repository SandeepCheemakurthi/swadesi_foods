import { useNavigate } from "react-router-dom";
import { categories } from "../data/products";

export default function CategoryGrid() {
  const navigate = useNavigate();

  const visibleCategories = (categories || []).filter((c) => c && c !== "All");

  const goToCategory = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="categories" role="list" aria-label="Shop by category">
      {visibleCategories.map((cat) => (
        <button
          key={cat}
          type="button"
          className="category-card"
          onClick={() => goToCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}