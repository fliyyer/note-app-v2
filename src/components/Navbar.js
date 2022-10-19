import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArchive, MdLibraryAdd, MdLogout } from "react-icons/md"
import { LocaleConsumer } from "../context/LocaleContext";

const Navbar = ({ logout, name }) => {
 return (
  <LocaleConsumer>
  {
    ({ locale, toggleLocale }) => {
      return (
        <nav className="navbar">
          <ul>
          <li>
            <button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button>
          </li>
            <li>
              <Link to="/archive"><MdArchive /></Link>
            </li>
            <li>
              <Link to="/add"><MdLibraryAdd /></Link>
            </li>
              <li><button onClick={logout}>{name}<MdLogout /></button></li>
          </ul>
        </nav>
      );
    }
  }
  </LocaleConsumer>
 );
}

Navbar.propTypes ={
  logout: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

export default Navbar;
