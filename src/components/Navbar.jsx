import React from "react";
import { Link } from "react-router-dom";
import cloudyLogo from "../assets/images/cloudy-img.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo-brand">
            <Link>
              <img className="img-fluid" src={cloudyLogo} alt="logo" />
              <span className="align-self-cente">Weather Today</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
