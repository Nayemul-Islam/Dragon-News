import React from "react";
import Header from "./Header";
import LeftNavBar from "./LeftNavBar";
import NavBar from "./NavBar";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
const NewsDetail = () => {
  const param = useParams();
  console.log(param);
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className=" mt-2 gap-2 text-center grid sm:grid-cols-1  md:grid-cols-4 ">
        <div className="sm:col-span-1 md:col-span-3 bg-">
          <h1 className="text-2xl mb-1 text-left"> Dragon News</h1>
          <NewsCard comeFrom= "NewsDetail" news={news.find(aNews => aNews._id === param.id)}></NewsCard>
        </div>
        <LeftNavBar come="newsDetail"></LeftNavBar>
      </div>
    </div>
  );
};

export default NewsDetail;
