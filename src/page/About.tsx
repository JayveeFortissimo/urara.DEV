

const About = () => {
  return (
     <div className="min-h-[50vh] flex flex-col gap-10">
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
  )
}

export default About