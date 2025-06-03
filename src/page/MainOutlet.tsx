import { Outlet } from "react-router-dom";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { useState } from "react";

const MainOutlet = () => {

  const [isClick, setClicked] = useState(false);
  const handleClick = () => setClicked(pro => !pro);

  
  return (
    <div className="w-[100%] min-h-[100vh] pl-2 pr-2 flex flex-col justify-center items-center bg-[#21242C] relative">
      {/* For Humburger Bar */}
     {
      isClick && 
      (
         <div className="min-h-[auto]  bg-white fixed top-20 w-full filter lg:hidden">
        <div className="min-h-[5rem] text-[1.3rem] flex justify-start items-center pl-3 hover:bg-[#21242C] cursor-pointer">
          <h1>Home</h1>
        </div>
        <div className="min-h-[5rem] text-[1.3rem] flex justify-start items-center pl-3 hover:bg-[#21242C] cursor-pointer">
          <h1>Works</h1>
        </div>
        <div className="min-h-[5rem] text-[1.3rem] flex justify-start items-center pl-3 hover:bg-[#21242C] cursor-pointer">
          <h1>About Me</h1>
        </div>
        <div className="min-h-[5rem] text-[1.3rem] flex justify-start items-center pl-3 hover:bg-[#21242C] cursor-pointer">
          <h1>Contact</h1>
        </div>
      </div>
      )
     }
      {/*  */}
      <div className="  w-[90%] sm:w-[80%] md:w-[70%]  lg:w-[60%] min-h-[100vh] ">
        {/* In Humburger Bar */}

        <Navigationbar  handleClick={handleClick}/>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainOutlet;
