import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const RightNavBar = () => {
  const allNews = useLoaderData();
  const [newsCategories, setNewsCategories] = useState([]);
  useEffect(() => {
    fetch("../../public/categories.json")
      .then((response) => response.json())
      .then((data) => setNewsCategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-2 "> All Category</h1>
      <ul className="bg-base-200 p-2">
        {newsCategories.map((news) => (
          <li key={news.id} className="mb-2 text-xl">
            {" "}
            <NavLink to="/login">{news.name}</NavLink>
          </li>
        ))}
      </ul>
      {allNews.slice(10,23).map((news) => (
        <NewsCard key={news._id} comeFrom = "rightNav" news={news}></NewsCard>
      ))}
    </div>
  );
};

export default RightNavBar;
