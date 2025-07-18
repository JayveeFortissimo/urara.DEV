import data from "../utils/NavData";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

interface props{
  handleClick: ()=> void
}

const Navigationbar: React.FC<props> = ({handleClick}) => {



  return (
    <div className="min-h-[6rem] w-[100%] p-3 flex justify-between items-center sticky top-0 z-50">
      <p className="text-[#87CEEB] text-[1.1rem]">
        <span className="text-white">Urara.</span>DEV
      </p>

      <div 
    onClick={handleClick}
      className="flex lg:hidden cursor-pointer">
        <Menu size={35} color="white"/>
      </div>

      <div className="hidden lg:flex gap-10 text-[0.9rem]">
        {data.map((pro, index) => {
          return (
            <div key={index}>
              <NavLink  to={pro.links} className={ ({isActive}) => `${isActive ? 'underline':undefined} text-[${pro.color}] cursor-pointer`}>{pro.name}</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigationbar;
