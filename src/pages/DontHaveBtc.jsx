import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./DontHaveBtc.module.css";

const DontHaveBtc = () => {
  const navigate = useNavigate();

  const onLink1Click = useCallback(() => {
    navigate("/cash-app");
  }, [navigate]);

  const onLink2Click = useCallback(() => {
    navigate("/binance");
  }, [navigate]);

  const onLink3Click = useCallback(() => {
    navigate("/kraken");
  }, [navigate]);

  const onLink4Click = useCallback(() => {
    navigate("/coinbase");
  }, [navigate]);
  
  return (
    <div className={styles.dontHaveBtc}>
      <div className={styles.divbody}>
       <Navbar />
        <div className={styles.frame1}>
          <div className={styles.heading1}>DON'T HAVE A BITCOIN ADDRESS?</div>
          <div className={styles.chooseAmongTheApplicationsWrapper}>
            <div className={styles.chooseAmongTheContainer}>
              <p className={styles.chooseAmongThe}>
                Choose among the applications below and see instruction pages
                with
              </p>
              <p className={styles.chooseAmongThe}>
                {" "}
                videos on how to register, buy, send and convert bitcoin (BTC)
                on your
              </p>
              <p className={styles.chooseAmongThe}> favorite application.</p>
            </div>
          </div>
          <div className={styles.linkParent}>
            <button className={styles.link1} onClick={onLink1Click}>
              <img className={styles.imageIcon} alt="" src="/image25@2x.png" />
            </button>
            <button className={styles.link2} onClick={onLink2Click}>
              <img className={styles.imageIcon} alt="" src="/image26@2x.png" />
            </button>
            <button className={styles.link2} onClick={onLink3Click}>
              <img className={styles.imageIcon} alt="" src="/image27@2x.png" />
            </button>
            <button className={styles.link2} onClick={onLink4Click}>
              <img className={styles.imageIcon} alt="" src="/image28@2x.png" />
            </button>
          </div>
        </div>
        <img className={styles.imageIcon4} alt="" src="/image29@2x.png" />
        <Footer />
      </div>
    </div>
  );
};

export default DontHaveBtc;
