import React from "react";
import "./Home.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='bg'>
      <div className='center'>
        <div className='headingStyle'>
          <img src={logo} alt='logo' />
        </div>
        <div className='property'>
          <div>
            <p className='text1'>Property management made easy!</p>
            <hr className='hr' />
            <p className='text2'>
              Zenhomes is the one-stop-shop for private landlords and property
              managers. Our digital platform makes property & tenant management
              easy and smart.
            </p>
          </div>

          <div className='button'>
            <Link to='/register' className='link'>
              Sign up
            </Link>
            <Link to='/login' className='link'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
