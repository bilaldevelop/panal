import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Coinbase.module.css";

const Coinbase = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWhatsappContainerClick = useCallback(() => {
    window.location.href = "tel:+1 209 444 7244";
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

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

  const onLinkContainer6Click = useCallback(() => {
    navigate("/signup");
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
    <div className={styles.coinbase}>
      <main className={styles.divbody}>
        <div className={styles.topMenu}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/logo@2x.png"
            onClick={onLogoImageClick}
          />
          <div className={styles.topMenuChild} />
          <div className={styles.user}>
            <div className={styles.whatsapp} onClick={onWhatsappContainerClick}>
              <img
                className={styles.phoneCallIconsvg}
                alt=""
                src="/phonecalliconsvg.svg"
              />
              <div className={styles.navBusiness}>+1 209 444 7244</div>
            </div>
            <div
              className={styles.signInParent}
              onClick={onFrameContainerClick}
            >
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
              src="/svgviewerpngoutput-2-1@2x.png"
            />
            <div className={styles.frame}>
              <img
                className={styles.svgviewerPngOutput1Icon}
                alt=""
                src="/svgviewerpngoutput-1@2x.png"
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
          <button className={styles.dontHaveBtc1} onClick={onDontHaveBTC1Click}>
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
        <div className={styles.heading1CoinbaseBitbetwParent}>
          <div className={styles.heading1}>
            Coinbase - fishnetwin Online Casino
          </div>
          <div className={styles.section}>
            <div className={styles.heading2HowToCreateACoParent}>
              <div className={styles.heading2}>
                How To Create A Coinbase Account
              </div>
              <div className={styles.listItemVisitCoinbasecParent}>
                <div className={styles.listItem}>
                  Visit coinbase.com and click on the “Get Started” button
                  located in the top-right corner of your screen.
                </div>
                <div className={styles.listItem}>
                  A form will show up to fill in your legal first and last name,
                  email address, and password. Make sure to use your real
                </div>
                <div className={styles.listItem}>
                  name. With the password, use a combination of numbers,
                  uppercase, and lowercase letters.
                </div>
                <div className={styles.listItem}>
                  Check the “User Agreement” and “Privacy Policy” and certify
                  that you’re 18 years or above.
                </div>
                <div className={styles.listItem}>
                  Click the “Create Account” button.
                </div>
                <div className={styles.listItem}>
                  Coinbase will send a confirmation email to the email you
                  provided. Open your email and click on the confirmation link.
                </div>
                <div className={styles.listItem}>
                  It will direct you to a new window to activate your Coinbase
                  account.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
            <img className={styles.articleIcon} alt="" src="/article@2x.png" />
          </div>
          <div className={styles.section1}>
            <img className={styles.articleIcon} alt="" src="/article1@2x.png" />
            <div className={styles.heading2HowToBuyBitcoinParent}>
              <div className={styles.heading2}>
                How to Buy Bitcoin On Coinbase
              </div>
              <div className={styles.listItemSignInToCoinbParent}>
                <div className={styles.listItem}>Sign in to Coinbase</div>
                <div className={styles.listItem}>
                  Select "Trade" or “Buy/Sell” located on the top right-hand
                  side.
                </div>
                <div className={styles.listItem}>
                  Click the “Buy Field” to choose the asset you want to
                  purchase.
                </div>
                <div className={styles.listItem}>
                  Input the amount you want to purchase.
                </div>
                <div className={styles.listItem}>
                  Choose your payment method.
                </div>
                <div className={styles.listItem}>
                  Click “Preview Buy” to confirm your purchase. If you want to
                  make any changes, click on the back arrow.
                </div>
                <div className={styles.listItem}>
                  Click “Buy” to complete the purchase.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading2HowToCreateACoParent}>
              <div className={styles.heading2}>
                How to Sell Bitcoin On Coinbase
              </div>
              <div className={styles.listItemSignInToCoinbParent}>
                <div className={styles.listItem}>Sign in to Coinbase</div>
                <div className={styles.listItem}>
                  Select “Buy/Sell” or "Trade" located on the top right-hand
                  side.
                </div>
                <div className={styles.listItem}>
                  Click the “Sell” to choose the asset you want to purchase.
                </div>
                <div className={styles.listItem}>
                  Input the amount you want to sell.
                </div>
                <div className={styles.listItem}>
                  Choose your payment method.
                </div>
                <div className={styles.listItem}>
                  Click “Preview Sell” to confirm your purchase. If you want to
                  make any changes, click on the back arrow.
                </div>
                <div className={styles.listItem}>
                  Click “Sell” to complete the purchase.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
            <img className={styles.articleIcon} alt="" src="/article2@2x.png" />
          </div>
          <div className={styles.section1}>
            <img className={styles.articleIcon} alt="" src="/article3@2x.png" />
            <div className={styles.heading2HowToSendBitcoiParent}>
              <div className={styles.heading2}>
                How To Send Bitcoin On Coinbase
              </div>
              <div className={styles.listItemSignInToYourParent}>
                <div className={styles.listItem}>
                  Sign in to your Coinbase account.
                </div>
                <div className={styles.listItem}>
                  On the main navigation bar, locate your portfolio page.
                </div>
                <div className={styles.listItem}>
                  Choose the “Send” button for the Bitcoin wallet.
                </div>
                <div className={styles.listItem}>
                  Select “Wallet Address” on the send dialog menu if you’re
                  sending the Bitcoin to a Crypto wallet outside Coinbase. You
                  can select the “Email Address” if you want to send it through
                  email. Select “Continue.”
                </div>
                <div className={styles.listItem}>
                  Before you send, confirm the transaction details.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.registerNow}>Register Now</div>
                <img className={styles.svgIcon1} alt="" src="/svg3.svg" />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading2HowToReceiveBitParent}>
              <div className={styles.heading2}>
                How to Receive Bitcoin on Coinbase
              </div>
              <div className={styles.listItemSignInToCoinbParent}>
                <div className={styles.listItem}>
                  Sign in to your Coinbase account.
                </div>
                <div className={styles.listItem}>
                  Select “Receive” located at the top right of your Dashboard
                </div>
                <div className={styles.listItem}>
                  Choose Bitcoin under “Currency.”
                </div>
                <div className={styles.listItem}>
                  The moment you select, the address and QR code will fill. You
                  can copy the address or allow the sender to scan your QR code.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
            <img className={styles.articleIcon} alt="" src="/article4@2x.png" />
          </div>
          <div className={styles.section1}>
            <img className={styles.articleIcon} alt="" src="/article5@2x.png" />
            <div className={styles.frameParent}>
              <div className={styles.heading2HowToConvertBitWrapper}>
                <div className={styles.heading25}>
                  How To Convert Bitcoin On Coinbase
                </div>
              </div>
              <div className={styles.listItemSignInToCoinbParent}>
                <div className={styles.listItem}>
                  Sign in to your Coinbase account
                </div>
                <div className={styles.listItem}>
                  Search the asset page for the cryptocurrency you want to
                  convert from. In this case, Bitcoin.
                </div>
                <div className={styles.listItem}>
                  A panel will show the option to convert one crypto to another.
                </div>
                <div className={styles.listItem}>
                  Enter the amount of cryptocurrency you want to convert.
                </div>
                <div className={styles.listItem}>
                  Select “Preview Conversion” to see the amount you want to
                  convert.
                </div>
                <div className={styles.listItem}>
                  Confirm the conversion transaction.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.registerNow}>Register Now</div>
                <img className={styles.svgIcon1} alt="" src="/svg3.svg" />
              </div>
            </div>
          </div>
          <div className={styles.section6}>
            <div className={styles.heading26}>
              Register now to start playing the best slot games.
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.link7} onClick={onLinkContainer6Click}>
                <div className={styles.registerNow}>Register Now</div>
                <img className={styles.svgIcon1} alt="" src="/svg3.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.pages}>
              <div className={styles.heading27}>Pages</div>
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
              <div className={styles.heading27}>Promotions</div>
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
              <div className={styles.heading27}>Platforms</div>
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
                  src="/fishnetlogo-2@2x.png"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector@2x.png"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/bitcoinbtclogo-1@2x.png"
                />
                <img className={styles.dogeIcon} alt="" src="/doge@2x.png" />
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
              src="/section--link--image1@2x.png"
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
              src="/section--link--image6@2x.png"
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
              src="/section--link--image15@2x.png"
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
              src="/section--link--image22@2x.png"
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
            <div className={styles.div}>2023</div>
            <div className={styles.fishnetwin}> Fishnetwin</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Coinbase;
