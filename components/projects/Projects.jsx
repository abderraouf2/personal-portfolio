import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import ProjectCard from "./ProjectCard";
import styles from "./projects.module.scss";
import { DATA } from "./data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
export default function Projects() {
  return (
    <div className={styles.projectsWrapper} id="projects">
      <div className={styles.bigTitle}>Work</div>
      <div className={styles.titleWrapper}>
        <h1>Recent Projects:</h1>
      </div>
      {/* <Swiper
        className={styles.swiperWrapper}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        style={{color:'red'}}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      > */}
      {DATA.map((project, index) => (
        // <SwiperSlide key={index} className={styles.projectSlide}>
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          img={project.img}
          url={project.url}
          reverse={project.revert}
        />
      ))}
      {/* </SwiperSlide> */}
      {/* </Swiper> */}
    </div>
  );
}
