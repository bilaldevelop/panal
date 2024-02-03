import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./Deposits.module.css";

const Deposits = () => {
  const navigate = useNavigate();
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


  return (
    <div className={styles.deposits}>
      <div className={styles.divbody}>
        <Navbar />
        <div className={styles.frameParent}>

       
        <div className={styles.frameGroup}>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon}              
          alt="" src="/vector15.svg" />
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
            <button className={styles.account}>
              <img
                className={styles.divcss1i0ek3mIcon9}
                alt=""
                src="/divcss1i0ek3m3.svg"
              />
              <div className={styles.deposits1}>Deposits</div>
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
                  src="/flashgif@2x.png"
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
              <button className={styles.account2} onClick={onDeposit2Click}>
                <img
                  className={styles.divcss1i0ek3mIcon9}
                  alt=""
                  src="/divcss1i0ek3m3.svg"
                />
                <div className={styles.deposits2}>Deposits</div>
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
                    src="/flashgif@2x.png"
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
       

          <div className={styles.divcss4bp1b2Parent}>
            <div className={styles.divcss4bp1b2}>
              <div className={styles.heading2}>
                <div className={styles.myDeposits}>MY DEPOSITS</div>
                <div className={styles.buttonDepositStatusInfo}>
                  <img className={styles.groupIcon} alt="" src="/group1.svg" />
                </div>
              </div>
              <div className={styles.divwithdrawalDashboard}>
                <div className={styles.divagRootWrapper}>
                  <div className={styles.presentationagHeader}>
                    <div className={styles.row}>
                      <div className={styles.columnheader}>
                        <div className={styles.date}>Date</div>
                      </div>
                      <div className={styles.presentationagHeaderCellRe}>
                        <div className={styles.pseudo} />
                      </div>
                      <div className={styles.columnheader}>
                        <div className={styles.date}>Amount</div>
                      </div>
                      <div className={styles.presentationagHeaderCellRe}>
                        <div className={styles.pseudo} />
                      </div>
                      <div className={styles.columnheader2}>
                        <div className={styles.date}>Status</div>
                      </div>
                      <div className={styles.presentationagHeaderCellRe}>
                        <div className={styles.pseudo} />
                      </div>
                      <div className={styles.columnheader}>
                        <div className={styles.date}>Id</div>
                      </div>
                      <div className={styles.presentationagHeaderCellRe}>
                        <div className={styles.pseudo} />
                      </div>
                      <div className={styles.columnheader}>
                        <div className={styles.date}>Action</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.presentationagBodyViewport}>
                    <div className={styles.rowPressSpaceToSelectTh}>
                      <div className={styles.gridcell}>
                        <div className={styles.view}>2023-11-06</div>
                      </div>
                      <div className={styles.gridcell}>
                        <div className={styles.expired}>$10.00</div>
                      </div>
                      <div className={styles.gridcell}>
                        <div className={styles.expired}>Expired</div>
                      </div>
                      <div className={styles.gridcell3}>
                        <div className={styles.div6}>1102554</div>
                      </div>
                      <div className={styles.gridcell4}>
                        <div className={styles.link1}>
                          <div className={styles.view}>View</div>
                          <div className={styles.svgmargin}>
                            <div className={styles.svg}>
                              <img
                                className={styles.frameIcon}
                                alt=""
                                src="/frame.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.rowPressSpaceToSelectTh}>
                      <div className={styles.gridcell}>
                        <div className={styles.view}>2023-11-04</div>
                      </div>
                      <div className={styles.gridcell}>
                        <div className={styles.expired}>$10.00</div>
                      </div>
                      <div className={styles.gridcell7}>
                        <div className={styles.expired}>Expired</div>
                      </div>
                      <div className={styles.gridcell8}>
                        <div className={styles.div9}>1100649</div>
                      </div>
                      <div className={styles.gridcell}>
                        <div className={styles.link1}>
                          <div className={styles.view}>View</div>
                          <div className={styles.svgmargin}>
                            <div className={styles.svg}>
                              <img
                                className={styles.frameIcon}
                                alt=""
                                src="/frame.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector17.svg"
                        />
                      </div>
                      <div className={styles.vectorFrame}>
                        <img
                          className={styles.vectorIcon2}
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
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector19.svg"
                        />
                      </div>
                      <div className={styles.vectorFrame}>
                        <img
                          className={styles.vectorIcon4}
                          alt=""
                          src="/vector20.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcss0}>
              <div className={styles.divag17Child} />
              <div className={styles.divpaginationParent}>
                <div className={styles.divpagination}>
                  <div className={styles.button1}>
                    <div className={styles.prev}>Prev</div>
                  </div>
                  <div className={styles.button2}>
                    <div className={styles.prev}>Next</div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.divh2d96bc9342}>
                    <div className={styles.to}>1</div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <div className={styles.prev}>Custom Page Number</div>
                </div>
              </div>
              <div className={styles.divag17Child} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Deposits;
