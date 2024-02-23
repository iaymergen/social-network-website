
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Confess from './pages/confess/Confess'
import Profile from './pages/profile/Profile';
import "./App.css"

import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"

function App() {

  const currentUser = false;

  const Layout = () =>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        { 
          path: "/profile/:id",
          element: <Profile/>
        },
        {
          path: "/confess",
          element: <Confess/>
        },
        
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ]);
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
