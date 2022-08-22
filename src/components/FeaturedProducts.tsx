import { Product } from "../models";
import getFeaturedProducts from "../api/getFeaturedProducts";
import ProductCard from "./ProductCard";

import "./FeaturedProducts.css";

const FeaturedProducts: React.FC = () => (
  <div className="featured-products">
    <h2>Must Haves, Bestsellers &amp; More</h2>
    <div className="product-list">
      <div className="product-list-inner">
        {getFeaturedProducts().map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
);
export default FeaturedProducts;
