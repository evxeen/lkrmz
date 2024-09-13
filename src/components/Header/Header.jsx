import logo from "../../assets/images/logo.png";
import search from "../../assets/icons/search.svg";
import counter from "../../assets/icons/counter.svg";
import user from "../../assets/icons/user.svg";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} className="logo-image" alt="logo" />
        <div className={styles.text}>
          <p>Открытое акционерное общесвто</p>
          <p>РЕЧИЦКИЙ МЕТИЗНЫЙ ЗАВОД</p>
        </div>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.searchContainer}>
          <input placeholder="Поиск продукции..." />
          <img className={styles.searchIcon} src={search} alt="search icon" />
        </div>
        <img className={styles.headerCounter} src={counter} alt="counter" />
        <img className={styles.headerUser} src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
