// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h2>
            Low pricing.
            <br />
            Only $5/month.
          </h2>
          <p>
            Test run the best features of WorldWise for <strong>FREE</strong>!
          </p>
          <p>
            Registered users will get <strong>EXCLUSIVE ACCESS</strong> to all
            the tools needed to memorialize past adventures, and plan for your
            next journey.
          </p>
        </div>
        <img src="img1.webp" alt="hot air balloons" />
      </section>
    </main>
  );
}
