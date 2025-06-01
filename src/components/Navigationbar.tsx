import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navigationbar = () => {
  const [links, useLinks] = useState([
    {
      name: "Home",
      color: "#9CA3AF",
    },
    {
      name: "Works",
      color: "#9CA3AF",
    },
    {
      name: "About-Me",
      color: "#9CA3AF",
    },
    {
      name: "Contacts",
      color: "#9CA3AF",
    },
  ]);

  return (
    <div className="min-h-[6rem] w-[100%] p-3 flex justify-between items-center sticky top-0">
      <p className="text-[#87CEEB] text-[1.1rem]">
        <span className="text-white">Urara.</span>DEV
      </p>

      <div className="hidden lg:flex gap-10 text-[0.9rem]">
        {links.map((pro, index) => {
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
