import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import App from './App';
import BookDetails from './Components/BookDetails';
import LoadingSpinner from './Components/LoadingSpinner';
import ErrorElement from './Components/ErrorElement';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'loader',
        element: <LoadingSpinner />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
