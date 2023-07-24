import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}></div>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </>
  );
}

export default Footer;
