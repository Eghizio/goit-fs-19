import css from "./Styles.module.css";
import { FaShoppingCart } from "react-icons/fa";

// <h1>Search and Cart icon with count</h1>

export const TopBar = () => {
  return (
    <header className={css.bar}>
      <h1 className={css.logo}>Shop</h1>

      <input
        className={css.search}
        type="text"
        name="search"
        placeholder="Search..."
      />

      <button className={css.cartBtn} type="button">
        <FaShoppingCart size={24} />
      </button>
    </header>
  );
};
