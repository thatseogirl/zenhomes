import React from "react";
import "./Home.css";
import zenhomez from "../images/zenhomez.jpg";
import property from "../images/property.jpg";
import { Button, Link } from "@mui/material";

function Home() {
  return (
    <div className="container">
      <div className="headingStyle">
        <img src={zenhomez} alt="zenhomes" />
        <img src={property} alt="property" />
      </div>
      <div className="buttons">
      <div className="signup">
        <p><h1>Signup for free</h1>
        <Button variant="contained" href="/register">
          {"Sign up"}
        </Button>
        </p>
        </div>

         <div className="login">
        <p> <h1>Already Signed up?</h1>
        <Button variant="contained" href="/register">
          {"Login"}
        </Button>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
