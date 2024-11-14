import css from "./Styles.module.css";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Context";
import { TopBar } from "./TopBar";
import { ProductsList } from "./ProductsList";
import { Checkout } from "./Checkout";

import products from "../data/products.json";

export const Shop = () => {
  const {} = useCart();

  return (
    <div>
      <TopBar />
      <ProductsList products={products} />
      {/* <Checkout /> */}
    </div>
  );
};
