// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      <PageNav />
      <section>
        <>
          <div className={styles.img_parent}>
            <img src="g1.webp" alt="gallery-image1" />
            <p>You deserve this.</p>
          </div>

          <div className={styles.img_parent}>
            <img src="g2.webp" alt="gallery-image2" />
            <p>Explore something new.</p>
          </div>

          <div className={styles.img_parent}>
            <img src="g3.webp" alt="gallery-image3" />
            <p>Lift off!</p>
          </div>

          <div className={styles.img_parent}>
            <img src="g4.webp" alt="gallery-image4" />
            <p>Experience the finer things in life.</p>
          </div>

          <div className={styles.img_parent}>
            <img src="g5.webp" alt="gallery-image5" />
            <p>Dream BIG!</p>
          </div>

          <div className={styles.img_parent}>
            <img src="g6.webp" alt="gallery-image6" />
            <p>Discover new horizons.</p>
          </div>

          <div className={styles.img_parent}>
            <img src="g7.webp" alt="gallery-image7" />
            <p>Go for it.</p>
          </div>

          <div className={styles.img_parent}>
            <img src="g8.webp" alt="gallery-image8" />
            <p>Life is short. Don't wait!</p>
          </div>
        </>
      </section>
    </main>
  );
}
