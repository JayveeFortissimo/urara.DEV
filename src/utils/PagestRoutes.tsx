import HomePage from "../page/HomePage";
import MainOutlet from "../page/MainOutlet";
import Works from "../page/Works";
import About from "../page/About";
import Contacts from "../page/Contacts";

const MainOutletPage: React.FC = () => <MainOutlet/>;
const Homepages: React.FC = () => <HomePage/>;
const Work: React.FC = () => <Works/>
const Abouts: React.FC = () => <About/>
const Contact: React.FC = () => <Contacts/>


export {Homepages, MainOutletPage, Work, Abouts, Contact}