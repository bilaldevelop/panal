import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PromotionMessage.module.css";

const PromotionMessage = () => {
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

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onAccountClick = useCallback(() => {
    navigate("/account");
  }, [navigate]);

  const onEmailVerificationClick = useCallback(() => {
    navigate("/change-emailphone");
  }, [navigate]);

  const onEmailClick = useCallback(() => {
    navigate("/emailphone-verifications");
  }, [navigate]);

  const onChangePasswordClick = useCallback(() => {
    navigate("/change-password");
  }, [navigate]);

  const onBonusClick = useCallback(() => {
    navigate("/bonuses");
  }, [navigate]);

  const onVerificationClick = useCallback(() => {
    navigate("/verifications");
  }, [navigate]);

  const onMessageContainerClick = useCallback(() => {
    navigate("/system-message");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/platforms");
  }, [navigate]);

  const onDeposit1Click = useCallback(() => {
    navigate("/deposits");
  }, [navigate]);

  const onFlashDepositClick = useCallback(() => {
    navigate("/flash-deposit");
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
    <div className={styles.promotionMessage}>
      <div className={styles.divbody}>
        <div className={styles.topMenu}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/logo6@2x.png"
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
              src="/svgviewerpngoutput-2-18@2x.png"
            />
            <div className={styles.frame}>
              <img
                className={styles.svgviewerPngOutput1Icon}
                alt=""
                src="/svgviewerpngoutput-19@2x.png"
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
        <div className={styles.divcss1ln73td}>
          <div className={styles.sidebar}>
            <div className={styles.dashboard}>
              <button className={styles.dashboard1} onClick={onDashboardClick}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.dashboard2}>Dashboard</div>
              </button>
              <button className={styles.account} onClick={onAccountClick}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.account1}>Account</div>
              </button>
              <button
                className={styles.emailVerification}
                onClick={onEmailVerificationClick}
              >
                <img
                  className={styles.divcss1i0ek3mIcon2}
                  alt=""
                  src="/divcss1i0ek3m1.svg"
                />
                <div className={styles.emailphoneChanging}>
                  <span className={styles.emailphoneChangingTxtContainer}>
                    <p className={styles.emailphone}>Email/Phone</p>
                    <p className={styles.emailphone}>changing</p>
                  </span>
                </div>
              </button>
              <button
                className={styles.emailVerification}
                onClick={onEmailClick}
              >
                <img
                  className={styles.divcss1i0ek3mIcon2}
                  alt=""
                  src="/divcss1i0ek3m1.svg"
                />
                <div className={styles.emailphoneChangingVerificatContainer}>
                  <span className={styles.emailphoneChangingTxtContainer}>
                    <p className={styles.emailphone}>Email/Phone</p>
                    <p className={styles.emailphone}>changing verifications</p>
                  </span>
                </div>
              </button>
              <button
                className={styles.account}
                onClick={onChangePasswordClick}
              >
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.changePassword1}>Change Password</div>
              </button>
              <button className={styles.account} onClick={onBonusClick}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.bonuses}>Bonuses</div>
              </button>
              <button className={styles.account} onClick={onVerificationClick}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.verifications}>Verifications</div>
                <div className={styles.spanverificationCount}>
                  <div className={styles.div}>3</div>
                </div>
              </button>
              <div className={styles.message} onClick={onMessageContainerClick}>
                <div className={styles.messages}>Messages</div>
                <div className={styles.divcssQ7fb8o}>
                  <div className={styles.div1}>6</div>
                </div>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
              </div>
            </div>
            <div className={styles.platform}>
              <div className={styles.platforms}>Platforms</div>
              <button
                className={styles.divcss1i0ek3mParent}
                onClick={onFrameButtonClick}
              >
                <img
                  className={styles.divcss1i0ek3mIcon8}
                  alt=""
                  src="/divcss1i0ek3m5.svg"
                />
                <div className={styles.platforms1}>Platforms</div>
              </button>
            </div>
            <div className={styles.platform}>
              <div className={styles.platforms}>Finance</div>
              <button className={styles.account} onClick={onDeposit1Click}>
                <img
                  className={styles.divcss1i0ek3mIcon9}
                  alt=""
                  src="/divcss1i0ek3m3.svg"
                />
                <div className={styles.deposits}>Deposits</div>
              </button>
              <button
                className={styles.flashDeposit2}
                onClick={onFlashDepositClick}
              >
                <img
                  className={styles.divcss1i0ek3mIcon10}
                  alt=""
                  src="/divcss1i0ek3m4.svg"
                />
                <div className={styles.divh2dB1545c52}>
                  <div className={styles.flashDeposit3}>Flash Deposit</div>
                  <img
                    className={styles.flashgifIcon}
                    alt=""
                    src="/flashgif2@2x.png"
                  />
                </div>
              </button>
              <button className={styles.account}>
                <img
                  className={styles.divcss1i0ek3mIcon9}
                  alt=""
                  src="/divcss1i0ek3m3.svg"
                />
                <div className={styles.withdrawals}>Withdrawals</div>
              </button>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
            </div>
            <div className={styles.sidebar1}>
              <div className={styles.dashboard3}>
                <button className={styles.dashboard4}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.dashboard5}>Dashboard</div>
                </button>
                <button className={styles.account2}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.account3}>Account</div>
                </button>
                <button className={styles.emailVerification1}>
                  <img
                    className={styles.divcss1i0ek3mIcon2}
                    alt=""
                    src="/divcss1i0ek3m1.svg"
                  />
                  <div className={styles.emailphoneChanging1}>
                    <span className={styles.emailphoneChangingTxtContainer}>
                      <p className={styles.emailphone}>Email/Phone</p>
                      <p className={styles.emailphone}>changing</p>
                    </span>
                  </div>
                </button>
                <button className={styles.emailVerification1}>
                  <img
                    className={styles.divcss1i0ek3mIcon2}
                    alt=""
                    src="/divcss1i0ek3m1.svg"
                  />
                  <div className={styles.emailphoneChangingVerificatContainer2}>
                    <span className={styles.emailphoneChangingTxtContainer}>
                      <p className={styles.emailphone}>Email/Phone</p>
                      <p className={styles.emailphone}>
                        changing verifications
                      </p>
                    </span>
                  </div>
                </button>
                <button className={styles.account2}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.changePassword3}>Change Password</div>
                </button>
                <button className={styles.account2}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.bonuses1}>Bonuses</div>
                </button>
                <button className={styles.account2}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.verifications1}>Verifications</div>
                  <div className={styles.spanverificationCount}>
                    <div className={styles.div}>3</div>
                  </div>
                </button>
                <div className={styles.message1}>
                  <div className={styles.messages1}>Messages</div>
                  <div className={styles.divcssQ7fb8o}>
                    <div className={styles.div1}>6</div>
                  </div>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                </div>
              </div>
              <div className={styles.platform1}>
                <div className={styles.platforms}>Platforms</div>
                <button className={styles.divcss1i0ek3mGroup}>
                  <img
                    className={styles.divcss1i0ek3mIcon20}
                    alt=""
                    src="/divcss1i0ek3m2.svg"
                  />
                  <div className={styles.platforms3}>Platforms</div>
                </button>
              </div>
              <div className={styles.platform}>
                <div className={styles.platforms}>Finance</div>
                <button className={styles.account2}>
                  <img
                    className={styles.divcss1i0ek3mIcon9}
                    alt=""
                    src="/divcss1i0ek3m3.svg"
                  />
                  <div className={styles.deposits1}>Deposits</div>
                </button>
                <button className={styles.flashDeposit4}>
                  <img
                    className={styles.divcss1i0ek3mIcon10}
                    alt=""
                    src="/divcss1i0ek3m4.svg"
                  />
                  <div className={styles.divh2dB1545c52}>
                    <div className={styles.flashDeposit5}>Flash Deposit</div>
                    <img
                      className={styles.flashgifIcon}
                      alt=""
                      src="/flashgif2@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.account2}>
                  <img
                    className={styles.divcss1i0ek3mIcon9}
                    alt=""
                    src="/divcss1i0ek3m3.svg"
                  />
                  <div className={styles.withdrawals1}>Withdrawals</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.divcss1fxh4ct}>
            <div className={styles.heading5margin}>
              <div className={styles.verifications2}>Verifications</div>
            </div>
            <div className={styles.separatormargin}>
              <div className={styles.separator} />
            </div>
            <div className={styles.divagRootWrapper}>
              <div className={styles.presentationagHeader}>
                <div className={styles.row}>
                  <div className={styles.presentationagCellLabelCon}>
                    <div className={styles.subject}>Subject</div>
                  </div>
                  <div className={styles.line}>
                    <div className={styles.pseudo} />
                  </div>
                  <div className={styles.columnheader}>
                    <div className={styles.subject}>Date</div>
                  </div>
                  <div className={styles.line}>
                    <div className={styles.pseudo} />
                  </div>
                  <div className={styles.columnheader}>
                    <div className={styles.subject}>Seen</div>
                  </div>
                  <div className={styles.line}>
                    <div className={styles.pseudo} />
                  </div>
                  <div className={styles.columnheader}>
                    <div className={styles.subject}>Action</div>
                  </div>
                </div>
              </div>
              <div className={styles.rowgroup}>
                <div className={styles.rowPressSpaceToSelectTh}>
                  <div className={styles.gridcell}>
                    <div className={styles.fallsavings6060Bonus}>
                      FALLSAVINGS60: 60% Bonus on …
                    </div>
                  </div>
                  <div className={styles.gridcell1}>
                    <div className={styles.div4}>2023-11-07</div>
                  </div>
                  <div className={styles.gridcell2}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector24.svg"
                    />
                  </div>
                  <div className={styles.gridcell3}>
                    <div className={styles.link1}>
                      <div className={styles.browse}>Browse</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rowPressSpaceToSelectTh}>
                  <div className={styles.gridcell4}>
                    <div className={styles.fallsavings6060Bonus}>
                      Crack Open the Treasure Chest…
                    </div>
                  </div>
                  <div className={styles.gridcell1}>
                    <div className={styles.div4}>2023-11-07</div>
                  </div>
                  <div className={styles.gridcell2}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector25.svg"
                    />
                  </div>
                  <div className={styles.gridcell3}>
                    <div className={styles.link1}>
                      <div className={styles.browse1}>Browse</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rowPressSpaceToSelectTh}>
                  <div className={styles.gridcell4}>
                    <div className={styles.trickOrTreat}>
                      Crack Open the Treasure Chest…
                    </div>
                  </div>
                  <div className={styles.gridcell1}>
                    <div className={styles.div6}>2023-11-07</div>
                  </div>
                  <div className={styles.gridcell2}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector25.svg"
                    />
                  </div>
                  <div className={styles.gridcell11}>
                    <div className={styles.link1}>
                      <div className={styles.browse1}>Browse</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rowPressSpaceToSelectTh3}>
                  <div className={styles.gridcell4}>
                    <div className={styles.trickOrTreat}>
                      Crack Open the Treasure Chest…
                    </div>
                  </div>
                  <div className={styles.gridcell1}>
                    <div className={styles.div4}>2023-11-07</div>
                  </div>
                  <div className={styles.gridcell2}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector25.svg"
                    />
                  </div>
                  <div className={styles.gridcell3}>
                    <div className={styles.link1}>
                      <div className={styles.browse1}>Browse</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rowPressSpaceToSelectTh4}>
                  <div className={styles.gridcell16}>
                    <div className={styles.trickOrTreat}>
                      Trick or Treat Yourself: 70% Bon…
                    </div>
                  </div>
                  <div className={styles.gridcell17}>
                    <div className={styles.div4}>2023-11-06</div>
                  </div>
                  <div className={styles.gridcell2}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector25.svg"
                    />
                  </div>
                  <div className={styles.gridcell11}>
                    <div className={styles.link1}>
                      <div className={styles.browse1}>Browse</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rowPressSpaceToSelectTh3}>
                  <div className={styles.gridcell16}>
                    <div className={styles.trickOrTreat}>
                      Trick or Treat Yourself: 70% Bon…
                    </div>
                  </div>
                  <div className={styles.gridcell1}>
                    <div className={styles.div4}>2023-11-06</div>
                  </div>
                  <div className={styles.gridcell2}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector25.svg"
                    />
                  </div>
                  <div className={styles.gridcell3}>
                    <div className={styles.link1}>
                      <div className={styles.browse1}>Browse</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rowPressSpaceToSelectTh3}>
                  <div className={styles.gridcell24}>
                    <div className={styles.trickOrTreat}>
                      Halloween Magic: Get 70% Bonu…
                    </div>
                  </div>
                  <div className={styles.gridcell1}>
                    <div className={styles.divagReactContainer}>
                      <div className={styles.div4}>2023-11-05</div>
                    </div>
                  </div>
                  <div className={styles.gridcell2}>
                    <img
                      className={styles.vectorIcon7}
                      alt=""
                      src="/vector26.svg"
                    />
                  </div>
                  <div className={styles.gridcell11}>
                    <div className={styles.link1}>
                      <div className={styles.browse1}>Browse</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divagBodyHorizontalScroll}>
                <div className={styles.divagBodyHorizontalScroll1} />
              </div>
              <div className={styles.divag17}>
                <div className={styles.divag17Child} />
                <div className={styles.spanagPagingRowSummaryPan}>
                  <div className={styles.spanagPagingRowSummaryPan1}>
                    <div className={styles.to}>0</div>
                    <div className={styles.to}>to</div>
                    <div className={styles.to}>0</div>
                    <div className={styles.to}>of</div>
                    <div className={styles.to}>0</div>
                  </div>
                </div>
                <div className={styles.spanagPagingRowSummaryPan}>
                  <div className={styles.presentationagPagingPageSu1}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon8}
                        alt=""
                        src="/vector17.svg"
                      />
                    </div>
                    <div className={styles.vectorFrame}>
                      <img
                        className={styles.vectorIcon9}
                        alt=""
                        src="/vector18.svg"
                      />
                    </div>
                    <div className={styles.spanagPagingDescription}>
                      <div className={styles.to}>Page</div>
                      <div className={styles.to}>0</div>
                      <div className={styles.to}>of</div>
                      <div className={styles.to}>0</div>
                    </div>
                    <div className={styles.vectorFrame}>
                      <img
                        className={styles.vectorIcon9}
                        alt=""
                        src="/vector19.svg"
                      />
                    </div>
                    <div className={styles.vectorFrame}>
                      <img
                        className={styles.vectorIcon11}
                        alt=""
                        src="/vector20.svg"
                      />
                    </div>
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
                <p className={styles.emailphone}>Lucky</p>
                <p className={styles.emailphone}>Dragon</p>
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
                  src="/fishnetlogo-29@2x.png"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/vector27@2x.png"
                />
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/bitcoinbtclogo-19@2x.png"
                />
                <img className={styles.dogeIcon} alt="" src="/doge9@2x.png" />
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
                    className={styles.vectorIcon13}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon14}
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon16}
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
              src="/section--link--image196@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image197@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image198@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image199@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image200@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image201@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image202@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image203@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image204@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image205@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image206@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image207@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image208@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image209@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image210@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image211@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image212@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image213@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image214@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image215@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image216@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image217@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image218@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image219@2x.png"
            />
          </div>
          <div className={styles.creditBar}>
            <div
              className={styles.allRightsReserved}
            >{`All Rights Reserved © `}</div>
            <div className={styles.div16}>2023</div>
            <div className={styles.fishnetwin}> Fishnetwin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionMessage;
