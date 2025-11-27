import React from "react";
import styles from "./About.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const About = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className={styles.container} id="tooling">
      <h2 className={styles.title}>Tooling Stack</h2>
      <p className={styles.subtitle}>
        Technologies and tools I use to build data-driven solutions
      </p>

      <div className={styles.categoriesContainer}>
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.skillsGrid}>
              {categorySkills.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <div className={styles.skillImageWrapper}>
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                      className={styles.skillImage}
                    />
                  </div>
                  <div className={styles.skillName}>{skill.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};