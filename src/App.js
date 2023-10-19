import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Food from "./components/Food";
import Categories from "./components/Categories";
import Message from "./components/Message";

const App = () => {
  return <>
    <Navbar/>
    <Hero/>
    <HeadlineCard/>
    <Food/>
    <Categories/>
    <Message/>
  </>;
};

export default App;

