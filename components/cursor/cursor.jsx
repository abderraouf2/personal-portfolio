import React from "react";
import styles from "./cursor.module.scss";

export default function Cursor({ cursorX, cursorY, mouseIn, text }) {
  var display = "";
  let style = {
    display: display,
    left: cursorX + "px",
    top: cursorY + "px",
  };
  return (
    <div
      className={styles.cursor}
      {...(!mouseIn && (display = "none"))}
      style={style}
    >
      {text}
    </div>
  );
}
