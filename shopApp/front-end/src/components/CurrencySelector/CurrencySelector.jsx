import { useContext } from "react";
import { CURRENCIES } from "../../constans/currencies";
import styles from "./CurrencySelector.module.css";
import { CurrencyContext } from "../../contexts/currencyContext";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);
  return (
    <select
      value={currency}
      className={styles.currencySelector}
      onChange={(e) => {
        setCurrency(e.currentTarget.value);
        localStorage["selected_currency"] = e.currentTarget.value;
      }}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
