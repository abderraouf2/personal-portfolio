import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Loader from "@/components/loader/Loader";
import Banner from "@/components/banner/Banner";
import NavBar from "@/components/navigationBar/NavBar";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/footer/footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <>
      <Head>
        <title>Abderraouf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Parallax pages={7} className={styles.main}>
              <ParallaxLayer
                offset={0}
                speed={1}
                factor={0.5}
                // style={{
                //   backgroundImage: `url(${"/static/me.png"})`,
                // }}
              >
                <Banner />
              </ParallaxLayer>
              <ParallaxLayer offset={1}>
                <About />
              </ParallaxLayer>
              <ParallaxLayer offset={3}>
                <Projects />
              </ParallaxLayer>
              <ParallaxLayer offset={5}>
                <Skills />
              </ParallaxLayer>
              <ParallaxLayer offset={7}>
                <Footer />
              </ParallaxLayer>
            </Parallax>
          </>
        )}
      </main>
    </>
  );
}
