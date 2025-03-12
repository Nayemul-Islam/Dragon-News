import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Marquee from "react-fast-marquee";
import LatestNews from "./LatestNews";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";

const Home = () => {
  return (
    <>
      <Header> </Header>
      <LatestNews />
      <NavBar> </NavBar>

      <div className=" mt-2 text-center grid sm:grid-cols-1  md:grid-cols-4 ">
        <RightNavBar></RightNavBar>
        <div className="col-span-1 md:col-span-2">Column 2</div>
        <LeftNavBar></LeftNavBar>
      </div>
    </>
  );
};

export default Home;
