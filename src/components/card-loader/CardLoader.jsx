import { motion } from "framer-motion";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { cardStyles as styles } from "./styles";
import { flipAnimation } from "./animation";

export const CardLoader = ({ front, back }) => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        animate={flipAnimation.animate}
        transition={flipAnimation.transition}
      >
        <CardFront frontImage={front} />
        <CardBack backImage={back} />
      </motion.div>
    </div>
  );
};
