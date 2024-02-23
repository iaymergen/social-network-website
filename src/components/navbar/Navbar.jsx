import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss"


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}><span>lorem</span></Link>
                <Link to="/" style={{ textDecoration: "none" }}><HomeIcon className='homeIcon' /></Link>

                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <Link to="/profile/1" style={{ textDecoration: "none" }}><PersonOutlinedIcon /></Link>


                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>İpek</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar