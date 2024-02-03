import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';

  const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        // Handle user not logged in
        navigate("/login");
      }
    };
    fetchData();
  }, [navigate, auth]);

  const firstName = userData ? userData.firstName : '';
  const lastName = userData ? userData.lastName : '';

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

  const onInputClick = useCallback(() => {
    //TODO: Here we will need to display results from cart/check out.
  }, []);

  const onInput1Click = useCallback(() => {
    //TODO: here we need to display total numbers of sucessfull checkouts of this particualr user
  }, []);

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
    <div className={styles.dashboard}>
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
        <div className={styles.body}>
          <div className={styles.sidebar}>
            <div className={styles.dashboard1}>
              <button className={styles.dashboard2} onClick={onDashboardClick}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.dashboard3}>Dashboard</div>
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
          <div className={styles.frameParent}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
            </div>
            <div className={styles.sidebar1}>
              <div className={styles.dashboard4}>
                <button className={styles.dashboard5}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.dashboard6}>Dashboard</div>
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
          </div>
          <div className={styles.main}>
            <div className={styles.divcss14sa009}>
              <div className={styles.divcss14sa009Inner}>
                <div className={styles.welcomeBackParent}>
                  <div className={styles.welcomeBack}>Welcome Back,</div>
                  <div className={styles.hammaLikao}>{userData ? `${userData.firstName} ${userData.lastName}` : 'User'}</div>
      </div>
              </div>
              <div className={styles.withdraws}>
                <div className={styles.left}>
                  <div className={styles.totalWithdrawal}>Total Withdrawal</div>
                  <input
                    className={styles.input}
                    placeholder="$0.00"
                    type="number"
                    onClick={onInputClick}
                  />
                  <div className={styles.totalWithdrawalsYou}>
                    Total Withdrawals You Made
                  </div>
                </div>
                <div className={styles.left}>
                  <div className={styles.totalWithdrawal}>
                    Withdrawals Count
                  </div>
                  <input
                    className={styles.input}
                    placeholder="0"
                    type="number"
                    onClick={onInput1Click}
                  />
                  <div className={styles.totalWithdrawalsYou}>
                    Withdrawals count
                  </div>
                </div>
              </div>
              <div className={styles.yourLevels}>
                <div
                  className={styles.yourLevelIs}
                >{`Your level is: Level 1 `}</div>
              </div>
              <div className={styles.level}>
                <div className={styles.divcss12etqa6}>
                  <div className={styles.divflipCardParent}>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner}>
                        <div className={styles.heading2}>
                          <div className={styles.level1}>Level 1</div>
                        </div>
                        <div className={styles.divcssEkt2k}>
                          <div className={styles.pchakraText}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong}>
                              <div className={styles.div4}>$ 0-499:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText1}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$200</div>
                          </div>
                          <div className={styles.pchakraText2}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>0%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner1}>
                        <div className={styles.heading21}>
                          <div className={styles.level4}>Level 4</div>
                        </div>
                        <div className={styles.divcssEkt2k1}>
                          <div className={styles.pchakraText}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan1}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong1}>
                              <div className={styles.div5}>$ 2000-3999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText1}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$200</div>
                          </div>
                          <div className={styles.pchakraText2}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>3%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner2}>
                        <div className={styles.heading22}>
                          <div className={styles.level7}>Level 7</div>
                        </div>
                        <div className={styles.divcssEkt2k2}>
                          <div className={styles.pchakraText6}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan2}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong2}>
                              <div className={styles.div6}>$ 16000-</div>
                              <div className={styles.div7}>31999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText7}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$500</div>
                          </div>
                          <div className={styles.pchakraText8}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>6%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner3}>
                        <div className={styles.heading23}>
                          <div className={styles.level10}>Level 10</div>
                        </div>
                        <div className={styles.divcssEkt2k2}>
                          <div className={styles.pchakraText6}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan3}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong4}>
                              <div className={styles.div8}>$ 128000-</div>
                              <div className={styles.div9}>255999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText7}>
                            <div
                              className={styles.withdrawalLimit3}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong1000}>$1000</div>
                          </div>
                          <div className={styles.pchakraText8}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>9%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner4}>
                        <div className={styles.heading24}>
                          <div className={styles.level13}>Level 13</div>
                        </div>
                        <div className={styles.divcssEkt2k1}>
                          <div className={styles.pchakraText}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan4}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong5}>
                              <div className={styles.m}>$ 1M+:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText1}>
                            <div
                              className={styles.withdrawalLimit4}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strongUnlimited}>
                              $unlimited
                            </div>
                          </div>
                          <div className={styles.pchakraText2}>
                            <div
                              className={styles.depositBonus4}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong12}>12%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divflipCardParent}>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner5}>
                        <div className={styles.heading25}>
                          <div className={styles.level2}>Level 2</div>
                        </div>
                        <div className={styles.divcssEkt2k1}>
                          <div className={styles.pchakraText}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan5}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong7}>
                              <div className={styles.div10}>$ 500-999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText1}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$200</div>
                          </div>
                          <div className={styles.pchakraText2}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>1%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner6}>
                        <div className={styles.heading26}>
                          <div className={styles.level5}>Level 5</div>
                        </div>
                        <div className={styles.divcssEkt2k}>
                          <div className={styles.pchakraText}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan6}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong1}>
                              <div className={styles.div5}>$ 4000-7999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText1}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$300</div>
                          </div>
                          <div className={styles.pchakraText2}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>4%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner7}>
                        <div className={styles.heading27}>
                          <div className={styles.level8}>Level 8</div>
                        </div>
                        <div className={styles.divcssEkt2k7}>
                          <div className={styles.pchakraText6}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan2}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong2}>
                              <div className={styles.div6}>$ 32000-</div>
                              <div className={styles.div7}>63999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText7}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$600</div>
                          </div>
                          <div className={styles.pchakraText8}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>7%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner8}>
                        <div className={styles.heading28}>
                          <div className={styles.level11}>Level 11</div>
                        </div>
                        <div className={styles.divcssEkt2k2}>
                          <div className={styles.pchakraText6}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan3}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong4}>
                              <div className={styles.div8}>$ 256000-</div>
                              <div className={styles.div9}>499999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText7}>
                            <div
                              className={styles.withdrawalLimit3}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong1000}>$1500</div>
                          </div>
                          <div className={styles.pchakraText8}>
                            <div
                              className={styles.depositBonus4}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong12}>10%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divflipCardParent}>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner9}>
                        <div className={styles.heading29}>
                          <div className={styles.level3}>Level 3</div>
                        </div>
                        <div className={styles.divcssEkt2k}>
                          <div className={styles.pchakraText}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan6}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong1}>
                              <div className={styles.div5}>$ 1000-1999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText1}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$200</div>
                          </div>
                          <div className={styles.pchakraText2}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>2%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner10}>
                        <div className={styles.heading210}>
                          <div className={styles.level6}>Level 6</div>
                        </div>
                        <div className={styles.divcssEkt2k}>
                          <div className={styles.pchakraText}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan10}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong15}>
                              <div className={styles.div17}>$ 8000-15999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText1}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$400</div>
                          </div>
                          <div className={styles.pchakraText2}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>5%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard11}>
                      <div className={styles.divflipCardInner11}>
                        <div className={styles.heading210}>
                          <div className={styles.level6}>Level 9</div>
                        </div>
                        <div className={styles.divcssEkt2k7}>
                          <div className={styles.pchakraText6}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan2}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong16}>
                              <div className={styles.div18}>$ 64000-</div>
                              <div className={styles.div19}>127999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText7}>
                            <div
                              className={styles.withdrawalLimit}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong200}>$700</div>
                          </div>
                          <div className={styles.pchakraText8}>
                            <div
                              className={styles.depositBonus}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong0}>8%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divflipCard}>
                      <div className={styles.divflipCardInner12}>
                        <div className={styles.heading212}>
                          <div className={styles.level12}>Level 12</div>
                        </div>
                        <div className={styles.divcssEkt2k7}>
                          <div className={styles.pchakraText6}>
                            <div className={styles.eligibleUsersWho}>
                              Eligible: Users who made
                            </div>
                            <div
                              className={styles.depositsLessThan3}
                            >{`deposits less than - `}</div>
                            <div className={styles.strong4}>
                              <div className={styles.div8}>$ 500000-</div>
                              <div className={styles.div9}>999999:</div>
                            </div>
                          </div>
                          <div className={styles.pchakraText7}>
                            <div
                              className={styles.withdrawalLimit3}
                            >{`Withdrawal limit: `}</div>
                            <div className={styles.strong1000}>$2000</div>
                          </div>
                          <div className={styles.pchakraText8}>
                            <div
                              className={styles.depositBonus4}
                            >{`Deposit Bonus: `}</div>
                            <div className={styles.strong111}>11%</div>
                          </div>
                        </div>
                      </div>
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
              <div className={styles.heading213}>Pages</div>
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
              <div className={styles.heading213}>Promotions</div>
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
              <div className={styles.heading213}>Platforms</div>
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
                  src="/fishnetlogo-214@2x.png"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/vector32@2x.png"
                />
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/bitcoinbtclogo-114@2x.png"
                />
                <img className={styles.dogeIcon} alt="" src="/doge14@2x.png" />
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
              src="/section--link--image316@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image317@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image318@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image319@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image320@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image321@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image322@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image323@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image324@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image325@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image326@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image327@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image328@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image329@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image330@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image331@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image332@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image333@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image334@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image335@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image336@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image337@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image338@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image339@2x.png"
            />
          </div>
          <div className={styles.creditBar}>
            <div
              className={styles.allRightsReserved}
            >{`All Rights Reserved © `}</div>
            <div className={styles.div22}>2023</div>
            <div className={styles.fishnetwin}> Fishnetwin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
