import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.headerLogo}
        src="/images/Depop-logo.svg"
        alt="depop header logo"
      />

      <input
        className={styles.search}
        type="text"
        placeholder="Find the role, team, location, you fit best"
      />

      <a className={styles.jobs} href="https://www.google.com/">
        <span> All jobs </span>
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M2 2L10 10L2 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </a>
    </div>
  );
};

export default Header;
