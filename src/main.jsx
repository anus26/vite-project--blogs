
import './index.css'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Home.jsx";
import Layout from "./components/Layout.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";
import Dashboard from './Dashboard.jsx';
import Notfound from "./Notfound.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'Home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
