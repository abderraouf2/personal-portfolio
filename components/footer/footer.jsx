import React from "react";
import { icons } from "./icons";
import styles from "./footer.module.scss";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <h1 className={styles.emailWrapper}>
        <p className={styles.workT}>let's work together</p>
        <a className={styles.email} href="mailto:raoufmim29@gmail.com">
          <Fade>abderraouf.mimoune@inttic.dz</Fade>
        </a>
      </h1>
      <div className={styles.contact}>
        {icons.map((icon, index) => (
          <a
            key={index}
            className={styles.link}
            style={{ cursor: "pointer", color: `${icon.color}` }}
            href={icon.to}
          >
            {" "}
            {icon.title}{" "}
          </a>
        ))}
      </div>
    </footer>
  );
}
