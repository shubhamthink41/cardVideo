import { cardStyles as styles } from "./styles";

export const CardBack = ({ backImage }) => {
  return (
    <div className={`${styles.face} rotate-y-180`}>
      <img
        src={backImage}
        alt="Credit Card Back"
        className={styles.cardImage}
      />
    </div>
  );
};
