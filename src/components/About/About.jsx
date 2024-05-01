import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          width={190}
          height={190}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aboutEfficient.png")} alt="Efficient icon" width={150} height={150}/>
            <div className={styles.aboutItemText}>
              <h3>Efficient</h3>
              <p>
              Known for my energy, organization, and agility,
              I consistently deliver results with speed and precision,
              making me an effective worker and quick learner.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aboutCollaborative.png")} alt="Collaborative icon" width={150} height={150}/>
            <div className={styles.aboutItemText}>
              <h3>Collaborative</h3>
              <p>
              I thrive in collaborative environments, valuing open 
              communication and teamwork to tackle complex 
              challenges and achieve shared goals.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aboutVersatile.png")} alt="Verstaile icon" width={150} height={150}/>
            <div className={styles.aboutItemText}>
              <h3>Versatile</h3>
              <p>
              I thrive on challenges, excelling in structured environments
              while quickly adapting and mastering new skills, ensuring flexibility 
              and effectiveness across various tasks and projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};