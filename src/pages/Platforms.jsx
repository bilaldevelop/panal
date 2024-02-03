import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Platforms.module.css";

const Platforms = () => {
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

  const onDashboard1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onAccount1Click = useCallback(() => {
    navigate("/account");
  }, [navigate]);

  const onEmailVerification1Click = useCallback(() => {
    navigate("/change-emailphone");
  }, [navigate]);

  const onEmail1Click = useCallback(() => {
    navigate("/emailphone-verifications");
  }, [navigate]);

  const onChangePassword1Click = useCallback(() => {
    navigate("/change-password");
  }, [navigate]);

  const onBonus1Click = useCallback(() => {
    navigate("/bonuses");
  }, [navigate]);

  const onVerification1Click = useCallback(() => {
    navigate("/verifications");
  }, [navigate]);

  const onMessageContainer1Click = useCallback(() => {
    navigate("/system-message");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/platforms");
  }, [navigate]);

  const onDeposit2Click = useCallback(() => {
    navigate("/deposits");
  }, [navigate]);

  const onFlashDeposit1Click = useCallback(() => {
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
    <div className={styles.platforms}>
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
              src="/svgviewerpngoutput-2-17@2x.png"
            />
            <div className={styles.frame}>
              <img
                className={styles.svgviewerPngOutput1Icon}
                alt=""
                src="/svgviewerpngoutput-18@2x.png"
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
        <div className={styles.divcssEbb7g3}>
          <div className={styles.frameParent}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
            </div>
            <div className={styles.sidebar}>
              <div className={styles.dashboard}>
                <button className={styles.dashboard1}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.dashboard2}>Dashboard</div>
                </button>
                <button className={styles.account}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.account1}>Account</div>
                </button>
                <button className={styles.emailVerification}>
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
                <button className={styles.emailVerification}>
                  <img
                    className={styles.divcss1i0ek3mIcon2}
                    alt=""
                    src="/divcss1i0ek3m1.svg"
                  />
                  <div className={styles.emailphoneChangingVerificatContainer}>
                    <span className={styles.emailphoneChangingTxtContainer}>
                      <p className={styles.emailphone}>Email/Phone</p>
                      <p className={styles.emailphone}>
                        changing verifications
                      </p>
                    </span>
                  </div>
                </button>
                <button className={styles.account}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.changePassword1}>Change Password</div>
                </button>
                <button className={styles.account}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.bonuses}>Bonuses</div>
                </button>
                <button className={styles.account}>
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
                <div className={styles.message}>
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
                <div className={styles.platforms1}>Platforms</div>
                <button className={styles.divcss1i0ek3mParent}>
                  <img
                    className={styles.divcss1i0ek3mIcon8}
                    alt=""
                    src="/divcss1i0ek3m2.svg"
                  />
                  <div className={styles.platforms2}>Platforms</div>
                </button>
              </div>
              <div className={styles.finance}>
                <div className={styles.platforms1}>Finance</div>
                <button className={styles.account}>
                  <img
                    className={styles.divcss1i0ek3mIcon9}
                    alt=""
                    src="/divcss1i0ek3m3.svg"
                  />
                  <div className={styles.deposits}>Deposits</div>
                </button>
                <button className={styles.flashDeposit2}>
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
                      src="/flashgif1@2x.png"
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
          </div>
          <div className={styles.sidebar1}>
            <div className={styles.dashboard3}>
              <button className={styles.dashboard4} onClick={onDashboard1Click}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.dashboard5}>Dashboard</div>
              </button>
              <button className={styles.account2} onClick={onAccount1Click}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.account3}>Account</div>
              </button>
              <button
                className={styles.emailVerification1}
                onClick={onEmailVerification1Click}
              >
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
              <button
                className={styles.emailVerification1}
                onClick={onEmail1Click}
              >
                <img
                  className={styles.divcss1i0ek3mIcon2}
                  alt=""
                  src="/divcss1i0ek3m1.svg"
                />
                <div className={styles.emailphoneChangingVerificatContainer2}>
                  <span className={styles.emailphoneChangingTxtContainer}>
                    <p className={styles.emailphone}>Email/Phone</p>
                    <p className={styles.emailphone}>changing verifications</p>
                  </span>
                </div>
              </button>
              <button
                className={styles.account2}
                onClick={onChangePassword1Click}
              >
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.changePassword3}>Change Password</div>
              </button>
              <button className={styles.account2} onClick={onBonus1Click}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.bonuses1}>Bonuses</div>
              </button>
              <button
                className={styles.account2}
                onClick={onVerification1Click}
              >
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
              <div
                className={styles.message1}
                onClick={onMessageContainer1Click}
              >
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
            <div className={styles.finance}>
              <div className={styles.platforms1}>Platforms</div>
              <button
                className={styles.divcss1i0ek3mGroup}
                onClick={onFrameButtonClick}
              >
                <img
                  className={styles.divcss1i0ek3mIcon20}
                  alt=""
                  src="/divcss1i0ek3m5.svg"
                />
                <div className={styles.platforms4}>Platforms</div>
              </button>
            </div>
            <div className={styles.finance}>
              <div className={styles.platforms1}>Finance</div>
              <button className={styles.account2} onClick={onDeposit2Click}>
                <img
                  className={styles.divcss1i0ek3mIcon9}
                  alt=""
                  src="/divcss1i0ek3m3.svg"
                />
                <div className={styles.deposits1}>Deposits</div>
              </button>
              <button
                className={styles.flashDeposit4}
                onClick={onFlashDeposit1Click}
              >
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
                    src="/flashgif1@2x.png"
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
          <div className={styles.divcssJi6ka9}>
            <div className={styles.heading2margin}>
              <div className={styles.myPlatformAccounts}>
                My Platform Accounts
              </div>
            </div>
            <div className={styles.separatormargin}>
              <div className={styles.separator} />
            </div>
            <div className={styles.table}>
              <div className={styles.headerRow}>
                <div className={styles.cell}>
                  <div className={styles.username}>Platform</div>
                </div>
                <div className={styles.cell1}>
                  <div className={styles.username}>Username</div>
                </div>
                <div className={styles.cell1}>
                  <div className={styles.username}>URL</div>
                </div>
                <div className={styles.cell1}>
                  <div className={styles.username}>Password</div>
                </div>
              </div>
              <div className={styles.bodyRow}>
                <div className={styles.gridcell}>
                  <div className={styles.funzone}>FunZone</div>
                </div>
                <div className={styles.gridcell1}>
                  <div className={styles.funzone}>55-79-75-26-56-01</div>
                </div>
                <div className={styles.gridcell2}>
                  <div className={styles.funzone}>https://funzone777.com/</div>
                </div>
                <div className={styles.gridcell1}>
                  <div className={styles.funzone}>
                    This platform doesn't require password
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heading2margin1}>
              <div className={styles.allPlatforms}>ALL PLATFORMS</div>
            </div>
            <div className={styles.table1}>
              <div className={styles.headerRow}>
                <div className={styles.cell4}>
                  <div className={styles.status}>Platform</div>
                </div>
                <div className={styles.cell5}>
                  <div className={styles.status}>Status</div>
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Ultrapower</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Rivermonster</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Skillmine</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Paradise Casino</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Vegas7</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>VegasX</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Riversweeps</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Ice8</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Juwa</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Gold Hunter</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Golden Treasure</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Game Vault</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Vegas Sweeps</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Milky Way</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>FunZone</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button15}>
                      <div className={styles.created}>created</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Fire Kirin</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.spanchakraBadge}>
                      <div className={styles.requested}>requested</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Orion Stars</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Admiral</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Lucky Dragon</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Flamingo7</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>ICE7</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Fire Master</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Golden Dragon</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
                <div className={styles.row}>
                  <div className={styles.gridcell4}>
                    <div className={styles.funzone}>Tai Chi Master</div>
                  </div>
                  <div className={styles.gridcell5}>
                    <button className={styles.button1}>
                      <div className={styles.request1}>REQUEST</div>
                    </button>
                  </div>
                </div>
                <div className={styles.bodyChild} />
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
                  src="/fishnetlogo-28@2x.png"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/vector22@2x.png"
                />
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/bitcoinbtclogo-18@2x.png"
                />
                <img className={styles.dogeIcon} alt="" src="/doge8@2x.png" />
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
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon5}
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
              src="/section--link--image172@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image173@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image174@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image175@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image176@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image177@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image178@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image179@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image180@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image181@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image182@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image183@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image184@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image185@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image186@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image187@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image188@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image189@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image190@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image191@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image192@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image193@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image194@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image195@2x.png"
            />
          </div>
          <div className={styles.creditBar}>
            <div
              className={styles.allRightsReserved}
            >{`All Rights Reserved © `}</div>
            <div className={styles.div5}>2023</div>
            <div className={styles.fishnetwin}> Fishnetwin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
