import image from "../assets/logo.png";
import { MoveRight, ArrowRightToLine, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Myprojects from "../utils/Project";
import Tools from "../utils/Tools";
import { useNavigate } from "react-router-dom";
const HomePage = () => {

  const redirect = useNavigate();

  return (
    <div className="min-h-[100vh] w-full flex flex-col justify-center items-center gap-[10rem] ">
      <div className="min-h-[70vh] flex flex-col justify-center items-center gap-6">
        <img src={image} alt="" className="h-[20rem]" />

        <div className="flex flex-col items-center">
          <h1 className="text-[2.2rem] sm:text-[2.3rem] lg:text-[3rem] text-white text-center ">
            I'm a{" "}
            <span className="text-[#87CEEB]">fullstack web developer</span>
          </h1>
          <p className="text-[1.1rem]  sm:text-[1.1rem] lg:text-[1.5rem] text-[#9CA3AF] text-center">
            Always learning and improving my skills
          </p>
        </div>

        <button 
        onClick={()=> redirect('contact')}
        className="border border-[#87CEEB] text-[#87CEEB] h-[3rem] w-[7rem] cursor-pointer">
          Contact Me
        </button>
      </div>

      {/* //PROJECTS//*/}

      <div className="w-[100%] min-h-[100vh] flex flex-col gap-10">
        <div className="h-[4rem] flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-3">
            <p className="text-[1.5rem] text-white">
              <span className="text-[#87CEEB] ">#</span>Projects
            </p>
            <div className="h-[0rem] w-[25rem] border border-[#87CEEB] hidden sm:flex"></div>
          </div>

          <div 
          onClick={()=> redirect('works')}
          className="flex flex-wrap items-center text-white gap-3">
            <p className="text-[1rem] cursor-pointer">View all</p>
            <MoveRight />
          </div>
        </div>

        <div className="mi-h-[auto] w-full flex justify-center text-white gap-6 flex-wrap ">
          {Myprojects.map((pro,index) => {
            return (
              <div 
              key={index}
              className="border border-white h-[30rem] flex flex-col justify-center items-center gap-4 flex-auto p-3 rounded shadow-2xl">
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
        {/* // */}

        {/* MY TECHNOLOGIES */}
        <div className="min-h-[50vh] flex flex-col gap-10 mt-20">
          <div className="h-[4rem] flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-3">
              <p className="text-[1.5rem] text-white">
                <span className="text-[#87CEEB] ">#</span>Tools
              </p>
              <div className="h-[0rem] w-[25rem] border border-[#87CEEB] hidden sm:flex"></div>
            </div>

            <div className="flex flex-wrap items-center text-white gap-3"></div>
          </div>
          {/*  */}
          <div className="h-auto p-3  flex justify-between items-center flex-wrap gap-3">
            {Tools.map((pro, index) => {
              return (
                <div key={index}>
                  <img src={pro.img} alt="" />
                </div>
              );
            })}
          </div>
          {/* ABOUT ME */}

          <div className="min-h-[50vh] flex flex-col gap-10 mt-20">
            <div className="h-[4rem] flex items-center justify-between flex-wrap">
              <div className="flex items-center gap-3">
                <p className="text-[1.5rem] text-white">
                  <span className="text-[#87CEEB] ">#</span>About Me
                </p>
                <div className="h-[0rem] w-[25rem] border border-[#87CEEB] hidden sm:flex"></div>
              </div>

              <div className="flex flex-wrap items-center text-white gap-3"></div>
            </div>
            {/*  */}
            <div className="min-h-[50vh] text-white flex flex-col gap-[2rem]">
                <p>Hi! I'm Jayvee, a passionate Fullstack Developer and a soon-to-be graduate with a strong drive for building meaningful and user-focused digital experiences.</p>
                <p>Over the past few years, I’ve been diving deep into both frontend and backend technologies—designing intuitive interfaces and developing efficient, scalable systems. Whether it’s crafting a clean UI or architecting a robust API, I enjoy the full spectrum of web development and love seeing a project come to life from start to finish.</p>
                <p>I'm constantly learning and exploring new tools and frameworks to sharpen my skills and stay up to date with the ever-evolving tech landscape. My goal? To create impactful solutions that solve real problems and bring value to users.</p>
            <p>When I'm not coding, you'll find me collaborating with teams, learning new technologies, or fine-tuning personal projects. I'm excited to grow professionally and make a mark in the tech industry.</p>
            <p>Let’s build something amazing together!</p>
            
            </div>
            
          </div>

          {/* CONTACTS */}
          <div>
            <div className="h-[4rem] flex items-center justify-between flex-wrap">
              <div className="flex items-center gap-3">
                <p className="text-[1.5rem] text-white">
                  <span className="text-[#87CEEB] ">#</span>Contact
                </p>
                <div className="h-[0rem] w-[25rem] border border-[#87CEEB] hidden sm:flex"></div>
              </div>

              <div className="flex flex-wrap items-center text-white gap-3"></div>
            </div>
            {/*  */}
          <div className="min-h-[10rem] text-white flex gap-10 mt-6 justify-center  lg:justify-start">
                <Facebook size={28}  />
                <Instagram size={28}  />
                <Linkedin size={28}/>
                <Mail size={28}/>
          </div>
          </div>
        </div>

        {/* To outside this */}
      </div>

      {/*  */}
    </div>
  );
};

export default HomePage;
