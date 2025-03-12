import React from "react";
import logo from "../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <div>
      <img src={logo} className="mx-auto mt-8" />

      <p className="text-center mt-2">Journalism Without Fear or Favour</p>
      <p className="text-center mt-2">{moment().format("dddd, MMMM D, YYYY.")}</p>
    </div>
  );
};

export default Header;