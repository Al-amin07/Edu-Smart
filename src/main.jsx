import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Authentication/Login.jsx";
import Register from "./Components/Authentication/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import CreateAssignment from "./Components/Assignments/CreateAssignment.jsx";
import PendingAssingment from "./Components/Assignments/PendingAssingment.jsx";
import Private from "./Components/Private/Private.jsx";
import Assignments from "./Components/Assignments/Assignments.jsx";
import Update from "./Components/Assignments/Update.jsx";
import Details from "./Components/Assignments/Details.jsx";
import SubmitAssignment from "./Components/Assignments/SubmitAssignment.jsx";
import MySubmission from "./Components/Assignments/MySubmission.jsx";
import Mark from "./Components/Assignments/Mark.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/createassignment',
        element: <Private><CreateAssignment></CreateAssignment></Private>
      },
      {
        path: '/pendingassignment',
        element: <Private><PendingAssingment></PendingAssingment></Private>
      },
      {
        path: '/assignment',
        element: <Assignments></Assignments>
      },
      {
        path: '/update/:id',
        element: <Private><Update></Update></Private>,
        loader: ({params}) => fetch(`https://assignment-11-server-4.vercel.app/update/${params.id}`)
        
      },
      {
        path: '/details/:id',
        element: <Private><Details></Details></Private>,
       
      },
      {
        path: '/details/:id/takeAssignment/:id',
        element: <Private><SubmitAssignment></SubmitAssignment></Private>,
        
      },
      {
        path: '/mysubmission',
        element: <Private><MySubmission></MySubmission></Private>
      },
     
      {
        path: '/getMark/:id',
        element: <Mark></Mark>,
        loader: ({params}) => fetch(`https://assignment-11-server-4.vercel.app/getMark/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
