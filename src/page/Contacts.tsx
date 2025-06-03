import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Contacts = () => {
  return (
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
       
  )
}

export default Contacts