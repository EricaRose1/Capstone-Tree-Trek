import { NavLink, redirect, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';



import "./NavBar.css"


function NavBar() {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const nav = useNavigate();

    const signout = () => {
        redirect('/');
        removeCookie('Email')
        removeCookie('AuthToken')
        
    }

    return (
        <div>
            <ul className='navbar'>
                <li>
                    <NavLink exact to='/parkcard' className='link'>Parks</NavLink>
                </li>
                <li>
                    <NavLink exact to='/campinglist' className='link'>Camping Checklist</NavLink>
                </li>
                
            </ul>
            <button className='SignOut' onClick={signout} >Sign Out</button>
            
        </div>
    )
}
export default NavBar;