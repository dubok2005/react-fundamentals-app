import React, { useState } from "react";
import { Header, Courses, CourseInfo } from "./components";
import { mockedAuthorsList, mockedCoursesList } from "./constants";
import styles from "./App.module.css";

const App = () => {
  const [showCourseId, setShowCourseId] = useState("");

  const isListVisible = showCourseId === "";

  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.container}>
        {isListVisible ? (
          <Courses
            coursesList={mockedCoursesList}
            authorsList={mockedAuthorsList}
            handleShowCourse={setShowCourseId}
          />
        ) : (
          <CourseInfo
            coursesList={mockedCoursesList}
            authorsList={mockedAuthorsList}
            showCourseId={showCourseId}
            onBack={() => setShowCourseId("")}
          />
        )}
      </section>
    </main>
  );
};

export default App;
