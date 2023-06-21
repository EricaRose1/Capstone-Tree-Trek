import { NavLink, useNavigate } from 'react-router-dom';
import {FiArrowLeftCircle} from "react-icons/fi";


import "./NavBar.css"


function NavBar() {
    const nav = useNavigate();
    return (
        <div>
            <ul className='navbar'>
                <li>
                    <NavLink exact to='/parkcard' className='link'>Parks</NavLink>
                </li>
                <li>
                    <NavLink exact to='/CampingList' className='link'>Camping Checklist</NavLink>
                </li>
            </ul>
            <button className="BackBtn" onClick={() => nav(-1)}>Back</button>
        </div>
    )
}
export default NavBar;