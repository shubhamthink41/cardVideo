import { cardStyles as styles } from "./styles";

export const CardFront = ({ frontImage }) => {
  return (
    <div className={styles.face}>
      <img
        src={frontImage}
        alt="Credit Card Front"
        className={styles.cardImage}
      />
    </div>
  );
};
