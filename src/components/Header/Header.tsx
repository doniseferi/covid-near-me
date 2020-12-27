import styles from "./Header.module.css";

const Header = (text: string) =>
  text ? (
    <header className={styles.nav}>
      <h1>{text}</h1>
    </header>
  ) : (
    {}
  );

export default Header;
