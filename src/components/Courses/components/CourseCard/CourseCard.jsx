import React from "react";
import styles from "./styles.module.css";
import { getCourseDuration, formatCreationDate } from "../../../../helpers";
import { Button } from "../../../../common";

export const CourseCard = ({ course, handleShowCourse, authorsList }) => {
  const authorNames = course.authors
    .map((id) => {
      const author = authorsList.find((a) => a.id === id);
      return author ? author.name : "Unknown";
    })
    .join(", ");

  return (
    <article className={styles.cardContainer} data-testid="courseCard">
      <header className={styles.cardHeader}>
        <h2>{course.title}</h2>
      </header>

      <div className={styles.cardBody}>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.infoBlock}>
          <p>
            <strong>Authors:</strong> {authorNames}
          </p>
          <p>
            <strong>Duration:</strong> {getCourseDuration(course.duration)}
          </p>
          <p>
            <strong>Created:</strong> {formatCreationDate(course.creationDate)}
          </p>
        </div>
        <div className={styles.actions}>
          <Button
            buttonText="SHOW COURSE"
            handleClick={() => handleShowCourse(course.id)}
          />
        </div>
      </div>
    </article>
  );
};
