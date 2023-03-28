import React from "react";

import Card from "./card";
import styles from "./about.module.scss";
import { AiOutlineTeam } from "react-icons/ai";
import { BsCreditCardFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
export default function WhyMe() {
  return (
    <div className={styles.whyMewrapper}>
      <div className={styles.whyMe}>
        <h2 className={styles.mainTitle}>why should you choose me:</h2>
        <div className={styles.cardWrapper}>
          <Card
            title="professionnel and dedicated team "
            subtitle="build websites with modern technologies"
            icon={<AiOutlineTeam size="40px" />}
          />
          <Card
            title="affordable and flexible"
            subtitle="get the best website for a good price"
            icon={<BsCreditCardFill size="40px" />}
          />
          <Card
            title="24/7 support"
            subtitle="Consulting solutions and make plan to renovation"
            icon={<MdSupportAgent size="40px" />}
          />
        </div>
      </div>
      <div
        className={styles.clientsWrapper}
        style={{ backgroundColor: "#141414" }}
      >
        <div className={styles.clients}></div>
      </div>
    </div>
  );
}
