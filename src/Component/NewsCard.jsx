import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news, comeFrom }) => {
  const { title, image_url, details, _id } = news;
  let newsSize = details.length;
  if (comeFrom === "home") newsSize = 400;
  else if(comeFrom == "rightNav") newsSize = 250;



  return (
    <div className="card bg-base-200 mb-1 w-full shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <figure>
          <img src={image_url} alt="" />
        </figure>
        {details.length > newsSize ? (
          <p>
            {details.slice(0, newsSize)} <br />{" "}
            <Link to={`/news/${_id}`} className="font-bold text-blue-700">
              {" "}
              See More....
            </Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
