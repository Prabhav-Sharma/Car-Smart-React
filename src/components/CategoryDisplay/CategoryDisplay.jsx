import "./category-display.css";

function CategoryDisplay({ src, title, value = "" }) {
  return (
    <div className="flex-column spec-category-wrapper">
      <img className="category-icon" src={src} />
      <h5>{title}</h5>
      <h4>{value}</h4>
    </div>
  );
}

export default CategoryDisplay;
