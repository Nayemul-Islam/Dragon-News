import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const RightNavBar = () => {
     const [newsCategories, setNewsCategories] = useState([]);
      useEffect(() => {
        fetch("../../public/categories.json")
          .then((response) => response.json())
          .then((data) => setNewsCategories(data));
      }, []);
        
    return (
        <div>
            <h1 className='text-xl mb-2 '> All Category</h1>
            <ul className='bg-base-200 p-2'>
                {
                    newsCategories.map(news => <li key={news.id} className='mb-2 text-xl'> <NavLink to = "/login">{news.name}</NavLink></li> )
                }
            </ul>
        </div>
    );
};

export default RightNavBar;