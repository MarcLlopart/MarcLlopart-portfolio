import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Let's work together</h2>
        <p className={styles.tagline}>I turn data flows into foresight</p>
        <div className={styles.links}>
          <a
            href="mailto:llopartdata@gmail.com"
            className={styles.ctaButton}
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/marc-llopart-86449219b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
            LinkedIn
          </a>
          <a
            href="https://github.com/MarcLlopart"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};