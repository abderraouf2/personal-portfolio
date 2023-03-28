import React from "react";
import { OptionsContainer, OptionLink } from "./header.Style";
import { Fade, Slide } from "react-awesome-reveal";
import styles from "./header.module.scss";
import { FiTwitter } from "react-icons/fi";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Link from "next/link";
export default function Navlinks({ CloseNav }) {
  return (
    <div className={styles.navlinks}>
      <Fade left>
        <div className={styles.navlinks}>
          <Link className={styles.link} href="" onClick={()=> CloseNav()} >
            About
          </Link>
          <Link className={styles.link} href="">
            Projects
          </Link>
          <Link className={styles.link} href="">
            Contact
          </Link>
        </div>
        <div className={styles.social}>
          <Link className={styles.link} href="">
            <IoLogoGithub />
          </Link>
          <Link className={styles.link} href="">
            <FiTwitter />
          </Link>
          <Link className={styles.link} href="">
            <IoLogoLinkedin />
          </Link>
        </div>
      </Fade>
    </div>
  );
}
