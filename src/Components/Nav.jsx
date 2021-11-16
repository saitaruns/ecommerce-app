import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md"
import { FaSearch } from "react-icons/fa";
import Cart from "./Cart"


const Nav = ({ title }) => (
  <nav className='nav'>
    <Link className='nav-title' to="/">{title}</Link>
    <SearchBar />
    <div className='icon-buttons'> 
      <Link to="/yourcart"><Cart /></Link>
      <Link to="/profile"><MdAccountCircle style={{padding:"0 5px",fontSize:"28px"}} /></Link>
    </div>
  </nav>
);

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className='btn'><FaSearch /></button>
    </div>
  )
}

export default Nav;