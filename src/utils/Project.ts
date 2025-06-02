import {ProjectConfiguration} from '../../interface/project.interface';
import cristobal from '../assets/Cristobal.png';
import multibook from '../assets/Multibook.png';
import portfolio from '../assets/Portfolio.png';

const Myprojects: ProjectConfiguration[] = [
    {
        image:`${cristobal}`,
        name:'Cristobal Collection',
        description:'This is my capstone project about gown rental reservation system.',
        link:`https://cristobals.vercel.app/`
    },
     {
        image:`${multibook}`,
        name:'Multibook',
        description:'This is one that i do on my intern days on Geer IT Solution.',
        link:`https://test-multibook.geertest.com/`
    },
     {
        image:`${portfolio}`,
        name:'Portfolio',
        description:'This is my own portfolio.',
        link:`uraradev.netlify.app`
    },
]


export default Myprojects;