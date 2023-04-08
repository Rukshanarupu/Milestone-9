import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
