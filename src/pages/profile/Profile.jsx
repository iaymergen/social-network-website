import React from 'react'
import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        
        <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize='large' />
            </a>
          </div>
          <div className="center">
            <div className="item"><span>Jane Doe</span></div>
            <div className="info">
              <div className="item"><p>Computer Enginnering</p></div>
            </div>
            
             <button>Follow</button>
          </div>
         
          <div className="right">
            <EmailOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="post-div"><Posts /></div>
      

    </div>
  )
}

export default Profile