import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./banner.module.scss";
// import { motion } from "framer-motion";
import NavBar from "../navigationBar/NavBar";
import { useRef } from "react";
import { motion } from "framer-motion";
import { wrap } from "@motionone/utils";
export default function Banner() {
  return (
    <div className={styles.bannerWrapper} id='home'>
      <NavBar />
      <div className={styles.banner}>
        <h4 style={{ marginTop: "-10%" }}>
          <span className={styles.span}>Hello,</span>
          I'm
        </h4>
        <TypeAnimation
          sequence={[
            "Abderraouf",
            1000,
            "Mimoune",
            2000,
            "A web developer",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
        />

        {/* <motion.div className={styles.buttonWrapper}>
          <motion.button
            className={styles.button}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            helloooo
          </motion.button>
          <motion.button
            className={styles.button}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            helloooo
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  );
}
