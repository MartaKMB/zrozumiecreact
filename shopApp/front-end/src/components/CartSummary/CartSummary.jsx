import styles from "./CartSummary.module.css";
import CAR_ICON from "../../assets/car.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { CURRENCIES, CURRENCIES_SIGN } from "../../constants/currencies";

export function CartSummary({ products }) {
  const [currency,] = useContext(CurrencyContext);

  const deliveryCosts = {
    [CURRENCIES.USD]: 10,
    [CURRENCIES.PLN]: 49,
  };
  const minSummsFreeDelivery = {
    [CURRENCIES.USD]: 100,
    [CURRENCIES.PLN]: 500,
  };

  const currencySign = CURRENCIES_SIGN[currency];

  const deliveryCost = deliveryCosts[currency];
  const minSummFreeDelivery = minSummsFreeDelivery[currency];

  let sum = 0;
  products.forEach((product) => {
    sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD;
  });

  const totalCost = sum > minSummFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów: </p>
        <p>
          {sum}
          {currencySign}
        </p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>
          {sum > minSummFreeDelivery ? "0" : deliveryCost}
          {currencySign}
        </p>
      </div>
      <div className={styles.cartRow}>
        <p>Do zapłaty</p>
        <p>
          {totalCost}
          {currencySign}
        </p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.cartSummaryRow}>
        <img src={CAR_ICON} />
        <p className={styles.deliveryInfo}>
          Darmowa dostawa od {minSummFreeDelivery}
          {currencySign}
        </p>
      </div>
    </div>
  );
}
