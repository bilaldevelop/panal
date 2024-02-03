import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import styles from "./Games.module.css";
import ImagesData from "./ImagesData";

const Games = () => {
  const [allImages, setAllImages] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  

  // useEffect(() => {
  //   const scrollAnimElements = document.querySelectorAll(
  //     "[data-animate-on-scroll]"
  //   );
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       for (const entry of entries) {
  //         if (entry.isIntersecting || entry.intersectionRatio > 0) {
  //           const targetElement = entry.target;
  //           targetElement.classList.add(styles.animate);
  //           observer.unobserve(targetElement);
  //         }
  //       }
  //     },
  //     {
  //       threshold: 0.15,
  //     }
  //   );

  //   for (let i = 0; i < scrollAnimElements.length; i++) {
  //     observer.observe(scrollAnimElements[i]);
  //   }

  //   return () => {
  //     for (let i = 0; i < scrollAnimElements.length; i++) {
  //       observer.unobserve(scrollAnimElements[i]);
  //     }
  //   };
  // }, []);




  return (
    <div className={styles.games}>
      <main className={styles.divbody}>
       <Navbar />
       <section className={styles.body}>
          <h1 className={styles.heading1}>GAMES</h1>
          <div className={styles.frameParent}>
              <fieldset className={styles.tablist}>
              <button className={styles.all}>
                <div className={styles.all1}>All</div>
              </button>
              <button className={styles.ultrapower}>
                <div
                  className={`${styles.ultrapowerGames} ${styles.ultrapowerGame1}`}
                >
                  ultrapower-games
                </div>
              </button>
              <button className={styles.rivermonster}>
                <div className={styles.ultrapowerGames}>rivermonster</div>
              </button>
              <button className={styles.rivermonster}>
                <div className={styles.ultrapowerGames}>skillmine-games</div>
              </button>
              <button className={styles.rivermonster}>
                <div className={styles.ultrapowerGames}>paradise-casino</div>
              </button>
              <button className={styles.rivermonster}>
                <div className={styles.ultrapowerGames}>vegas7games</div>
              </button>
              <button className={styles.rivermonster}>
                <div className={styles.ultrapowerGames}>vegas-x</div>
              </button>
              <button className={styles.rivermonster}>
                <div className={styles.ultrapowerGames}>riversweeps</div>
              </button>
            </fieldset>
          </div>
          <div>
            {!allImages
              ? ImagesData.slice(0, 11).map((currVal, index) =>
                  index !== 10 ? (
                    <button
                      key={index}
                      className={styles.imageLargeConatiner}
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <img
                        className={styles.imageIcon}
                        alt={currVal.src}
                        src={currVal.src}
                      />
                      {isHovered === index && (
                        <div className={styles.insideButtons}>
                          <button className={styles.playNowButton}>
                            Play Now
                          </button>
                          <button className={styles.getInfoButton}>
                            Get Info
                          </button>
                        </div>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={() => setAllImages(true)}
                      key={index}
                      className={styles.imageLargeConatiner2}

                    >
                      <p>More</p>
                      <p>Games</p>
                    </button>
                  )
                )
              : ImagesData.map((currVal, index) => (
                  <button 
                  key={index} 
                  className={styles.imageConatiner}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  style={{
                    transform: isHovered === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                  >
                    <img
                      className={styles.imageIcon}
                      alt={currVal.src}
                      src={currVal.src}
                    />
                    {isHovered === index && (
                      <div className={styles.insideButtons}>
                        <button className={styles.playNowButton1}>
                          Play Now
                        </button>
                        <button className={styles.getInfoButton1}>
                          Get Info
                        </button>
                      </div>
                    )}
                  </button>
                ))}
          </div>
        </section>
       <Footer />
      </main>
    </div>
  );
};

export default Games;
