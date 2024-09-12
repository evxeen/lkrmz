import logo from "../../assets/images/logo.png";
import counter from "../../assets/icons/counter.svg";
import user from "../../assets/icons/user.svg";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className="logo">
        <img src={logo} className="logo-image" alt="logo" />
      </div>
      <div className="header-conten">
        <input className="header-input" placeholder="Поиск продукции..." />
        <img className="header-counter" src={counter} alt="counter" />
        <img className="header-user" src={user} alt="counter" />
      </div>
    </div>
  );
}

export default Header;
