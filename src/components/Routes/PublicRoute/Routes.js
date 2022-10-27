import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/Courses/CheckOut";
import Courses from "../../Pages/Courses/Courses";
import SingleCourse from "../../Pages/Courses/SingleCourse";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../../Pages/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://assignment-10-server-cyan-five.vercel.app/"),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch("https://assignment-10-server-cyan-five.vercel.app/details"),
      },
      {
        path: "/course/:id",
        element: <SingleCourse />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-cyan-five.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-cyan-five.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
    errorElement: <Error />,
  },
]);
