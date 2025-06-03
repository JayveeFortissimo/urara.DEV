import {ArrowRightToLine } from "lucide-react";
import Myprojects from "../utils/Project";

const Works = () => {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col gap-10">
        <div className="h-[4rem] flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-3">
            <p className="text-[1.5rem] text-white">
              <span className="text-[#87CEEB] ">#</span>Projects
            </p>
            <div className="h-[0rem] w-[25rem] border border-[#87CEEB] hidden sm:flex"></div>
          </div>

          
        </div>

        <div className="mi-h-[auto] w-full flex justify-center text-white gap-6 flex-wrap ">
          {Myprojects.map((pro) => {
            return (
              <div className="border border-white h-[30rem] flex flex-col justify-center items-center gap-4 flex-auto p-3 rounded shadow-2xl">
                <img src={pro.image} className="h-[13rem]" />
                <p className="text-2xl">{pro.name}</p>
                <p className="text-center">{pro.description}</p>
                <div className="flex items-center gap-2 border border-[#87CEEB] p-2 cursor-pointer hover:bg-blue-400">
                  <p className="text-[0.9rem]">See</p>
                  <ArrowRightToLine />
                </div>
              </div>
            );
          })}
        </div>
        </div>
  )
}

export default Works