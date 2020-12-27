import styles from "./Banner.module.css";

const Banner = (text: string) =>
  text ? (
    <header className={styles.nav}>
      <h1>{text}</h1>
    </header>
  ) : (
    {}
  );

export default Banner;
