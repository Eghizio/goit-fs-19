import css from "./Styles.module.css";

export const Product = ({
  product: { id, name, avatar, price, description, category },
}) => {
  return (
    <article className={css.product} id={id}>
      <img className={css.productImg} src={avatar} alt={name} />
      <h3 className={css.productName}>{name}</h3>
      <div className={css.row}>
        <span className={css.category}>{category}</span>
      </div>
      <p className={css.description}>{description}</p>

      <button className={css.addToCartBtn} type="button">
        {price} $
      </button>
    </article>
  );
};
