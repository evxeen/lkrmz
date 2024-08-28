import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="logotype" />
      </div>
      <nav className={styles.menu}>
        <nav>
          <ul>
            <li>
              Отгрузка продуции
              <svg
                className={styles.arrow}
                width="25px"
                height="25px"
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              Претензионная работа
              <svg
                className={styles.arrow}
                width="25px"
                height="25px"
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              Заказ в производсвто
              <svg
                className={styles.arrow}
                width="25px"
                height="25px"
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              Изделеия по чертежам
              <svg
                className={styles.arrow}
                width="25px"
                height="25px"
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              Инструменты
              <svg
                className={styles.arrow}
                width="25px"
                height="25px"
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
}

export default Header;
