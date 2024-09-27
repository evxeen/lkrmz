import "../../App.css";
import EyeOpenIcon from "../../assets/icons/eye.svg";
import EyeClosedIcon from "../../assets/icons/eye_close.svg";

import styles from "./AuthPage.module.scss";
import { useState } from "react";

function AuthPage() {
  const [eyesIsOpen, setIsEyeOpen] = useState(false);

  const toggleEye = () => {
    setIsEyeOpen(!eyesIsOpen);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backgroundBlur} />
      <div className={styles.container}>
        <div className={styles.authBlock}>
          <h2>Авторизация</h2>
          <input type="text" placeholder="Логин" />

          <div className={styles.passwordContainer}>
            <input
              type={eyesIsOpen ? "text" : "password"}
              placeholder="Пароль"
            />
            <button
              onClick={toggleEye}
              type="button"
              className={styles.eyeButton}
            >
              <img
                src={eyesIsOpen ? EyeOpenIcon : EyeClosedIcon}
                alt="toggle visibility"
                className={styles.eyeIcon}
              />
            </button>
          </div>

          <div className={styles.bottomBlock}>
            <a href="/">Забыли пароль?</a>
            <button>Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
