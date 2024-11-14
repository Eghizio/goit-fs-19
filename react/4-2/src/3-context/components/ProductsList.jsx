import css from "./Styles.module.css";
import { Product } from "./Product";

const NoProducts = () => (
  <div>No products available at the moment. Please visit us later.</div>
);

export const ProductsList = ({ products }) => {
  return (
    <ul className={css.list}>
      {products.length === 0 ? (
        <NoProducts />
      ) : (
        products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))
      )}
    </ul>
  );
};
