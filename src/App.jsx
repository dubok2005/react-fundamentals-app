// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * remove useState for selected courseId
// * use hook useState for storing list of courses and authors
// * import Routes and Route from 'react-router-dom'
// * Add Routes to the container div (do not include Header to the Routes since header will not be changed with pages)
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * the App component and BrowserRouter components should be wrapped with Redux 'Provider' in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * use selector from store/selectors.js to get user token from store
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component
// * get authorized user info by 'user/me' GET request if 'localStorage' contains token
import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import {
  Header,
  Registration,
  Login,
  Courses,
  CourseInfo,
  CourseForm,
} from "./components";
import { mockedCoursesList, mockedAuthorsList } from "./constants";
import styles from "./App.module.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [courses, setCourses] = useState(mockedCoursesList);
  const [authors, setAuthors] = useState(mockedAuthorsList);

  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = Boolean(token);
  const isAuthPage = ["/login", "/registration"].includes(location.pathname);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName");
    setToken(storedToken);
    setUserName(storedName);

    if (location.pathname === "/" || location.pathname === "") {
      navigate(storedToken ? "/courses" : "/login", { replace: true });
    }
  }, [location.pathname, navigate]);

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setUserName(null);
    navigate("/login");
  };

  const addCourse = (course) => setCourses((prev) => [...prev, course]);
  const addAuthor = (author) => setAuthors((prev) => [...prev, author]);

  return (
    <div className={styles.wrapper}>
      {!isAuthPage && isAuthenticated && (
        <Header userName={userName} onLogout={logout} />
      )}

      <main className={styles.container}>
        <Routes>
          <Route
            path="/login"
            element={<Login setToken={setToken} setUserName={setUserName} />}
          />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/courses"
            element={
              isAuthenticated ? (
                <Courses coursesList={courses} authorsList={authors} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              isAuthenticated ? (
                <CourseInfo coursesList={courses} authorsList={authors} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/courses/add"
            element={
              isAuthenticated ? (
                <CourseForm
                  authorsList={authors}
                  createCourse={addCourse}
                  createAuthor={addAuthor}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="*"
            element={
              <Navigate to={isAuthenticated ? "/courses" : "/login"} replace />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
