import React, { useState, useEffect, useRef } from "react";
import styles from "./loader.module.scss";
import { Montserrat } from "next/font/google";
import cls from "classnames";

const font = Montserrat({
  subsets: ["latin"],
  weight:'600'
});

export default function Loader() {
  const wordArr = ["Abderraouf", "Mimoune", "creative", "developer"];

  return (
    <div className={cls(font.className, styles.loaderWrapper)}>
      <img className={styles.img} src="./favicon.ico" alt="" />
      <div className={styles.textWrapper}>
        <h4>Hello, I'm</h4>
        <div className={styles.words}>
          {wordArr.map((word, index) => (
            <span key={index} className={styles.span}>
              {" "}
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
