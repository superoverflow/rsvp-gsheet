import styles from "./Envolope.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

type KeyFrames = [number, number, number, number, number, number];

const Envelope = ({ children }: { children?: JSX.Element }) => {
  const { scrollYProgress } = useScroll();
  const scrollKeyFrames: KeyFrames = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const useAnimation = (values: KeyFrames) =>
    useTransform(scrollYProgress, scrollKeyFrames, values);

  const envelopePos = useAnimation([0, 0, 0, 0, 800, 800]);
  const letterYPos = useAnimation([0, 0, 0, 0, -800, -800]);

  const closedLidRotate = useAnimation([0, 90, 90, 90, 90, 90]);
  const openedLidRotate = useAnimation([90, 90, 180, 180, 180, 180]);

  const letterScale = useAnimation([0.5, 0.5, 0.5, 0.5, 1, 1]);
  const letterDegree = useAnimation([-90, -90, -90, -90, 0, 0]);
  const letterOpacity = useAnimation([0, 0, 0, 0, 0, 1]);

  return (
    <>
      <div style={{ height: "200vh"}}></div>
      <motion.div
        className={styles.wrapper}
        style={{
          y: envelopePos,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.div className={styles.back} />
        <motion.div
          className={styles.closedLid}
          style={{
            rotateX: closedLidRotate,
          }}
        />
        <motion.div
          className={styles.openedLid}
          style={{
            rotateX: openedLidRotate,
          }}
        />

        <motion.div
          className={styles.letter}
          style={{
            y: letterYPos,
            scale: letterScale,
            rotateZ: letterDegree,
          }}
        >
          <motion.div
            style={{
              width: "90%",
              height: "90%",
              display: "flex",
              opacity: letterOpacity,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
        <motion.div className={styles.front} />
      </motion.div>
    </>
  );
};

export default Envelope;
