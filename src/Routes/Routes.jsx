import React from 'react';
import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import LoginLayout from '../Layout/LoginLayout';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:'/',
            element:<Home />
        }
      ]
    },
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path:'/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
  ]);


export default router;