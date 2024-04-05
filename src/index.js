import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Signup from './pages/Signup';
import { SendMoney } from './pages/Send';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { UserProvider } from './UserContext';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/send',
    element:<SendMoney/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserProvider>
    <RouterProvider router={appRouter} />
  </UserProvider>
      
  </React.StrictMode>
);
