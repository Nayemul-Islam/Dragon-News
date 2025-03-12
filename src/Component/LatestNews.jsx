import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  const [allNews, setNews] = useState([]);
  useEffect(() => {
    fetch("../../public/news.json")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="mt-2 flex p-2 bg-base-200">
      <button className="btn btn-secondary ml-1">Latest</button>
      <Marquee speed={90}>
        {allNews.map((news) => <p key={news._id}>{news.title}&nbsp; | &nbsp;</p>)}
      </Marquee>
    </div>
  );
};

export default LatestNews;
