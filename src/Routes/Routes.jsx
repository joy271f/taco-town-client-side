import React from 'react';
import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import ChefDetails from '../pages/Home/ChefDetails/ChefDetails';
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/chef-details/:id',
        element: <PrivetRoute>
          <ChefDetails />
        </PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef-details/${params.id}`)
      }
    ]
  }
]);


export default router;