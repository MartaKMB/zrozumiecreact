import styles from "./CartProductsList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";

export function CartProductsList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.cartList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
