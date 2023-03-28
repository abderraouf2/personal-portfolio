import React, { useEffect, useState } from "react";
import styles from "./skills.module.scss";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
export default function Skills() {
  const [width, setWidth] = useState('')
  useEffect(() =>{
    setWidth(window.innerWidth)
    console.log(width);
  })

  return (
    <div className={styles.skillsWrapper}>
      <div className={styles.bigTitle}>Skills</div>
      <div className={styles.titleWrapper}>
        <h1>Main Skills: </h1>
      </div>
      <div className={styles.skills}>
        <div className={styles.sphereWrapper}>
          <TagCloud
            options={(w) => ({
               radius: width > 768 ? Math.min(1000, w.innerWidth, w.innerHeight) / 2 : Math.min(400, w.innerWidth, w.innerHeight) / 2 ,
              maxSpeed: "normal",
            })}
            onClick={(tag, ev) => alert(tag)}
            onClickOptions={{ passive: true }}
          >
            {[
              "VSCode",
              "NextJS",
              "ReactJS",
              "styled-components",
              "NodeJS",
              "HTML5",
              "CSS3",
              "SASS",
              "Framer Motion",
              "JavaScript",
              "React-bootstrap",
              "JSON",
              "SQL",
              "postgresQL",
              "RestAPI",
            ]}
          </TagCloud>
        </div>
      </div>
    </div>
  );
}
