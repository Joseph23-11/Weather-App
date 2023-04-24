import React from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/background.png";
import MainCard from "../components/MainCard";

export default function Dashboard() {
  return (
    <div>
      <div className="body-app">
        <Navbar />
        <MainCard />
      </div>
    </div>
  );
}
