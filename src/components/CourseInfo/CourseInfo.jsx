import React from "react";
import { getCourseDuration, formatCreationDate } from "../../helpers";
import styles from "./styles.module.css";
import { Button } from "../../common";

export const CourseInfo = ({
  coursesList,
  authorsList,
  onBack,
  showCourseId,
}) => {
  const course = coursesList.find((c) => c.id === showCourseId);

  if (!course) return null;

  const authorNames = course.authors.map((id) => {
    const author = authorsList.find((a) => a.id === id);
    return author ? author.name : "Unknown Author";
  });

  return (
    <section className={styles.card} data-testid="courseInfo">
      <div className={styles.cardHeader}>
        <h1 className={styles.title}>{course.title}</h1>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.descriptionSection}>
          <p className={styles.description}>{course.description}</p>
        </div>

        <div className={styles.infoSection}>
          <p>
            <strong>ID:</strong> {course.id}
          </p>
          <p>
            <strong>Duration:</strong> {getCourseDuration(course.duration)}
          </p>
          <p>
            <strong>Created:</strong> {formatCreationDate(course.creationDate)}
          </p>
          <div>
            <strong>Authors:</strong>
            <ul className={styles.authorsList}>
              {authorNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <Button buttonText="BACK" handleClick={onBack} />
      </div>
    </section>
  );
};
