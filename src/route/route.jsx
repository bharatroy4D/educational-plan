import Root from "../layout/Root";
import About from "../pages/about/About";
import Blog from "../pages/Blog/Blog";
import Careers from "../pages/careers/Careers";
import Courses from "../pages/courses/Courses";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",      // Home
                element: <Home />
            },
            {
                path: "about",  // 👉 /about
                element: <About />
            },
            {
                path: "courses", // 👉 /contact
                element: <Courses />
            },
            {
                path: "careers", // 👉 /contact
                element: <Careers />
            },
            {
                path: "blog", // 👉 /contact
                element: <Blog />
            },
            {
                path: "login",   // 👉 /login
                element: <Login />
            },
            {
                path: "register", // 👉 /register
                element: <Register />
            },
        ]
    }
]);

export default router;
