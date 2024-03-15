import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutMe />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />)
