import React, { useEffect } from "react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import styles from "./header.module.scss";
import { useAnimate, stagger } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
// import Link from "next/link";
import cls from "classnames";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
export default function Mobile() {
  const [open, setOpen] = useState(false);
  const CloseNav = () => setOpen(!open);
  const [width, setWidth] = useState("");
  const Humberger = (
    <HiMenu color="white" size="35px" onClick={() => setOpen(true)} />
  );
  const Close = (
    <CgClose
      className={cls(styles.humburger)}
      color="white"
      size="30px"
      onClick={() => setOpen(false)}
    />
  );
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <div className={styles.mobilNav}>
      <HiMenu color="white" size="35px" onClick={() => setOpen(true)} />

      {/* {open && ( */}
      <Fade>
        <motion.div
          // initial={{ width: 0 }}
          // animate={{ width: 300 }}
          // className={styles.Mobile}
          style={open ? { width: "100vw" } : { width: "0" }}
        >
          <Fade cascade delay={1000} duration={2000}>
            <div
              style={
                open
                  ? {
                      width: width > 992 ? "60vw" : "0vw",
                      backgroundColor: "rgba(0, 0, 0, 0.692)",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "100vh",
                    }
                  : { width: "0" }
              }
            ></div>
          </Fade>
          <motion.div
            className={styles.Mobile}
            style={
              open ? { width: width > 992 ? "40vw" : "100vw" } : { width: "0" }
            }
          >
            <div className={cls(styles.closeCross)}>
              <CgClose
                color="white"
                size="30px"
                onClick={() => setOpen(false)}
                style={open ? { width: "20%" } : { width: "0" }}
              />
            </div>
            <div
              className={styles.mobileLinks}
              style={open ? { width: "50%" } : { width: "0" }}
            >
              <ScrollLink
                className={styles.link}
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                onClick={() => CloseNav()}
              >
                Home
              </ScrollLink>
              <ScrollLink
                className={styles.link}
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                onClick={() => CloseNav()}
              >
                About
              </ScrollLink>
              <ScrollLink
                className={styles.link}
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                href="#projects"
                onClick={() => CloseNav()}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                className={styles.link}
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                onClick={() => CloseNav()}
              >
                Contact
              </ScrollLink>
            </div>
            <div
              className={styles.social}
              style={open ? { width: "80%" } : { width: "0" }}
            >
              <Link
                className={styles.link}
                href="https://github.com/abderraouf2/"
              >
                <IoLogoGithub style={!open && { display: "none" }} />
              </Link>
              <Link
                className={styles.link}
                href="https://twitter.com/Abderraouf29"
              >
                <FiTwitter style={!open && { display: "none" }} />
              </Link>
              <Link
                className={styles.link}
                href="https://linkedin.com/in/abderraouf-mimoune-2290971a4"
              >
                <IoLogoLinkedin style={!open && { display: "none" }} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Fade>
      {/* )} */}
    </div>
  );
}
