import { useState } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { refreshOutline } from "ionicons/icons";
import Portals from "@ionic/portals";

import { Message, Product } from "../models";
import getFeaturedProducts from "../api/getFeaturedProducts";
import ProductCard from "./ProductCard";

import "./FeaturedProducts.css";

const FeaturedProducts: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleRefresh = () => {
    setIsDisabled(true);
    Portals.publish<Message>({ topic: "live-update:sync" });
  };

  return (
    <div className="featured-products">
      <h2>
        Must Haves, Bestsellers &amp; More
        <IonButton fill="clear" disabled={isDisabled} onClick={handleRefresh}>
          <IonIcon icon={refreshOutline} />
        </IonButton>
      </h2>
      <div className="product-list">
        <div className="product-list-inner">
          {getFeaturedProducts().map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedProducts;
