import React from "react";
import { icons } from "./icons";
import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <h1 className={styles.emailWrapper}>
        <p className={styles.workT}>let's work together</p>
        <a className={styles.email} href="mailto:raoufmim29@gmail.com">
          abderraouf.mimoune@inttic.dz
        </a>
      </h1>
      <div className={styles.contact}>
        {icons.map((icon, index) => (
          <Link
            key={index}
            className={styles.link}
            style={{ cursor: "pointer", color: `${icon.color}` }}
            href={icon.to}
          >
            {" "}
            {icon.title}{" "}
          </Link>
        ))}
      </div>
    </footer>
  );
}
