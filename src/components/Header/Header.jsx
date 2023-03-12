import { Link } from "react-router-dom";

import logo from "../../assets/logo/BrainFlix-logo.svg";

import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="" />
      </Link>
      <form action="submit" className="header__form">
        <div className="header__row">
          <input type="text" className="header__search" placeholder="Search" />
          <div className="header__avatar" />
          <Link to="/upload" className="header__link">
            <button className="header__button">Upload</button>
          </Link>
        </div>
      </form>
    </header>
  );
}

export default Header;
