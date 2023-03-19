import {FiSettings } from "react-icons/fi";
import {GoReport} from "react-icons/go";
import {AiOutlineSave } from "react-icons/ai";

export const sidebarData = [
    {
        title: 'Settings',
        path: '/socialgram',
        icon: <FiSettings/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/save',
        icon: <AiOutlineSave/>,
        cName: 'nav-text'
    },
    {
        title: 'Report a Problem',
        path: '/report',
        icon: <GoReport/>,
        cName: 'nav-text'
    },    
]