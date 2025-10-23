import styles from "./CartSummary.module.css";
import CAR_ICON from "../../assets/car.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function CartSummary({ products }) {
  const deliveryCost = 49;
  const minSummaryFreeDelivery = 500;

  let sum = 0;
  products.forEach((product) => {
    sum += product.pricePLN;
  });

  const totalCost = sum > minSummaryFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów: </p>
        <p>{sum}zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>{sum > minSummaryFreeDelivery ? "0" : "49"}zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Do zapłaty</p>
        <p>{totalCost}zł</p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.cartSummaryRow}>
        <img src={CAR_ICON} />
        <p className={styles.deliveryInfo}>
          Darmowa dostawa od {minSummaryFreeDelivery}zł
        </p>
      </div>
    </div>
  );
}
