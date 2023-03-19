import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import "./styles.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <a href="/" className="header__logo ">
          <LogoIcon />
        </a>
        <nav className="header__nav">
          <a href="/" className="header__link header__link--active">
            Features
          </a>
          <a href="/" className="header__link">
            Blog
          </a>
          <a href="/" className="header__link">
            Pricing
          </a>
          <a href="/" className="header__link">
            Company
          </a>
        </nav>
        <button className="header__button">Get a demo</button>
      </div>
    </div>
  );
};
