import './index.scss';
import { NavLink } from 'react-router-dom';


function NavBar({closeMobileNavBar}) {
    return (
        <>
            <NavLink onClick={closeMobileNavBar} to='/categories'>
                CATEGORIES
            </NavLink>
            <NavLink onClick={closeMobileNavBar} to='/product?id=1'>
                PRODUCTS PAGE
            </NavLink>
        </>
    )
}
export default NavBar;