import "./sidebar.css";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
/*Hamburger Menu*/
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { sidebarData } from "./sidebarData";


const Sidebar = () => {
  const [sideBar, setsideBar] = useState(false);
  const showSideBar = () => setsideBar(!sideBar);
  return (
    <>
      <div className="sidebar">
        <div className="sidebarTop">
          <div className="title">Socialgram</div>
        </div>
        <div className="sidebarCentre">
          <div>
            <div className="icons">
              <AiOutlineHome />
            </div>
            <Link to="/socialgram" className="link">
            <div className="iconName">Home</div>
            </Link>
          </div>
          <div>
            <div className="icons">
              <AiOutlineSearch />
            </div>
            <div className="iconName">Search</div>
          </div>
          <div>
            <div className="icons">
              <MdOutlineExplore />
            </div>
            <div className="iconName">Explore</div>
          </div>
          <div>
            <div className="icons">
              <AiOutlineMessage />
            </div>
            <div className="iconName">Message</div>
          </div>
          <div>
            <div className="icons">
              <AiOutlineHeart />
            </div>
            <div className="iconName">Notifications</div>
          </div>
          <div>
            <div className="icons">
              <BiEditAlt />
            </div>
            <div className="iconName">Create</div>
          </div>
          <div>
            <div className="profile">
              <img src="images/people/1.jpg" alt="" />
            </div>
            <Link to="/profile" className="link">
            <div className="iconName">Profile</div>
            </Link>
          </div>
        </div>
        <div className="sidebarBottom">        
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSideBar} /> 
        </Link>          
        <span>More</span>
        </div>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
                <>
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>                
                <hr />
                </>
            );
          })}
          <li>Switch accounts</li>
          <hr />
          <li>Log out</li>
          
        </ul>
      </nav>
      
    </>
  );
};

export default Sidebar;
