import styles from "./Photos.module.css";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { useState } from "react";

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => {
          return (
            <img
              className={currentPhoto === photo ? styles.active : ""}
              src={photo}
              key={photo}
              onClick={() => {
                setCurrentPhoto(photo);
              }}
            />
          );
        })}
      </div>
      <img src={currentPhoto} className={styles.mainPhoto} />
    </FlexContainer>
  );
}
