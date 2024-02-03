import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Kraken.module.css";

const Kraken = () => {
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
    <div className={styles.kraken}>
      <main className={styles.divbody}>
        <div className={styles.topMenu}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/logo5@2x.png"
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
              src="/svgviewerpngoutput-2-110@2x.png"
            />
            <div className={styles.frame}>
              <img
                className={styles.svgviewerPngOutput1Icon}
                alt=""
                src="/svgviewerpngoutput-112@2x.png"
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
        <div className={styles.heading1BinanceOnlineBParent}>
          <h1 className={styles.heading1}>KRAKEN - fishnetwin ONLINE CASINO</h1>
          <div className={styles.section}>
            <div className={styles.heading2Parent}>
              <div className={styles.heading2}>
                <h1 className={styles.howToCreate}>
                  How To Create A Kraken Account
                </h1>
              </div>
              <div className={styles.listItemContainer}>
                <p className={styles.visitKrakencom}>Visit kraken.com.</p>
                <p className={styles.visitKrakencom}>
                  Click on “Get Started.” or “Create Account” on the top
                  right-hand corner of your screen.
                </p>
                <p className={styles.visitKrakencom}>
                  You’ll be redirected to the “Create your account" page, where
                  you have to enter your email address, username, and password.
                  Note: you can’t change the username.
                </p>
                <p className={styles.visitKrakencom}>
                  Check the agree box after reading the Terms of Service and
                  Privacy Policy. Then click the “Sign Up” button.
                </p>
                <p className={styles.visitKrakencom}>
                  You'll receive an activation email in your inbox, which
                  contains an activation key.
                </p>
                <p className={styles.visitKrakencom}>
                  Activate your account by clicking the link in the email.
                </p>
                <p className={styles.visitKrakencom}>
                  Confirm the password, finish the captcha if it comes up
                </p>
                <p className={styles.clickTheActivate}>
                  Click the “Activate Account” button.
                </p>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img
                  className={styles.spanchakraButtonIconmargi}
                  alt=""
                  src="/spanchakrabutton--iconmargin.svg"
                />
              </div>
            </div>
            <img className={styles.articleIcon} alt="" src="/article6@2x.png" />
          </div>
          <div className={styles.section}>
            <img className={styles.articleIcon} alt="" src="/article7@2x.png" />
            <div className={styles.divcss50qnd1}>
              <div className={styles.heading2}>
                <h1 className={styles.howToCreate}>
                  How To Buy Bitcoin On Kraken
                </h1>
              </div>
              <div className={styles.list}>
                <div className={styles.signInTo}>
                  Sign in to your verified Kraken account
                </div>
                <div className={styles.signInTo}>
                  Deposit funds into your account.
                </div>
                <div className={styles.signInTo}>
                  Return to your trading dashboard and click the “Buy” button
                  located at the “Buy Cryptocurrency” section.
                </div>
                <div className={styles.signInTo}>
                  Insert the amount of Bitcoin you want to purchase
                </div>
                <div className={styles.signInTo}>Confirm the order</div>
                <div className={styles.signInTo}>Click on “Submit Order.”</div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img
                  className={styles.spanchakraButtonIconmargi}
                  alt=""
                  src="/spanchakrabutton--iconmargin.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.divcss0}>
              <div className={styles.heading2}>
                <div className={styles.howToSend}>
                  How To Send Bitcoin To Kraken Futures
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.signInTo}>
                  Sign in to your Kraken account
                </div>
                <div className={styles.searchForThe}>
                  Search for the “Funding” tab
                </div>
                <div className={styles.signInTo}>
                  Click the “Transfer” button for the cryptocurrency you want to
                  transfer to Kraken futures. In this case, Bitcoin.
                </div>
                <div className={styles.signInTo}>
                  Enter the amount you want to send.
                </div>
                <div className={styles.signInTo}>
                  Click the “Review Transfer” button. After, you click on the
                  “Confirm Transfer” button.
                </div>
                <div className={styles.signInTo}>
                  You'll get a notification at the bottom of the page confirming
                  the transfer's success.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.depositNow1}>Deposit Now</div>
                <img
                  className={styles.spanchakraButtonIconmargi}
                  alt=""
                  src="/spanchakrabutton--iconmargin1.svg"
                />
              </div>
            </div>
            <img className={styles.articleIcon} alt="" src="/article8@2x.png" />
          </div>
          <div className={styles.section}>
            <img className={styles.articleIcon} alt="" src="/article9@2x.png" />
            <div className={styles.divcss0}>
              <div className={styles.heading2}>
                <h1 className={styles.howToCreate}>
                  How to Convert Bitcoin On Kraken
                </h1>
              </div>
              <div className={styles.list}>
                <div className={styles.signInTo}>
                  Sign in to your Kraken account
                </div>
                <div className={styles.signInTo}>
                  Click on "Buy Crypto," located at the top of the page
                </div>
                <div className={styles.signInTo}>Select Convert</div>
                <div className={styles.signInTo}>
                  Select the asset you want to convert, which is Bitcoin, from
                  the "Buy" drop-down menu
                </div>
                <div className={styles.signInTo}>
                  Enter the amount you want to convert
                </div>
                <div className={styles.signInTo}>
                  Click on “Preview Convert”
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img
                  className={styles.spanchakraButtonIconmargi}
                  alt=""
                  src="/spanchakrabutton--iconmargin.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.divcss0}>
              <div className={styles.heading2}>
                <h1 className={styles.howToCreate}>
                  How to Receive Bitcoin on Kraken
                </h1>
              </div>
              <div className={styles.list}>
                <div className={styles.signInTo}>
                  Sign in to your Kraken account
                </div>
                <div className={styles.signInTo}>
                  Search for “Funding” located on top of the page.
                </div>
                <div className={styles.signInTo}>
                  Use the “search bar” to search for Bitcoin.
                </div>
                <div className={styles.signInTo}>
                  Click on “deposit” for the currency you want to deposit. In
                  this case, Bitcoin.
                </div>
                <div className={styles.signInTo}>
                  Carefully read the instructions and agree to the
                  acknowledgment.
                </div>
                <div className={styles.signInTo}>
                  If it’s your first time, click the “Generate New Address”
                  button.
                </div>
                <div className={styles.signInTo}>
                  Copy the address and send it to the sender.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.depositNow1}>Deposit Now</div>
                <img
                  className={styles.spanchakraButtonIconmargi}
                  alt=""
                  src="/spanchakrabutton--iconmargin1.svg"
                />
              </div>
            </div>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article10@2x.png"
            />
          </div>
          <div className={styles.section5}>
            <div className={styles.divcss02}>
              <h1 className={styles.howToCreate}>
                Register now to start playing the best slot games.
              </h1>
            </div>
            <div className={styles.linkmargin}>
              <div className={styles.link6}>
                <div className={styles.depositNow1}>Deposit Now</div>
                <img
                  className={styles.spanchakraButtonIconmargi}
                  alt=""
                  src="/spanchakrabutton--iconmargin1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.pages}>
              <div className={styles.heading25}>Pages</div>
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
              <div className={styles.heading25}>Promotions</div>
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
              <div className={styles.heading25}>Platforms</div>
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
                <p className={styles.clickTheActivate}>Lucky</p>
                <p className={styles.clickTheActivate}>Dragon</p>
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
                  src="/fishnetlogo-216@2x.png"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector39@2x.png"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/bitcoinbtclogo-116@2x.png"
                />
                <img className={styles.dogeIcon} alt="" src="/doge16@2x.png" />
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
              src="/section--link--image386@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image387@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image388@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image389@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image390@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image391@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image392@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image393@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image394@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image395@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image396@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image397@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image398@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image399@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image400@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image401@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image402@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image403@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image404@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image405@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image406@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image407@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image408@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image409@2x.png"
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

export default Kraken;
