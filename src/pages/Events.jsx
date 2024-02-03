import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./Events.module.css";

const Events = () => {
  return (
    <div className={styles.events}>
      <main className={styles.divbody}>
        <Navbar />
        <main className={styles.body}>
          <div className={styles.heading1EventsWrapper}>
            <h1 className={styles.heading1}>Events</h1>
          </div>
          <img
            className={styles.rallyRaceCoverWebpwebpIcon}
            alt=""
            src="/rallyracecoverwebpwebp@2x.png"
          />
          <img
            className={styles.rallyRaceCoverWebpwebpIcon}
            alt=""
            src="/bbwloterypng@2x.png"
          />
        </main>
        <Footer />
      </main>
    </div>
  );
};

export default Events;
