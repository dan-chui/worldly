import PageNav from "../components/PageNav";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <main className={styles.pagenotfound}>
      <PageNav />
      <h1> Oh no! The page was not found!</h1>
      <img src="error.webp" alt="error" />
    </main>
  );
}
