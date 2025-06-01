import image from "../assets/logo.png";
import { MoveRight } from "lucide-react";
const HomePage = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-col justify-center items-center gap-[10rem] ">
      <div className="min-h-[80vh] flex flex-col justify-center items-center gap-6">
        <img src={image} alt="" className="h-[20rem]" />

        <div className="flex flex-col items-center">
          <h1 className="text-[2.5rem] sm:text-[2.3rem] lg:text-[3rem] text-white text-center ">
            I'm a{" "}
            <span className="text-[#87CEEB]">fullstack web developer</span>
          </h1>
          <p className="text-[1.1rem]  sm:text-[1.1rem] lg:text-[1.5rem] text-[#9CA3AF] text-center">
            Always learning and improving my skills
          </p>
        </div>

        <button className="border border-[#87CEEB] text-[#87CEEB] h-[3rem] w-[7rem] cursor-pointer">
          Contact Me
        </button>
      </div>

      {/* ===============================PROJECTS================================================================ */}

      <div className="w-[100%] min-h-[100vh]">
        <div className="h-[4rem] flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-3">
            <p className="text-[2rem] text-white">
              <span className="text-[#87CEEB] ">#</span>projects
            </p>
            <div className="h-[0rem] w-[25rem] border border-[#87CEEB] hidden sm:flex"></div>
          </div>

          <div className="flex flex-wrap items-center text-white gap-3">
            <p className="text-[1rem]">View all</p>
            <MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
