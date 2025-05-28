import React from "react";
import styles from "./styles.module.css";
import { Button } from "../../common";
import { CourseCard } from "./components";

export const Courses = ({
  coursesList,
  authorsList,
  onAddClick,
  handleShowCourse,
}) => {
  return (
    <section>
      {coursesList.length > 0 ? (
        <>
          <div className={styles.toolbar}>
            <Button buttonText="ADD NEW COURSE" data-testid="addCourse" />
          </div>
          <div className={styles.courseList}>
            {Object.values(coursesList).map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                authorsList={authorsList}
                handleShowCourse={handleShowCourse}
              />
            ))}
          </div>
        </>
      ) : (
        <EmptyCourseList />
      )}
    </section>
  );
};

export const EmptyCourseList = () => (
  <div className={styles.emptyMessage} data-testid="emptyContainer">
    <h3>Your List Is Empty</h3>
    <p>Use the button below to add your first course</p>
    <Button buttonText="ADD NEW COURSE" data-testid="addCourse" />
  </div>
);
