import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import PopularThisWeek from "../components/PopularThisWeek";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <PopularThisWeek />
      <GetStarted />
      <Footer />
      {/* <div className="home">Home Page</div> */}
    </>
  );
}

export default Home;
