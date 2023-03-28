import React, { useState, useEffect } from "react";
import { LogoContainer } from "./header.Style";
import styles from "./header.module.scss";
import Mobile from "./Mobile";
import Navigation from "./Navigation";
import cls from "classnames";

export default function Header() {
  const [color, setColor] = useState(false);
  const [width, setWidth] = useState("");
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else setColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    setWidth(window.innerWidth);
  });

  return (
    <div
      className={
        color ? cls(styles.headerBg, styles.headerbg) : styles.headerBg
      }
    >
      <LogoContainer href="/top">M.A</LogoContainer>
      {width > 1080 ? <Navigation /> : <Mobile />}
    </div>
  );
}
