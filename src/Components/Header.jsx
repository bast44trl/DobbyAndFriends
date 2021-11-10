import { NavLink } from 'react-router-dom';
import './header.css';
import logoNavbar from '../assets/logo-navbar.png';
import solemnlySwear from '../assets/solemnly-swear.png';

const Header = () => (
  <div className="header">
    <div>
      <NavLink classname="nav-link" exact to="/DobbyAndFriends/">
        <img className="cursor" src={logoNavbar} alt="Dobby" />
      </NavLink>
    </div>
    <div>
      <img src={solemnlySwear} alt="I solemnly swear..." />
    </div>
    <ul className="nav-bar">
      <li>
        <NavLink
          className="cursor nav-link"
          activeClassName="active"
          exact
          to="/DobbyAndFriends/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cursor nav-link"
          activeClassName="active"
          to="/DobbyAndFriends/quiz/"
        >
          Quiz
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cursor nav-link"
          activeClassName="active"
          to="/DobbyAndFriends/library/"
        >
          Library
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
