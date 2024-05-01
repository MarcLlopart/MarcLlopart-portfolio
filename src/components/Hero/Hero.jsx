import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{`Hi, I'm Marc!`}</h1>
        <p className={styles.description}>
        {`I'm a seasoned data scientist and blockchain enthusiast,
        leveraging my expertise in computational mathematics,
        data analytics, and blockchain technologies to drive impactful solutions. 
        Let's connect and explore how data-driven insights and blockchain innovation can elevate your projects.`}
        </p>
        <a href="mailto:llopartdata@gmail.com" className={styles.contactBtn}>
          {`Let's Connect!`}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};