import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Marquee from "react-fast-marquee";
import LatestNews from "./LatestNews";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <>
      <Header> </Header>
      <LatestNews />
      <NavBar> </NavBar>

      <div className=" mt-2 gap-2 text-center grid sm:grid-cols-1  md:grid-cols-4 ">
        <RightNavBar></RightNavBar>
        <div className="sm:col-span-1 md:col-span-2">
          <h1 className="text-2xl mb-1"> Dragon News Home</h1>
          {allNews.slice(0, 12).map((news) => (
            <NewsCard key={news._id} comeFrom = "home" news={news}></NewsCard>
          ))}
        </div>

        <LeftNavBar come = "home"></LeftNavBar>
      </div>
    </>
  );
};

export default Home;
