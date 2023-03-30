import React, { useEffect, useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import styles from "./header.module.scss";
import cls from "classnames";
import Mobile from "./Mobile";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
export default function NavBar() {
  const [color, setColor] = useState(false);
  const [width, setWidth] = useState("");
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else setColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    setWidth(window.innerWidth);
  });
  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500);
  }, []);

  return (
    <div className={cls(styles.headerBg, color && styles.headerbg)}>
      <div className={styles.logo}>
        {/* <img src="" alt="RAOUF" /> */}
        RAOUF
      </div>
      {( !color && width > 768 ) ? (
        <div className={styles.linksWrapper}>
          <div className={styles.navlinks}>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.link}
              href=""
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.link}
              href=""
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.link}
              href=""
            >
              Contact
            </ScrollLink>
          </div>
          <div className={styles.social}>
            <Link className={styles.link} href="https://github.com/abderraouf2/">
              <IoLogoGithub />
            </Link>
            <Link className={styles.link} href="https://twitter.com/Abderraouf29">
              <FiTwitter />
            </Link>
            <Link className={styles.link} href="https://linkedin.com/in/abderraouf-mimoune-2290971a4">
              <IoLogoLinkedin />
            </Link>
          </div>
        </div>
      ) : (
        <Mobile />
      )}
    </div>
  );
}
