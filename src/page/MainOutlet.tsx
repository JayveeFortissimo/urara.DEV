import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import data from "../utils/NavData";
const MainOutlet = () => {
  const [isClick, setClicked] = useState({
    isClick: false,
  });
  const handleClick = () =>
    setClicked((pro: any) => ({ ...pro, isClick: !pro.isClick }));
  const redirect = useNavigate();
  const changeLocation = (pro: any) => {
    redirect(pro.links);
    setClicked((pro: any) => ({ ...pro, isClick: false }));
  };

  return (
    <div className="w-[100%] min-h-[100vh] pl-2 pr-2 flex flex-col justify-center items-center bg-[#21242C] relative">
      {/* For Humburger Bar */}
      {isClick.isClick && (
        <div className="min-h-[auto]  bg-white fixed top-20 w-full filter lg:hidden">
          {data.map((pro, index) => {
            return (
              <div
                key={index}
                onClick={() => changeLocation(pro)}
                className="min-h-[5rem] text-[1.3rem] flex justify-start items-center pl-3 hover:bg-[#21242C] cursor-pointer"
              >
                <h1>{pro.name}</h1>
              </div>
            );
          })}
        </div>
      )}
      {/*  */}
      <div className="  w-[90%] sm:w-[80%] md:w-[70%]  lg:w-[60%] min-h-[100vh] ">
        {/* In Humburger Bar */}

        <Navigationbar handleClick={handleClick} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainOutlet;
