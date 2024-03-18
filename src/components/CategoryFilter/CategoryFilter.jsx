import "./CategoryFilter.css";

export const CategoryFilter = ({
  selectedCategory,
  handleChange,
  categories,
}) => {
  return (
    <div className="category-filter-wrapper">
      <select
        className="filter-options"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option className="filter-option" value="All">
          All Category
        </option>
        {categories.map((category) => (
          <option className="filter-option" key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
