import React, { useState } from 'react';
import { icons } from './icons';
import styles from './footer.module.scss';
import { Fade } from 'react-awesome-reveal';



export default function Footer() {
  // const a = document.getElementById('c')
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [mouseIn, setmouseIn] = useState(false);

  // a.addEventListener('mousemove',(e)=>{
  //   setCursorX(e.pageX)
  //   setCursorY(e.pageY)
  // })

  return (
    <footer id='contact' className={styles.footer}>
      
          <h1 className={styles.emailWrapper} >
            <p className={styles.workT} >
                  let's work together
            </p>
            <a 
              onMouseMove={(e) =>{
                setCursorX(e.pageX-50)
                setCursorY(e.pageY-50)
                }}
                onMouseLeave={()=>{
                  setmouseIn(false)
                }}
                onMouseEnter={()=>{
                  setmouseIn(true)
                }}
             className={styles.email} href='mailto:raoufmim29@gmail.com' >
                  <Fade>
                    abderraouf.mimoune@inttic.dz
                  </Fade>
            </a>
          </h1>
          <div className={styles.contact}>
            {
              icons.map((icon, index)=><a key={index} className={styles.link} style={{cursor:'pointer', color:`${icon.color}`}} href={icon.to}> {icon.title} </a> )
            }
          </div>
    </footer>
  )
}
