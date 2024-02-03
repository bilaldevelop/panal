import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();

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

  const onFlashDepositClick = useCallback(() => {
    navigate("/flash-deposit");
  }, [navigate]);

  const onDepositClick = useCallback(() => {
    navigate("/deposits");
  }, [navigate]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.dashboard}>
        <button className={styles.dashboard1} onClick={onDashboardClick}>
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.emailphoneChanging}>Dashboard</div>
        </button>
        <button className={styles.account} onClick={onAccountClick}>
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.emailphoneChanging}>Account</div>
        </button>
        <button
          className={styles.emailVerification}
          onClick={onEmailVerificationClick}
        >
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.emailphoneChanging}>
            <p className={styles.emailphone}>Email/Phone</p>
            <p className={styles.emailphone}>changing</p>
          </div>
        </button>
        <button className={styles.email} onClick={onEmailClick}>
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.emailphoneChanging}>
            <p className={styles.emailphone}>Email/Phone</p>
            <p className={styles.emailphone}>changing verifications</p>
          </div>
        </button>
        <button
          className={styles.changePassword}
          onClick={onChangePasswordClick}
        >
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.emailphoneChanging}>Change Password</div>
        </button>
        <button className={styles.account} onClick={onBonusClick}>
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.emailphoneChanging}>Bonuses</div>
        </button>
        <button className={styles.verification} onClick={onVerificationClick}>
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.emailphoneChanging}>Verifications</div>
          <div className={styles.spanverificationCount}>
            <div className={styles.div}>3</div>
          </div>
        </button>
        <div className={styles.message} onClick={onMessageContainerClick}>
          <div className={styles.divcss1i0ek3m}>
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.messages}>Messages</div>
          <div className={styles.divcssQ7fb8o}>
            <div className={styles.div1}>6</div>
          </div>
        </div>
        <div className={styles.platform}>
          <div className={styles.platforms}>Platforms</div>
          <button
            className={styles.divcss1i0ek3mParent}
            onClick={onFrameButtonClick}
          >
            <div className={styles.divcss1i0ek3m8}>
              <img className={styles.vectorIcon8} alt="" src="/vector6.svg" />
            </div>
            <div className={styles.emailphoneChanging}>Platforms</div>
          </button>
        </div>
        <button className={styles.account} onClick={onFlashDepositClick}>
          <div className={styles.divcss1i0ek3m9}>
            <img className={styles.vectorIcon8} alt="" src="/vector6.svg" />
          </div>
          <div className={styles.divh2dB1545c52}>
            <div className={styles.flashDeposit1}>Flash Deposit</div>
            <img
              className={styles.flashgifIcon}
              alt=""
              src="/flashgif@2x.png"
            />
          </div>
        </button>
        <div className={styles.finance}>
          <div className={styles.platforms}>Finance</div>
          <button className={styles.deposit} onClick={onDepositClick}>
            <div className={styles.divcss1i0ek3m8}>
              <img className={styles.vectorIcon8} alt="" src="/vector6.svg" />
            </div>
            <div className={styles.emailphoneChanging}>Deposits</div>
          </button>
          <button className={styles.deposit}>
            <div className={styles.divcss1i0ek3m8}>
              <img className={styles.vectorIcon8} alt="" src="/vector6.svg" />
            </div>
            <div className={styles.emailphoneChanging}>Withdrawals</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
