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
// import ErrorElement from './Components/ErrorElement';
// import { productsAndCartData } from './Loaders/DataLoad'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorElement></ErrorElement>,
    // loader: productsAndCartData(),
    children:[
      { path: '/', element: <Home /> },
      { 
        path: '/shop', 
        element: <Shop></Shop> , 
        loader: () => fetch('products.json'),
      },
      { path: '/cart', element: <Cart /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
      // { path: 'loader', element: <LoadingSpinner />, },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <Toaster /> */}
  </>
)
