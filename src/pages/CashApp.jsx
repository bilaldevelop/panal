import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CashApp.module.css";

const CashApp = () => {
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

  const onLinkContainer3Click = useCallback(() => {
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
    <div className={styles.cashApp}>
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
        <div className={styles.heading1CashAppParent}>
          <h1 className={styles.heading1}>CASH APP</h1>
          <div className={styles.section}>
            <div className={styles.frameParent}>
              <div className={styles.heading2BuyAndSellBitcoWrapper}>
                <h1 className={styles.heading2}>
                  Buy and Sell Bitcoin by using Cash App
                </h1>
              </div>
              <div className={styles.afterDownloadingTheCashappParent}>
                <div className={styles.afterDownloadingTheContainer}>
                  <p className={styles.afterDownloadingThe}>
                    After downloading the CashApp, you need to register an
                    account. Make sure that your internet connection is on to
                    start the
                  </p>
                  <p className={styles.afterDownloadingThe}>
                    process. You have two choices here:
                  </p>
                </div>
                <div className={styles.listItem}>
                  Either using mobile phone number
                </div>
                <div className={styles.listItem}>
                  Or an email address for registration
                </div>
                <div className={styles.afterDownloadingTheContainer}>
                  Based on the preferred option, you will get a verification
                  code to your mobile phone or indicated email.
                </div>
                <div className={styles.afterDownloadingTheContainer}>
                  You need to enter that verification code to the system and
                  then choose your country by utilizing the drop down arrow.
                </div>
                <div className={styles.afterDownloadingTheContainer}>
                  <p className={styles.afterDownloadingThe}>
                    After finalizing this stage, you need to press the next
                    button and link your current bank account to CashApp by
                    providing a
                  </p>
                  <p className={styles.afterDownloadingThe}>
                    debit card number.
                  </p>
                </div>
                <div className={styles.afterDownloadingTheContainer}>
                  After that, you can enter your Name and Surname to complete
                  the registration process.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg5.svg" />
              </div>
            </div>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article17@2x.png"
            />
          </div>
          <div className={styles.section1}>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article18@2x.png"
            />
            <div className={styles.heading2BuyingBtcParent}>
              <h1 className={styles.heading21}>Buying BTC</h1>
              <div className={styles.afterDownloadingTheCashAppParent}>
                <div className={styles.afterCheckingThe}>
                  After downloading the Cash App to your mobile device you need
                  to open it and tap on the rising curve icon. Then you will see
                  the two available options on the screen which are:
                </div>
                <div className={styles.listItem}>Buy Stocks</div>
                <div className={styles.listItem}>And Bitcoin</div>
                <div className={styles.afterCheckingThe}>
                  You need to select the second option. Now that you choose to
                  purchase Bitcoins through the cash app, the next thing is to
                  click on the buy button and specify the amount that you want
                  to get. On the right corner, you will see a three-dot icon
                  that can be used for entering the custom amounts that you want
                  to buy. After completing this stage, you need to press the
                  “next” button. You will be then redirected to the confirmation
                  screen in which the full details of the transactions will be
                  displayed.
                </div>
                <div className={styles.afterCheckingThe}>
                  After checking the details to ensure that they are correct,
                  you can press the confirm button to buy BTC.
                </div>
              </div>
              <div className={styles.link2}>
                <div className={styles.support}>Register Now</div>
                <img className={styles.svgIcon2} alt="" src="/svg6.svg" />
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.heading2BuyingBtcParent}>
              <h1 className={styles.heading2}>Sending Bitcoin on Cash App</h1>
              <div className={styles.byFollowingTheFewEasyStepParent}>
                <div className={styles.afterDownloadingTheContainer}>
                  By following the few easy steps that we are going to tell, you
                  can seamlessly withdraw your Bitcoins through Cash App. To do
                  so, you need to open the cash app and click on the banking tab
                  on the main screen. After that, you need to select the Bitcoin
                  and press the withdraw BTC icon
                </div>
                <div className={styles.afterDownloadingTheContainer}>
                  Then, you will have two options for withdrawal:
                </div>
                <div className={styles.listItem}>Scanning the QR Code</div>
                <div className={styles.listItem}>
                  Writing down the wallet address manually
                </div>
                <div className={styles.afterDownloadingTheContainer}>
                  After completing this stage, you should confirm your account’s
                  PIN or use the Touch ID
                </div>
                <div className={styles.afterDownloadingTheContainer}>
                  A general guideline of the Cash App suggests that you can
                  withdraw up to $5000 within one week and $2000 on a daily
                  basis. The withdrawal process can take you around 40 + minutes
                  as you are going to transfer the BTC to external wallets.
                </div>
              </div>
              <div className={styles.link3}>
                <div className={styles.support1}>Support</div>
                <img className={styles.svgIcon3} alt="" src="/svg2.svg" />
              </div>
            </div>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article19@2x.png"
            />
          </div>
          <div className={styles.section3}>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article20@2x.png"
            />
            <div className={styles.heading2HowToReceiveAndParent}>
              <h1 className={styles.heading23}>
                How to receive and convert BTC
              </h1>
              <div className={styles.afterCheckingThe}>
                <p className={styles.afterDownloadingThe}>
                  If you want to receive Bitcoin, you can do it with CashApp
                  too! All you need to do is go to the Banking tab on the main
                  screen. Then, you
                </p>
                <p className={styles.afterDownloadingThe}>
                  need to select Bitcoin and press the deposit BTC icon. And
                  then, you can scan, copy or share your CashApp bitcoin address
                  with an external wallet and also with fishnetwin.
                </p>
              </div>
              <div className={styles.afterCheckingThe}>
                <p className={styles.afterDownloadingThe}>
                  After completing this stage, you should confirm your account’s
                  PIN or use the Touch ID In order to convert your bitcoins to
                  other
                </p>
                <p className={styles.afterDownloadingThe}>
                  currencies in Cashapp, all you need to do is to go to
                  Investing tab on your home screen. After that, you need to tap
                  on Bitcoin and press Sell. Then, you can select an amount of
                  bitcoin you want to sell and at the end, in order to confirm
                  the process, you should enter your account’s PIN or use the
                  Touch ID.
                </p>
              </div>
              <div className={styles.link4} onClick={onLinkContainer3Click}>
                <div className={styles.support}>Register Now</div>
                <img className={styles.svgIcon2} alt="" src="/svg6.svg" />
              </div>
            </div>
          </div>
          <div className={styles.section4}>
            <div className={styles.heading2BuyingBtcParent}>
              <h1 className={styles.heading21}>Verification</h1>
              <div className={styles.toFreelyEnjoyTheCryptoTraParent}>
                <div className={styles.afterCheckingThe}>
                  To freely enjoy the crypto transfer services of the CashApp,
                  you need to verify your account. Without verification, CashApp
                  limits your transfers to $1000 a month. This includes both
                  sending and receiving cryptocurrencies and each week you
                  cannot exceed the $250 mark. On the other hand, if you verify
                  your account, the limit would be $7500 for a week on crypto
                  transfers. So, how to get verification?
                </div>
                <div className={styles.afterCheckingThe}>
                  By following these steps, you can easily submit verification
                  requests and verify your account in the next 24 hours
                </div>
                <div className={styles.afterCheckingThe}>
                  For verification, you need to enter the CashApp wallet and
                  choose Bitcoin as your preferable currency method. Then, you
                  need to click to the deposits and withdrawals tab on the same
                  page. You would be asked to verify certain attributes such as:
                </div>
                <div className={styles.listItem}>
                  the purpose of using/transferring Bitcoin
                </div>
                <div className={styles.listItem}>your source of income</div>
                <div className={styles.listItem}>and employment status</div>
                <div className={styles.afterCheckingThe}>
                  After submitting the info regarding these attributes, the
                  system needs to verify your identity. To complete that stage,
                  you need to scan the front and back side of your ID card or
                  driver’s license and submit those photos .
                </div>
                <div className={styles.afterCheckingThe}>
                  <p className={styles.afterDownloadingThe}>
                    After that, you need to enable CashApp to use your camera by
                    clicking the “allow” button. To complete the process, you
                    need to take a
                  </p>
                  <p className={styles.afterDownloadingThe}>
                    selfie in which your face should be visible and clear, and
                    then press the “done” button below.
                  </p>
                </div>
                <div className={styles.afterCheckingThe}>
                  <p className={styles.afterDownloadingThe}>
                    Once you finalize this process, you will see that the
                    previously indicated “ deposits and withdrawal tab turned
                    into ‘verification in
                  </p>
                  <p className={styles.afterDownloadingThe}>
                    progress” which means that you successfully completed the
                    submission process and need to wait for approval via email
                    or message.
                  </p>
                </div>
              </div>
              <div className={styles.link5}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon5} alt="" src="/svg6.svg" />
              </div>
            </div>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article21@2x.png"
            />
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
                <p className={styles.afterDownloadingThe}>Lucky</p>
                <p className={styles.afterDownloadingThe}>Dragon</p>
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

export default CashApp;
