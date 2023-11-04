
// Main file

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import About from './components/About'
import Reports from "./components/Reports"
import Science from './components/Science'
import Register from './components/Register'
import Login from './components/Login'

import ReactGA from "react-ga4";  // For Google Analytics

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "reports",
    element: <Reports />,
  },
  {
    path: "science",
    element: <Science />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);


// This key should be in .env
ReactGA.initialize("G-H2D7LY8XME");
ReactGA.send({ hitType: "pageview", page: window.location.pathname});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
