import { CalendarRange, Mail } from "lucide-react";
const Footer = () => {
  return (
    <div className="min-h-[5rem] text-white flex justify-center flex-col sm:flex-row  sm:justify-between items-center flex-wrap mt-10 gap-10 pb-3">

        <div className="flex gap-3">
            <Mail />
              <p>Jayvee Maniquiz</p>
        </div>
    

      <div className="flex gap-3 items-center">
        <CalendarRange />
           <p>2025</p>
      </div>
   
      <div className="flex gap-10 flex-wrap text-[0.8rem]">
        <p>Home</p>
        <p>Works</p>
        <p>About-Me</p>
        <p>Contacts</p>
      </div>
    </div>
  );
};

export default Footer;
