import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./projects.module.scss";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
export default function ProjectCard(props) {
  const { img, title, url, github, description, reverse } = props;
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState("");
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <div
      style={reverse && width > 992 ? { flexDirection: "row-reverse" } : {}}
      className={styles.projectCard}
    >
      <div className={styles.imgWrapper}>
        <img src={`${img}`} style={{ opacity: ".7" }} alt="" />
      </div>
      <div
        className={styles.cardBg}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Fade cascade>
          <motion.h3>{title}</motion.h3>
          <h5>{description}</h5>
          <motion.div className={styles.buttonWrapper}>
            <Link href={url}>
              <motion.button
                className={styles.button}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.05 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Live preview
              </motion.button>
            </Link>
            <Link href={github}>
              <motion.button
                className={styles.button}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.05 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                code on github
              </motion.button>
            </Link>
          </motion.div>
        </Fade>
      </div>
    </div>
  );
}
