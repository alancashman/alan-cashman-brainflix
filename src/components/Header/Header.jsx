import logo from "../../assets/logo/BrainFlix-logo.svg";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="" />
      <form action="submit" className="header__form">
        <div className="header__row">
          <input type="text" className="header__search" placeholder="Search" />
          <img src={props.avatar} className="header__avatar" alt="avatar" />
        </div>
        <button className="header__button">Upload</button>
      </form>
    </header>
  );
}

export default Header;
