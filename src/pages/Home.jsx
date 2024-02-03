import { useCallback } from "react";
import { Slider, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import  {Navbar}  from "../components/Navbar";
import  {Footer}  from "../components/Footer";

const Home = () => {
   const navigate = useNavigate();

  const onDivhomeGameContainerClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onMoreGamesClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onSignUp2Click = useCallback(() => {
    window.open("/signup");
  }, []);

  const onDeposit1Click = useCallback(() => {
    window.open("/flash-deposit");
  }, []);

  const onHaveFunClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onRegisterNowClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLinkButtonClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);



  return (
    <div className={styles.home}>
      <section className={styles.divbody}>
        <Navbar />
        <main className={styles.body}>
          <div className={styles.newsTicker}>
            <div className={styles.buttonSubscribe}>
              Subscribe to our exclusive membership program and receive exciting
              daily bonuses that enhance your experience
            </div>
          </div>
          <img
            className={styles.coverPhotoIcon}
            alt=""
            src="/cover-photo@2x.png"
          />
          <section className={styles.games12}>
            <div className={styles.heading1PopularGamesWrapper}>
              <h1 className={styles.heading1}>POPULAR GAMES</h1>
            </div>
            <div className={styles.divhomeGameParent}>
              <div
                className={styles.divhomeGame}
                onClick={onDivhomeGameContainerClick}
              >
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image30@2x.png"
                />
                <div className={styles.playNowWrapper}>
                  <div className={styles.playNow}>Play Now !</div>
                </div>
                <div className={styles.getInfoWrapper}>
                  <div className={styles.playNow}>Get Info</div>
                </div>
              </div>
              <div className={styles.divhomeGame1}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image31@2x.png"
                />
              </div>
              <div className={styles.divhomeGame1}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image32@2x.png"
                />
              </div>
              <div className={styles.divhomeGame3}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image33@2x.png"
                />
              </div>
              <div className={styles.divhomeGame4}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image34@2x.png"
                />
              </div>
            </div>
            <div className={styles.divhomeGameGroup}>
              <div className={styles.divhomeGame5}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image35@2x.png"
                />
              </div>
              <div className={styles.divhomeGame6}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image36@2x.png"
                />
              </div>
              <div className={styles.divhomeGame7}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image37@2x.png"
                />
              </div>
              <div className={styles.divhomeGame8}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image38@2x.png"
                />
              </div>
              <div className={styles.divhomeGame9}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image39@2x.png"
                />
              </div>
            </div>
            <button className={styles.moreGames} onClick={onMoreGamesClick}>
              <div className={styles.linkMore}>MORE</div>
              <div className={styles.linkMore}>GAMES</div>
            </button>
          </section>
          <div className={styles.ourPartnersPlatform}>
            <div className={styles.heading2OurPartnersPlatWrapper}>
              <h1 className={styles.heading2}>OUR PARTNERS PLATFORMS</h1>
            </div>
            <Box className={styles.divslickSlider}>
              <Slider color="secondary" />
            </Box>
          </div>
          <div className={styles.promotion}>
            <div className={styles.heading2PromotionsWrapper}>
              <h3 className={styles.heading2}>PROMOTIONS</h3>
            </div>
            <section className={styles.screens}>
              <div className={styles.left}>
                <img
                  className={styles.coverPhotoIcon}
                  alt=""
                  src="/image40@2x.png"
                />
                <div className={styles.multiplyYourWins}>
                  Multiply Your Wins: Up to $1000 First Deposit Match!
                </div>
              </div>
              <div className={styles.left}>
                <img
                  className={styles.coverPhotoIcon}
                  alt=""
                  src="/image41@2x.png"
                />
                <div className={styles.multiplyYourWins}>
                  Get Your 50% Bounceback During Happy Hours
                </div>
              </div>
            </section>
            <div className={styles.heading2PromotionsWrapper}>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrow-left.svg"
              />
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </div>
          <section className={styles.whyDoYouGetStarted}>
            <div className={styles.heading1PopularGamesWrapper}>
              <h1 className={styles.heading2}>HOW DO YOU GET STARTED ?</h1>
            </div>
            <div className={styles.signUpParent}>
              <button className={styles.signUp4} onClick={onSignUp2Click}>
                <div className={styles.linkSign}>Sign Up</div>
                <div className={styles.linkRegister}>
                  Register for platforms on FishNetWin and receive your
                </div>
                <div className={styles.linkGame}>
                  game platform accounts in your email.
                </div>
                <img
                  className={styles.registericonwebp}
                  alt=""
                  src="/registericonwebp@2x.png"
                />
              </button>
              <button className={styles.deposit3} onClick={onDeposit1Click}>
                <div className={styles.linkSign}>Deposit</div>
                <div className={styles.linkRegister}>
                  Deposit some cash as much as you want with your
                </div>
                <div className={styles.linkGame}>Bitcoin wallet.</div>
                <img
                  className={styles.depositiconwebp}
                  alt=""
                  src="/depositiconwebp@2x.png"
                />
              </button>
              <button className={styles.haveFun} onClick={onHaveFunClick}>
                <div className={styles.linkSign}>Have fun</div>
                <div className={styles.linkRegister}>
                  Get access to hundreds of popular gambling games
                </div>
                <div className={styles.linkGame}>and start playing!</div>
                <img
                  className={styles.gameiconwebp}
                  alt=""
                  src="/gameiconwebp@2x.png"
                />
              </button>
            </div>
          </section>
          <section className={styles.register}>
            <h1 className={styles.heading5}>Register now to start playing</h1>
            <h1 className={styles.heading5}>the best slot games.</h1>
            <button className={styles.registerNow} onClick={onRegisterNowClick}>
              <div className={styles.registerNow1}>Register Now</div>
            </button>
          </section>
          <section className={styles.yourDreamGames}>
            <div className={styles.heading2YourDreamGamesParent}>
              <h1 className={styles.heading23}>YOUR DREAM GAMES</h1>
              <div className={styles.fishnetwinIsSoContainer}>
                <p className={styles.fishnetwinIsSo}>
                  FishNetWin is so much more than just an online slot; it is
                  where you have your exciting moments playing the best slots
                  whether alone, with friends, or with families. In FishNetWin,
                  you can deposit and withdraw online for the slot games just
                  with the Bitcoin wallet! Our platform has a unique atmosphere
                  and feels, giving you a special experience.
                </p>
                <p className={styles.fishnetwinIsSo}>&nbsp;</p>
                <p className={styles.fishnetwinIsSo}>
                  With FishNetWin, you never have to think about privacy risks
                  or fraud. Our slot is equipped with cutting-edge technologies
                  to ensure your security.
                </p>
              </div>
              <div className={styles.linkButtonWrapper}>
                <button
                  className={styles.linkButton}
                  onClick={onLinkButtonClick}
                >
                  <div className={styles.registerNow2}>Register Now</div>
                </button>
              </div>
            </div>
            <div className={styles.video}>
              <img
                className={styles.imgpshFullsizeAnim21}
                alt=""
                src="/imgpsh-fullsize-anim-2-1@2x.png"
              />
            </div>
          </section>
          <div className={styles.whyChooseFishnetwin}>
            <img
              className={styles.whyChooseFishnetwinChild}
              alt=""
              src="/frame-41@2x.png"
            />
            <div className={styles.whyChooseFishnetwin1}>
              <div className={styles.heading2PromotionsWrapper}>
                <h1 className={styles.heading24}>WHY CHOOSE Fishnetwin</h1>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.divsubboxParent}>
                  <button className={styles.divsubbox}>
                    <div
                      className={styles.latestMost}
                    >{`Latest & Most Popular Slots`}</div>
                  </button>
                  <button className={styles.divsubbox}>
                    <div className={styles.latestMost}>
                      Amazing Graphics and Sound
                    </div>
                  </button>
                  <button className={styles.divsubbox}>
                    <div className={styles.latestMost}>
                      100% Satisfaction Rate
                    </div>
                  </button>
                </div>
                <div className={styles.divsubboxParent}>
                  <button className={styles.divsubbox3}>
                    <div className={styles.latestMost}>
                      Highest RTP in the industry
                    </div>
                  </button>
                  <button className={styles.divsubbox3}>
                    <div className={styles.latestMost}>
                      Secure Payment System
                    </div>
                  </button>
                  <button className={styles.divsubbox3}>
                    <div className={styles.latestMost}>
                      Multi-Platform gaming
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
