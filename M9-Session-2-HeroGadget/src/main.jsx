import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home';
import About from './Components/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import App from './App';
import Cart from './Components/Cart';
import Shop from './Components/Shop';
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
        path: '/shop',
        element: <Shop></Shop>,
      },
      // {
      //   path: 'book/:id',
      //   element: <BookDetails></BookDetails>,
      //   loader: ({ params }) =>
      //     fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      // },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      // {
      //   path: 'loader',
      //   element: <LoadingSpinner />,
      // },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
