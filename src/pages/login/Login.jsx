import React from 'react'
import "./login.scss"
import Register from '../register/Register'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
          <span>Dont you have an account</span>
          <Link to="/register">
            <button className='btn-secondary'>Register</button>
          </Link>

        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='password' />
            <button className='btn-primary'>Login</button>
          </form>
        </div>
      </div>
      <div className="mobile">
      <span>Dont you have an account</span>
          <Link to="/login" style={{color: "white"}}>
          Register
          </Link>
      </div>
    </div>
  )
}

export default Login