import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages';
import About from './pages/about';
import User from './pages/users/user';
import ContactUs from './pages/about/contact-us';
import Products from './pages/products';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/about/contact-us',
    element: <ContactUs />,
  },
  // dynamic path
  {
    path: '/users/:id',
    element: <User/>,
  },
  {
    path: '/products',
    element: <Products/>
  },
]

const BrowserRouter = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <RouterProvider router={BrowserRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
