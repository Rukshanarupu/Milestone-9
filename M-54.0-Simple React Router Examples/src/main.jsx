import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorElement from './components/ErrorElement/ErrorElement';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Contact from './Components/Contact/Contact';
import Posts from './Components/Posts/Posts';
import First from './Components/First/First';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import PostDetail from './Components/PostDetail/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <First></First>
      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path:'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
