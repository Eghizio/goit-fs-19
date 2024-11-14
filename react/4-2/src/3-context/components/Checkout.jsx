import css from "./Styles.module.css";
import { useCart } from "../Context";

export const Checkout = () => {
  const { cart, checkout } = useCart();

  return (
    <ol>
      {cart.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price}
        </li>
      ))}
    </ol>
  );
};
