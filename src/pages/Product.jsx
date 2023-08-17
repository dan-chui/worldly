import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img src="img1.webp" alt="person on a mountaintop" />
        <div>
          <h2>About WorldWise</h2>
          <p>
            Our unique content covers the wonderful “off the beaten path” places
            to visit and our unique database contains millions of the most
            interesting locations all around the globe. WorldWise helps people
            discover the world around them in an entirely new way by
            streamlining discovery, planning, booking and navigation into an
            engaging and intuitive process.
          </p>
          <p>
            Keep a journal of your journeys, and share with them with everyone
            you care about. Don't wait - get started, NOW!
          </p>
        </div>
      </section>
    </main>
  );
}
