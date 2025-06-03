import data from "../utils/NavData";
import { Menu } from "lucide-react";
const Navigationbar = () => {
  return (
    <div className="min-h-[6rem] w-[100%] p-3 flex justify-between items-center sticky top-0">
      <p className="text-[#87CEEB] text-[1.1rem]">
        <span className="text-white">Urara.</span>DEV
      </p>


      <div className="flex lg:hidden cursor-pointer">
        <Menu size={35} color="white"/>
      </div>

      <div className="hidden lg:flex gap-10 text-[0.9rem]">
        {data.map((pro, index) => {
          return (
            <div key={index}>
              <p className={`text-[${pro.color}]`}>{pro.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigationbar;
