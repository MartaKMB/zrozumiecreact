import styles from "./CartSummary.module.css";
import CAR_ICON from "../../assets/car.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function CartSummary({ products }) {
  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów: </p>
        <p>398zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>49zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Do zapłaty</p>
        <p>447zł</p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.cartSummaryRow}>
        <img src={CAR_ICON} />
        <p className={styles.deliveryInfo}>Darmowa dostawa od 500zł</p>
      </div>
    </div>
  );
}
