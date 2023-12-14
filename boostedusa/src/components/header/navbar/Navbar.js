import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const links = ['Electric Skateboards', 'Electric Scooters', 'Accessories', 'Gift Card', 'More Info'];
    const navLinks = links.map(link => {
      return (
        <li>
          <a className='navlink' href={'/' + link}>{link}</a>
        </li>
      )
    });

    return (
      <div>
        <ul className='navbar'>{navLinks}</ul>
        <RxHamburgerMenu className='burger'/>
      </div>
    )
}
export default NavBar;
