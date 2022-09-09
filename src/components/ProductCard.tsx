import { IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import Portals from "@ionic/portals";
import { Message, Product } from "../models";

import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

// const formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
//   maximumSignificantDigits: 2,
// });

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleItemSelection = (id: number) => {
    Portals.publish<Message>({ topic: "featured:select-item", data: id });
  };

  return (
    <IonCard
      button={true}
      class="product-card"
      onClick={() => handleItemSelection(product.id)}
    >
      <img
        alt={product.title}
        src={require(`../assets/images/${product.image}`)}
      />
      <IonCardTitle>{product.title.toUpperCase()}</IonCardTitle>
      <IonCardSubtitle>{product.price.toString()}</IonCardSubtitle>
    </IonCard>
  );
};
export default ProductCard;
