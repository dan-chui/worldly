import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Go and Explore!
          <br />
          WorldWise tracks your Adventures.
        </h1>
        <h2>
          Every journey begins with a small step. Share your journeys with
          everyone far and wide.
        </h2>
        <Link to="/login" className="cta">
          Start Tracking
        </Link>
      </section>
    </main>
  );
}
