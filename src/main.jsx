
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root';
import Home from './page/home/Home';
import RentCar from './shared/component/rentCar/component/RentCar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/rentCar/:id',
        element:<RentCar></RentCar>     
       }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
