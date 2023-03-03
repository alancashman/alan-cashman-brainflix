import logo from "../../assets/logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="" />
      <form action="submit" className="header__form">
        <div className="header__row">
          <input type="text" className="header__search" placeholder="Search" />
          <img src={props.avatar} className="header__avatar" alt="avatar" />
          <button className="header__button">
            <img src={uploadIcon} alt="" className="header__icon" />
            Upload
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;
