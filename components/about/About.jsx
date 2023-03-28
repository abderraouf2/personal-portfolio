import React from "react";
import styles from "./about.module.scss";
import WhyMe from "./whyMe";
import { Element } from "react-scroll";
export default function About() {
  return (
    <Element className={styles.aboutWrapper}  name='about'>
      <div className={styles.bigTitle}>About</div>
      <div className={styles.titleWrapper}>
        <h1>About me:</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.img}>
          <div className={styles.imgCover}></div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <h2 style={{ zIndex: "5" }}>MIMOUNE Abderraouf</h2>
            <h3 className={styles.subtitle}>
              PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
              INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE
              MEMORABLE WEB EXPERIENCES.
              <br />
              With my experience in UI and product engineering, I solve product
              problems and build appealing usable web experiences.
            </h3>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "400",
                lineHeight: "1.32",
                width: "90%",
                zIndex: "5",
              }}
            ></p>
          </div>
        </div>
      </div>
      <WhyMe />
    </Element>
  );
}
