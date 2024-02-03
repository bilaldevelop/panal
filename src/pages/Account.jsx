import { useCallback, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Account.module.css";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Account = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [userData, setUserData] = useState(null);
  const { currentUser } = useContext(AuthContext);

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
  const firstName = userData ? userData.firstName : "";
  const lastName = userData ? userData.lastName : "";
  const email = userData ? userData.email : "";
  const phone = userData ? userData.phone : "";
  const username = userData ? userData.username : "";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Handle successful logout here, e.g., updating state or redirecting
    } catch (error) {
      // Handle errors here, such as displaying a message to the user
      console.error("Logout failed: ", error);
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  const userGreeting = userData ? (
    <div className={styles.userDetails}>
      <span>Welcome, {userData.username || "User"}</span>
      {/* Add more user details or a logout button here if you like */}
    </div>
  ) : (
    <div className={styles.signInParent}>
      <button className={styles.signIn} onClick={onSignInClick}>
        <div className={styles.signIn1}>Sign In</div>
      </button>
      <button className={styles.signUp} onClick={onSignUpClick}>
        <div className={styles.signUp1}>Sign Up</div>
      </button>
    </div>
  );


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

  const onSpanchakraBadgeClick = useCallback(() => {
    const firstName = userData ? userData.firstName : "";
  }, []);

  const onAshrafggmalikgmailcomClick = useCallback(() => {
    const email = userData ? userData.email : "";
  }, []);
  return (
    <div className={styles.account}>
      <main className={styles.divbody}>
       <Navbar />
        <div className={styles.body}>
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
                <button className={styles.changePassword}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.account2}>Account</div>
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
                <button className={styles.changePassword}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.changePassword1}>Change Password</div>
                </button>
                <button className={styles.changePassword}>
                  <img
                    className={styles.divcss1i0ek3mIcon}
                    alt=""
                    src="/divcss1i0ek3m.svg"
                  />
                  <div className={styles.bonuses}>Bonuses</div>
                </button>
                <button className={styles.changePassword}>
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
                <div className={styles.platforms}>Platforms</div>
                <button className={styles.divcss1i0ek3mParent}>
                  <img
                    className={styles.divcss1i0ek3mIcon8}
                    alt=""
                    src="/divcss1i0ek3m2.svg"
                  />
                  <div className={styles.platforms1}>Platforms</div>
                </button>
              </div>
              <div className={styles.finance}>
                <div className={styles.platforms}>Finance</div>
                <button className={styles.changePassword}>
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
                <button className={styles.changePassword}>
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
              <button className={styles.account3} onClick={onAccount1Click}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.account4}>Account</div>
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
                className={styles.account3}
                onClick={onChangePassword1Click}
              >
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.changePassword3}>Change Password</div>
              </button>
              <button className={styles.account3} onClick={onBonus1Click}>
                <img
                  className={styles.divcss1i0ek3mIcon}
                  alt=""
                  src="/divcss1i0ek3m.svg"
                />
                <div className={styles.bonuses1}>Bonuses</div>
              </button>
              <button
                className={styles.account3}
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
              <div className={styles.platforms}>Platforms</div>
              <button
                className={styles.divcss1i0ek3mGroup}
                onClick={onFrameButtonClick}
              >
                <img
                  className={styles.divcss1i0ek3mIcon20}
                  alt=""
                  src="/divcss1i0ek3m5.svg"
                />
                <div className={styles.platforms3}>Platforms</div>
              </button>
            </div>
            <div className={styles.finance}>
              <div className={styles.platforms}>Finance</div>
              <button className={styles.account3} onClick={onDeposit2Click}>
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
              <button className={styles.account3}>
                <img
                  className={styles.divcss1i0ek3mIcon9}
                  alt=""
                  src="/divcss1i0ek3m3.svg"
                />
                <div className={styles.withdrawals1}>Withdrawals</div>
              </button>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.divcss0}>
              <div className={styles.label}>
                <div className={styles.personalInfo}>Personal Info</div>
              </div>
              <div className={styles.form}>
                <div className={styles.separator} />
                <div className={styles.divcssV19x9v}>
                  <div className={styles.divcss01}>
                    <div className={styles.group}>
                      <div className={styles.label}>
                        <div className={styles.firstName}>First Name</div>
                      </div>
                      <div className={styles.spanchakraBadge2}>
                        <input
                          className={styles.input}
                          value={firstName}
                          type="text"
                          readOnly // Remove readOnly if you want it to be editable
                        />
                      </div>
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className={styles.divcss01}>
                    <div className={styles.group}>
                      <div className={styles.label}>
                        <div className={styles.firstName}>Last Name</div>
                      </div>
                      <div className={styles.spanchakraBadge2}>
                        <input
                          className={styles.input} // Make sure this className matches the one defined in your CSS for the input field
                          value={lastName} // The lastName value from your component's state
                          type="text"
                          readOnly // Remove readOnly if you want it to be editable
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.label}>
                    <div className={styles.ethAddress}>Email</div>
                  </div>
                  <div className={styles.spanchakraBadge2}>
                    <input
                      className={styles.input}
                      value={email}
                      type="email"
                      onClick={onAshrafggmalikgmailcomClick}
                      readOnly // Remove readOnly if you want it to be editable
                    />
                  </div>
                </div>
                <div className={styles.group3}>
                  <div className={styles.label}>
                    <div className={styles.ethAddress}>ETH Address</div>
                  </div>
                  <div className={styles.divcss69i1ev}>
                    <input
                      className={styles.input}
                      placeholder="Enter ETH Address"
                      type="text"
                    />
                    <div className={styles.buttonmargin}>
                      <button className={styles.button1}>
                        <div className={styles.default}>Default</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.group3}>
                  <div className={styles.label}>
                    <div className={styles.ethAddress}>BTC Address</div>
                  </div>
                  <div className={styles.divcss69i1ev}>
                    <input
                      className={styles.input}
                      placeholder="Enter BTC Address"
                      type="text"
                    />
                    <div className={styles.buttonmargin}>
                      <button className={styles.button2}>
                        <div className={styles.default}>Default</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.group3}>
                  <div className={styles.label}>
                    <div className={styles.ethAddress}>DOGE Address</div>
                  </div>
                  <div className={styles.divcss69i1ev}>
                    <input
                      className={styles.input}
                      placeholder="Enter DOGE Address"
                      type="text"
                    />
                    <div className={styles.buttonmargin}>
                      <button className={styles.button2}>
                        <div className={styles.default}>Default</div>
                      </button>
                    </div>
                  </div>
                </div>
                <button className={styles.button4}>
                  <div className={styles.update}>Update</div>
                </button>
              </div>
            </div>
            <div className={styles.divcss03}>
              <div className={styles.frame1}>
                <div className={styles.label}>
                  <div className={styles.personalInfo}>Account Details</div>
                </div>
                <div className={styles.separator} />
              </div>
              <div className={styles.frame2}>
                <div className={styles.frame3}>
                  <div className={styles.divcss4w7xet}>
                    <div className={styles.divcss04}>
                      <div className={styles.label}>
                        <div className={styles.referralCode}>Referral Code</div>
                      </div>
                    </div>
                    <div className={styles.divcss17xejub} />
                    <div className={styles.divcss05}>
                      <div className={styles.spanchakraBadge3}>
                        <input
                          className={styles.f66b842d}
                          placeholder="02f66b842d"
                          type="number"
                        />
                      </div>
                      <div className={styles.button5}>
                        <img
                          className={styles.svgIcon1}
                          alt=""
                          src="/svg1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.divcss4w7xet}>
                    <div className={styles.group}>
                      <div className={styles.label}>
                        <div className={styles.ethAddress}>Phone</div>
                      </div>
                      <div className={styles.spanchakraBadge2}>
                        <input
                          className={styles.input}
                          value={phone}
                          type="email"
                          readOnly // Remove readOnly if you want it to be editable
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame4}>
                  <div className={styles.divcss4w7xet}>
                    <div className={styles.divcss06}>
                      <div className={styles.label}>
                        <div className={styles.phone}>Role</div>
                      </div>
                    </div>
                    <div className={styles.divcss17xejub} />
                    <textarea
                      className={styles.divcss09}
                      placeholder="Level 1"
                    />
                  </div>
                  <div className={styles.divcss4w7xet}>
                    <div className={styles.divcss06}>
                      <div className={styles.label}>
                        <div className={styles.phone}>Username</div>
                      </div>
                    </div>
                    <div className={styles.divcss17xejub} />
                    <div className={styles.spanchakraBadge2}>
                      <input className={styles.input} value={username} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Account;
