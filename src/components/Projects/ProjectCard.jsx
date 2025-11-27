import React, { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, takeaway, description, sparklineData, techStack, source } = project;

  // Transform sparkline data for recharts
  const chartData = sparklineData.map((value, index) => ({
    index,
    value,
  }));

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.arrow}>→</div>
      </div>

      <div className={styles.sparklineContainer}>
        <ResponsiveContainer width="100%" height={60}>
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={false}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className={styles.takeaway}>{takeaway}</p>
      <p className={styles.description}>{description}</p>

      <div className={styles.techStack}>
        {techStack.map((tech, id) => (
          <span key={id} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>

      <div className={`${styles.ctaOverlay} ${isHovered ? styles.visible : ""}`}>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
          View Full Analysis
        </a>
      </div>
    </div>
  );
};