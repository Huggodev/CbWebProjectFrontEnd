import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Shifts from '../pages/Shift/Shifts';
import Products from '../pages/Product/Products';
import Course from '../pages/Course/Courses';


const routes = [
    {path: '/', element: <Home/>, exact: true },
    {path: '/About', element: <About/>},
    {path: '/Contact', element: <Contact/>},
    {path: '/Login', element: <Login/>},
    {path: '/Shifts', element: <Shifts/>},
    {path: '/Products', element: <Products/>},
    {path: '/Course', element: <Course/>},
]

function SimpleRoutes () {

    return (
        <Routes>
            <Route path="/" element = {<Outlet/>}>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>
                ))}
            </Route>
        </Routes>
    );
    
};

export default SimpleRoutes;