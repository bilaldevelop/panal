import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styles from "./Bonuses.module.css";

const Bonuses = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWhatsappContainerClick = useCallback(() => {
    window.location.href = "tel:+1 209 444 7244";
  }, []);

  const onSignInClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onSignIn1Click = useCallback(() => {
    window.open("/login");
  }, []);

  const onSignUp1Click = useCallback(() => {
    window.open("/signup");
  }, []);

  const onGamesClick = useCallback(() => {
    navigate("/deposits");
  }, [navigate]);

  const onGames1Click = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onGames2Click = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onGames3Click = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onGames4Click = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onGames5Click = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onGames6Click = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onGames7Click = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onPromotionsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHowDoesItWorkClick = useCallback(() => {
    navigate("/how-does-it-works");
  }, [navigate]);

  const onDontHaveBTC1Click = useCallback(() => {
    navigate("/dont-have-btc");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onDepositClick = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onGames8Click = useCallback(() => {
    navigate("/deposits");
  }, [navigate]);

  const onGames9Click = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onLinkClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onLinkGamesClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onLinkFlashClick = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onLinkFaqClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div className={styles.bonuses}>
      <div className={styles.divbody}>
        <Navbar />
        <div className={styles.divbonusesPage}>
          <div className={styles.fishnetwinBonuses}>fishnetwin Bonuses</div>
          <div className={styles.divcssU49ns1}>
            <img
              className={styles.bonusespngIcon}
              alt=""
              src="/bonusespng@2x.png"
            />
            <div className={styles.divcss1ixvaxtmargin}>
              <div className={styles.checkOutOurContainer}>
                <p className={styles.checkOutOur}>
                  Check out our bonuses page, where you can seamlessly redeem
                  your freeplay codes! On top of that, you can also utilize this
                </p>
                <p className={styles.checkOutOur}>
                  page to take out any bonus amount that you have earned through
                  available promotions!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divcssIbdvi9}>
            <div className={styles.divcss0}>
              <div className={styles.divcss1kn2mjeParent}>
                <div className={styles.divcss1kn2mje}>
                  <div className={styles.freePlayCode}>Free-Play Code</div>
                  <div className={styles.youCanApply}>
                    You can apply your earned code here
                  </div>
                </div>
                <input
                  className={styles.group}
                  value="Apply Code"
                  placeholder="Free-play code "
                  type="text"
                  defaultValue="Apply Code"
                />
              </div>
              <div className={styles.divcss0Inner}>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.pages}>
              <div className={styles.heading2}>Pages</div>
              <a className={styles.linkGames} onClick={onLinkGamesClick}>
                Games
              </a>
              <div className={styles.linkBlog}>Blog</div>
              <div className={styles.linkBlog}>About</div>
              <div className={styles.linkBlog}>Support</div>
              <div className={styles.linkBlog}>Privacy Policy</div>
              <div className={styles.linkBlog}>Terms and Conditions</div>
              <div className={styles.linkBlog}>Referral Program</div>
              <div className={styles.linkFlash} onClick={onLinkFlashClick}>
                Flash Deposit
              </div>
              <div className={styles.linkFlash} onClick={onLinkFaqClick}>
                Faq
              </div>
            </div>
            <div className={styles.promotions3}>
              <div className={styles.heading2}>Promotions</div>
              <div className={styles.linkBlog}>Signup Bonus</div>
              <div className={styles.linkBlog}>
                FishNetWin’s Quest Achievement
              </div>
              <div className={styles.linkBlog}>User Level Bonuses</div>
            </div>
            <div className={styles.heading2PlatformsParent}>
              <div className={styles.heading2}>Platforms</div>
              <div className={styles.linkBlog}>Platforms</div>
            </div>
            <div className={styles.linkGoldenParent}></div>
            <div className={styles.footerRight}>
              <div className={styles.footerLogo}>
                <img
                  className={styles.fishnetLogo2Icon}
                  alt=""
                  src="/fishnetlogo-210@2x.png"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector28@2x.png"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/bitcoinbtclogo-110@2x.png"
                />
                <img className={styles.dogeIcon} alt="" src="/doge10@2x.png" />
              </div>
              <div className={styles.footerWhatsapp}>
                <img
                  className={styles.footerWhatsappChild}
                  alt=""
                  src="/group-2.svg"
                />
                <div className={styles.businessHoursMondaySunday}>
                  +1 209 444 7244
                </div>
              </div>
              <div className={styles.reviews}>
                <img
                  className={styles.backgroundIcon}
                  alt=""
                  src="/background.svg"
                />
                <div className={styles.stars}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector4.svg"
                  />
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                  <div className={styles.ratings}>4.5/5.0 - 124 ratings</div>
                </div>
                <div className={styles.verifiedByLivechat}>
                  Verified by LiveChat
                </div>
                <div className={styles.mar2023}>Mar. 2023</div>
                <div className={styles.excellentService}>EXCELLENT SERVICE</div>
              </div>
            </div>
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.footerLogos}>
            <img
              className={styles.sectionLinkImage}
              alt=""
              src="/section--link--image220@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image221@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image222@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image223@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image224@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image225@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image226@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image227@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image228@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image229@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image230@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image231@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image232@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image233@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image234@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image235@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image236@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image237@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image238@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image239@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image240@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image241@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image242@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image243@2x.png"
            />
          </div>
          <div className={styles.creditBar}>
            <div
              className={styles.allRightsReserved}
            >{`All Rights Reserved © `}</div>
            <div className={styles.div}>2023</div>
            <div className={styles.fishnetwin}> Fishnetwin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
