import {Link} from 'react-router-dom';

const Nav = ({title, items }) => (
  <nav className='nav'>
    <Link className='nav-header' to="/"><h1>{title}</h1></Link>
      <ul>{items.map((item,i) => (
        <NavItem key={i} >{item}</NavItem>
      ))}
      </ul>
  </nav>
);

export const NavItem = ({ children }) => (
  <li className='nav-item'>
    {children}
  </li>
);

export default Nav;