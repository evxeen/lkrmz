import styles from "./Chapter.module.scss";

function Chapter({ title, Image }) {
  return (
    <div className={styles.chapter}>
      <div className={styles.chapterContent}>
        {<Image className={styles.icon} />}
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Chapter;
