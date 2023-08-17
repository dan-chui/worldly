// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $5/month.
          </h2>
          <p>
            Test run the best features of WorldWise for free! Eligible users
            will get exclusive access to all the tools needed to memorialize
            past adventures, and plan for your next journey.
          </p>
        </div>
        <img src="img2.webp" alt="hot air balloons" />
      </section>
    </main>
  );
}
