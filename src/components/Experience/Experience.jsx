import React, { useState } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Professional Experience</h2>
      <p className={styles.subtitle}>
        Building data-driven solutions across blockchain, finance, and technology
      </p>

      <div className={styles.timeline}>
        {history.map((historyItem, id) => {
          const isExpanded = expandedItems[id];

          return (
            <div key={id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {id !== history.length - 1 && <div className={styles.markerLine}></div>}
              </div>

              <div
                className={`${styles.experienceCard} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => toggleItem(id)}
              >
                <div className={styles.cardHeader}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                    className={styles.orgLogo}
                  />
                  <div className={styles.headerInfo}>
                    <h3 className={styles.role}>{historyItem.role}</h3>
                    <p className={styles.organisation}>{historyItem.organisation}</p>
                    <p className={styles.duration}>
                      {historyItem.startDate} - {historyItem.endDate}
                    </p>
                  </div>
                  <div className={styles.expandIcon}>
                    {isExpanded ? '−' : '+'}
                  </div>
                </div>

                {isExpanded && (
                  <ul className={styles.experienceList}>
                    {historyItem.experiences.map((experience, expId) => {
                      return (
                        <li key={expId} className={styles.experienceItem}>
                          {experience}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};