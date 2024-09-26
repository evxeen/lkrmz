import Header from "../../components/Header/Header";
import { chapterList } from "../../components/Icons";
import Chapter from "../../components/Chapter/Chapter";

import styles from "./ManePage.module.scss";

function MainPage() {
  return (
    <div className="App">
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          {chapterList.map((item, index) => (
            <Chapter key={index} title={item.title} Image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
