import { Outlet } from "react-router-dom"
import Navigationbar from "../components/Navigationbar";
const MainOutlet = () => {
  return (
   <div className="w-[100%] min-h-[100vh] pl-2 pr-2 flex flex-col justify-center items-center bg-[#21242C]">


    <div className="  w-[90%] sm:w-[80%] md:w-[70%]  lg:w-[60%] min-h-[100vh] ">
   <Navigationbar/>
   <Outlet/>
    </div>

   </div>
  )
}

export default MainOutlet;