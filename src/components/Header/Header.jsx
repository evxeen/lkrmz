import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/searchIcon.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="logotype" />
      </div>
      <div className={styles.inputContainer}>
        <img className={styles.searchIcon} src={searchIcon} alt="search" />
        <input className={styles.searchInput} type="text" placeholder="Поиск..." />
      </div>
    </div>
  );
}

export default Header;
