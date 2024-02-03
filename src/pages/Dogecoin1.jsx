import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dogecoin1.module.css";

const Dogecoin1 = () => {
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
    <div className={styles.dogecoin}>
      <div className={styles.divbody}>
        <div className={styles.divchakraContainer}>
          <div className={styles.topMenu}>
            <img
              className={styles.logoIcon}
              alt=""
              src="/logo1@2x.png"
              onClick={onLogoImageClick}
            />
            <div className={styles.topMenuChild} />
            <div className={styles.user}>
              <div
                className={styles.whatsapp}
                onClick={onWhatsappContainerClick}
              >
                <img
                  className={styles.phoneCallIconsvg}
                  alt=""
                  src="/phonecalliconsvg.svg"
                />
                <div className={styles.navBusiness}>+1 209 444 7244</div>
              </div>
              <div className={styles.signInParent}>
                <button className={styles.signIn} onClick={onSignInClick}>
                  <div className={styles.signIn1}>Sign In</div>
                </button>
                <button className={styles.signUp} onClick={onSignUpClick}>
                  <div className={styles.signUp1}>Sign Up</div>
                </button>
              </div>
            </div>
            <div className={styles.svgviewerPngOutput21Parent}>
              <img
                className={styles.svgviewerPngOutput21}
                alt=""
                src="/svgviewerpngoutput-2-11@2x.png"
              />
              <div className={styles.frame}>
                <img
                  className={styles.svgviewerPngOutput1Icon}
                  alt=""
                  src="/svgviewerpngoutput-12@2x.png"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.signInGroup}>
                  <button className={styles.signIn} onClick={onSignIn1Click}>
                    <div className={styles.signIn1}>Sign In</div>
                  </button>
                  <button className={styles.signUp} onClick={onSignUp1Click}>
                    <div className={styles.signUp1}>Sign Up</div>
                  </button>
                </div>
                <button className={styles.games} onClick={onGamesClick}>
                  <div className={styles.promotions}>Games</div>
                </button>
                <button className={styles.games2} onClick={onGames1Click}>
                  <div className={styles.promotions}>Promotions</div>
                </button>
                <button className={styles.games3} onClick={onGames2Click}>
                  <div className={styles.promotions}>How Does it Works?</div>
                </button>
                <button className={styles.games4} onClick={onGames3Click}>
                  <div className={styles.promotions}>Don’t Have BTC?</div>
                </button>
                <button className={styles.games5} onClick={onGames4Click}>
                  <div className={styles.promotions}>Deposit</div>
                </button>
                <button className={styles.games6} onClick={onGames5Click}>
                  <div className={styles.promotions}>Flash Deposit</div>
                </button>
                <button className={styles.games7} onClick={onGames6Click}>
                  <div className={styles.promotions}>Events</div>
                </button>
              </div>
            </div>
          </div>
          <nav className={styles.mainMenu}>
            <button className={styles.games8} onClick={onGames7Click}>
              <div className={styles.games9}>Games</div>
            </button>
            <button className={styles.promotions1} onClick={onPromotionsClick}>
              <div className={styles.promotions2}>Promotions</div>
            </button>
            <button
              className={styles.howDoesItWork}
              onClick={onHowDoesItWorkClick}
            >
              <div className={styles.howDoesIt1}>How does it work?</div>
            </button>
            <button
              className={styles.dontHaveBtc1}
              onClick={onDontHaveBTC1Click}
            >
              <div className={styles.dontHaveBtc2}>Don’t have BTC?</div>
            </button>
            <button
              className={styles.deposit1}
              onClick={onDepositClick}
              data-animate-on-scroll
            >
              <div className={styles.button}>
                <div className={styles.depositNow}>Deposit Now!</div>
                <img className={styles.svgIcon} alt="" src="/svg.svg" />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <button className={styles.games10} onClick={onGames8Click}>
                  <div className={styles.promotions}>Deposit</div>
                </button>
                <button className={styles.games11} onClick={onGames9Click}>
                  <div className={styles.promotions}>Flash Deposit</div>
                </button>
              </div>
            </button>
            <button
              className={styles.link}
              onClick={onLinkClick}
              data-animate-on-scroll
            >
              <div className={styles.events1}>Events</div>
            </button>
          </nav>
          <div className={styles.heading1Parent}>
            <div className={styles.heading1}>
              <div className={styles.order}>Order</div>
            </div>
            <div className={styles.pchakraText}>
              <div className={styles.pleaseMakeAn}>
                Please make an order only through the website for your deposits.
                Do not send any payments to the Dogecoin addresses to which you
                have sent before for your deposits. There will be possible
                delays in processing of payments which are not made as an order
                through website.
              </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.divcssXy0e15}>
              <div className={styles.divcss1f2qle8}>
                <div className={styles.table}>
                  <div className={styles.headerRow}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.price}>Price</div>
                    <div className={styles.price}>Quantity</div>
                    <div className={styles.price}>Total</div>
                    <div className={styles.price}>Amount</div>
                    <div className={styles.price}>Bonus</div>
                    <div className={styles.price}>Wager</div>
                  </div>
                  <div className={styles.separator} />
                  <div className={styles.body}>
                    <div className={styles.headerRow}>
                      <div className={styles.linkUltrapower}>Ultrapower</div>
                      <div className={styles.div}>$1.00</div>
                      <div className={styles.div}>10</div>
                      <div className={styles.div}>$10.00</div>
                      <div className={styles.div}>$20.00</div>
                      <div className={styles.div}>First Deposit Bonus</div>
                    </div>
                    <div className={styles.separator2} />
                    <div className={styles.row1}>
                      <div className={styles.linkUltrapower}>Skillmine</div>
                      <div className={styles.div}>$1.00</div>
                      <div className={styles.div}>10</div>
                      <div className={styles.div}>$10.00</div>
                      <div className={styles.div}>$20.00</div>
                      <div className={styles.div}>First Deposit Bonus</div>
                    </div>
                    <div className={styles.separator2} />
                    <div className={styles.row1}>
                      <div className={styles.linkUltrapower}>Rivermonster</div>
                      <div className={styles.div}>$1.00</div>
                      <div className={styles.div}>10</div>
                      <div className={styles.div}>$10.00</div>
                      <div className={styles.div}>$20.00</div>
                      <div className={styles.div}>First Deposit Bonus</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divcssC3ljhp}>
                <div className={styles.button1}>
                  <div className={styles.payWithDogecoin}>
                    Pay with dogecoin
                  </div>
                </div>
                <div className={styles.pchakraText1}>
                  <div className={styles.div}>
                    <span>{`By placing this order you agree with our `}</span>
                    <span
                      className={styles.privacyPolicy}
                    >{`Privacy Policy `}</span>
                    <span>{`and `}</span>
                    <span className={styles.privacyPolicy}>Terms Of Use</span>
                  </div>
                </div>
                <div className={styles.divcss1l4w6pd}>
                  <img
                    className={styles.securepngIcon}
                    alt=""
                    src="/securepng1@2x.png"
                  />
                  <img
                    className={styles.dogecoinorderpngIcon}
                    alt=""
                    src="/dogecoinorderpng1@2x.png"
                  />
                </div>
                <div className={styles.separator} />
                <div className={styles.divcssXbxdis}>
                  <div className={styles.orderTotalParent}>
                    <div className={styles.orderTotal}>Order Total</div>
                    <b className={styles.b}>$60.00</b>
                  </div>
                </div>
                <div className={styles.divcss12ezmlb}>
                  <div className={styles.status}>Status</div>
                  <div className={styles.spanchakraBadgeWrapper}>
                    <div className={styles.spanchakraBadge}>
                      <div className={styles.new}>NEW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
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
                <div className={styles.linkBlog}>1st Deposit Bonus</div>
                <div className={styles.linkBlog}>Happy Hours Bonus</div>
                <div className={styles.linkBlog}>2nd and 3rd Deposit Bonus</div>
                <div className={styles.linkBlog}>Referral Bonus</div>
                <div className={styles.linkBlog}>Easter day</div>
                <div className={styles.linkBlog}>St. Patrick’s Day</div>
                <div className={styles.linkBlog}>Valentine’s Day</div>
                <div className={styles.linkBlog}>Thanksgiving Holiday</div>
                <div className={styles.linkBlog}>Halloween Day</div>
                <div className={styles.linkBlog}>
                  Get 20% Cashback BONUS on Four Performance
                </div>
                <div className={styles.linkBlog}>
                  Get 25% BONUS on Paradise Once a day
                </div>
                <div className={styles.linkBlog}>
                  Bonus on $50 and more deposits
                </div>
                <div className={styles.linkBlog}>User Level Bonuses</div>
              </div>
              <div className={styles.heading2PlatformsParent}>
                <div className={styles.heading2}>Platforms</div>
                <div className={styles.linkBlog}>Ultrapower</div>
                <div className={styles.linkBlog}>Rivermonster</div>
                <div className={styles.linkBlog}>Skillmine</div>
                <div className={styles.linkBlog}>Paradise Casino</div>
                <div className={styles.linkBlog}>Vegas7</div>
                <div className={styles.linkBlog}>VegasX</div>
                <div className={styles.linkBlog}>Riversweeps</div>
                <div className={styles.linkBlog}>Ice8</div>
                <div className={styles.linkBlog}>Juwa</div>
                <div className={styles.linkBlog}>Gold Hunter</div>
              </div>
              <div className={styles.linkGoldenParent}>
                <div className={styles.linkBlog}>Golden Treasure</div>
                <div className={styles.linkBlog}>Game Vault</div>
                <div className={styles.linkBlog}>Vegas</div>
                <div className={styles.linkBlog}>Sweeps</div>
                <div className={styles.linkBlog}>Milky Way</div>
                <div className={styles.linkBlog}>FunZone</div>
                <div className={styles.linkBlog}>Fire Kirin</div>
                <div className={styles.linkBlog}>Orion Stars</div>
                <div className={styles.linkBlog}>Admiral</div>
                <div className={styles.linkBlog}>
                  <p className={styles.lucky}>Lucky</p>
                  <p className={styles.lucky}>Dragon</p>
                </div>
                <div className={styles.linkBlog}>Flamingo7</div>
                <div className={styles.linkBlog}>ICE7</div>
                <div className={styles.linkBlog}>Fire Master</div>
                <div className={styles.linkBlog}>Golden Dragon</div>
                <div className={styles.linkBlog}>Tai Chi Master</div>
              </div>
              <div className={styles.footerRight}>
                <div className={styles.footerLogo}>
                  <img
                    className={styles.fishnetLogo2Icon}
                    alt=""
                    src="/fishnetlogo-21@2x.png"
                  />
                </div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector5@2x.png"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/bitcoinbtclogo-11@2x.png"
                  />
                  <img className={styles.dogeIcon} alt="" src="/doge1@2x.png" />
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
                  <div className={styles.excellentService}>
                    EXCELLENT SERVICE
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.footerLogos}>
              <img
                className={styles.sectionLinkImage}
                alt=""
                src="/section--link--image@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image24@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image2@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image3@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image4@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image5@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image25@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image7@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image8@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image9@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image10@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image11@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image12@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image13@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image14@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image26@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image16@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image17@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image18@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image19@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image20@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image21@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image27@2x.png"
              />
              <img
                className={styles.sectionLinkImage1}
                alt=""
                src="/section--link--image23@2x.png"
              />
            </div>
            <div className={styles.creditBar}>
              <div
                className={styles.allRightsReserved}
              >{`All Rights Reserved © `}</div>
              <div className={styles.div12}>2023</div>
              <div className={styles.fishnetwin}> Fishnetwin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dogecoin1;
