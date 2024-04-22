import React,{ useContext, useState, useRef} from 'react';
import './globals.css';
import { useRouter } from 'next/navigation';




const Nav = () => {
  const backend = 'http://localhost:5000'
 const router = useRouter();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const logout = () => {
    sessionStorage.removeItem("user");
    setLoggedin(false);
    router.push('/')
  };

  const [loggedin, setLoggedin] = useState(currentUser ? true : false);

  const avatarUrl = useRef(
    "https:localhost5000/uploads/"
  );
  

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  const userJSON = sessionStorage.user ? JSON.parse(sessionStorage.user) : null;
  const user = userJSON !== null ? userJSON : null;
  
  



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="/">
            <div className="homebutton">

              <div className="box">M</div>
              <div className="box">E</div>
              <div className="box">D</div>
              <div className="box">A</div>
              <div className="box">S</div>
              <div className="box">S</div>
              <div className="box">U</div>
              <div className="box">R</div>
              <div className="box">E</div>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
        
          
    <div>
      <label className="popup">
 
      <input type="checkbox" />
      <div className="avatar_background">
  <div className="user-picture" tabIndex={0}>
    {loggedin ? (<img
                src={"http://localhost:5000/" + user.avatar}
                alt="Avatar"
                className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
              />) : (<><img src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="" /></>) }
  
    <span />
    <span />
    <span />
    </div>
  </div>
  
  <nav className="popup-window">
    
    <ul>
      {loggedin ? (<><li>
        <a href="Userprofile" className='nounderline'>
        <button>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height={14}
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
          </svg>
          <span>Profile</span>
        </button>
        </a>
      </li>
      <hr />
      <li>
        <button  onClick={logout}>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height={14}
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y2={18} x2={6} y1={6} x1={18} />
            <line y2={18} x2={18} y1={6} x1={6} />
          </svg>
          <span>Log Out</span>
        </button>
      </li>
      </>) :  (
        <><li>
        <a href="Userlogin" className='nounderline'>
        <button>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height={14}
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle r={4} cy={7} cx={9} />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>User Login</span>
        </button>
        </a>
      </li>
      <li>
        <a href="signup" className='nounderline'>
        <button>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height={14}
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <span>Sign up</span>
        </button>
        </a>
      </li>
        </>
      )}
      <hr />
     
      <li>
        <a href="doctorlogin" className='nounderline'>
        <button>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height={14}
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle r={4} cy={7} cx={9} />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>Doctor Login</span>
        </button>
        </a>
      </li>
      
    </ul>
  </nav>
</label>

        
        
      </div>

        </div>
      </nav>
    </div>
  );
}

export default Nav;