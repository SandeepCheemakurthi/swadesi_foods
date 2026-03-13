const categories = [
  "Andhra Pindivantalu",
  "Dry Fruit Sweets",
  "Namkeens",
  "Pickles",
  "Kova Sweets",
  "Ghee Sweets"
];

export default function CategoryGrid() {

  return (
    <div className="categories">

      {categories.map((cat, index) => (

        <div key={index} className="category-card">
          {cat}
        </div>

      ))}

    </div>
  );

}