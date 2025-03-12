import React from 'react';
import { FaFacebook, FaGithub, FaGoogle,FaTwitter,FaInstagram } from "react-icons/fa6";
import swimming from "../assets/swimming.png"
import Class from "../assets/class.png"
import PlayGround from "../assets/playground.png"
import bg from "../assets/bg.png"


const LeftNavBar = () => {
    return (
        <div className='p-2'>
           <h1 className="text-xl mb-2">Login With</h1>
           <button className="btn btn-outline btn-secondary w-full mb-1"> <FaGoogle></FaGoogle> Login With Google</button>
           <button className="btn btn-outline btn-secondary w-full"> <FaGithub></FaGithub> Login With GitHub</button>

           <h1 className="text-xl mt-5 mb-5 ">Find Us On</h1>
           <button className="btn btn-outline btn-info w-full mb-1"> <FaFacebook></FaFacebook> Facebook</button>
           <button className="btn btn-outline btn-info w-full"> <FaTwitter></FaTwitter>Twitter</button>
           <button className="btn btn-outline btn-info w-full"> <FaInstagram></FaInstagram>Instagram</button>

           <div className='p-4 bg-base-200 mt-5 space-y-5 '>
           <h1 className="text-xl ">Q-Zone</h1>
           <div className=' flex justify-center'><img src= {swimming} alt="" /></div>
           <div className=' flex justify-center'><img src= {Class} alt="" /></div>
           <div className=' flex justify-center'><img src= {PlayGround} alt="" /></div>
           </div>
          <img src= {bg} className='mt-5 w-full' alt="" />
        </div>
    );
};

export default LeftNavBar;