import styles from "./Envolope.module.css";
import { Text } from "@mantine/core";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronsUp } from "tabler-icons-react";

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
  const letterOpacity = useAnimation([0, 0, 0, 0, 0, 0.95]);

  const handleClickEnvelope = () => {
    window.scrollTo({ top: window.outerHeight + 100, behavior: "smooth" });
  };

  return (
    <>
      {/* pseudo element to add scroll space */}
      <div style={{ height: "200vh" }}></div>

      {/* envelope */}
      <motion.div
        onClick={handleClickEnvelope}
        className={styles.wrapper}
        style={{
          y: envelopePos,
        }}
        transition={{
          duration: 1,
        }}
      >
        {/* scroll hint */}
        <motion.div
          className={styles.scrollHint}
          animate={{ y: -10 }}
          transition={{ type: "spring", stiffness: 500, duration: 3 }}
        >
          <ChevronsUp size={20} strokeWidth={2} color={"#862e2d"} />
          <Text size={15} fw={500} color={"#862e2d"}>
            Swipe Up
          </Text>
        </motion.div>
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
