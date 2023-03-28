import React from "react";
import styles from "./about.module.scss";
export default function Card({ title, subtitle, icon }) {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.wrapper}>
        <div>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <div className={styles.IconCard}>{icon}</div>
      </div>
    </div>
  );
}
