import React from 'react'
import "./register.scss"
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>ITU ITIRAF</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
          <span>Already have an account</span>
          <Link to="/login">
          <button className='btn-secondary'>Login</button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form >
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button className='btn-primary'>Register</button>
          </form>
        </div>
      </div>
      <div className="mobile">
      <span>Already have an account</span>
          <Link to="/login" style={{color: "white"}}>
          Login
          </Link>
      </div>
    </div>
  )
}

export default Register