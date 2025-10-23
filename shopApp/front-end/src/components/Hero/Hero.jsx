import styles from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function Hero({ heroImg }) {
  return (
    <div style={{ backgroundImage: `url(${heroImg})` }} className={styles.hero}>
      <CenteredContent>
        <div className={styles.contentWrapper}>
          <h2>Letnie promocje do -70%</h2>
          <p>Tylko nasjlepsze okazje!</p>
          <FullWidthButton>Sprawdź produkty</FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
