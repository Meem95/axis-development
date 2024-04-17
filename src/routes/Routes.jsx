
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ResidentialDetails from "../pages/ResidentialDetails/ResidentialDetails";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/EditProfile/EditProfile";
import Profile from "../pages/Profile/Profile";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                loader: () => fetch('/residential.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

            {
                path: '/residential/:id', 
                element: <PrivateRoute><ResidentialDetails></ResidentialDetails></PrivateRoute>,
                loader: () => fetch('/residential.json')
            },
            
            {
                path: '/profile', 
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
               
            },
            {
                path: '/blog', 
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
                loader: () => fetch('/blog.json')
            },
            {
                path: '/edit-profile', 
                element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>,
               
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
              path: '*',
              element: <ErrorPage/>
            }
        ]
    }    

]);

export default router;