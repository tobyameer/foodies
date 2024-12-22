import React from "react";
import Cards from "../components/Cards";
import Food from "../components/Food";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Hero />
        <Cards />
        <Food />
        <Category />
      </div>
    </div>
  );
};

export default Home;
