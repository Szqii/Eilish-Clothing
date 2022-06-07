import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component.jsx";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/right-arrow.svg";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()} <Arrow className="arrow" />
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 5)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
