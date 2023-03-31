import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./banner.module.scss";
import NavBar from "../navigationBar/NavBar";

export default function Banner() {
  return (
    <div className={styles.bannerWrapper} id="home">
      <NavBar />
      <div className={styles.banner}>
        <h4 style={{ marginTop: "20%" }}>
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
      </div>
    </div>
  );
}
