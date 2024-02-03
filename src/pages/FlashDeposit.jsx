import { useCallback } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./FlashDeposit.module.css";

const FlashDeposit = () => {

  const onSectionList1Click = useCallback(() => {
    window.location.href = "tel:+1 209 444 7244";
  }, []);

  const onSectionListItemButtonClick = useCallback(() => {
    window.open("https://t.me/agenthabbit");
  }, []);

  const onVectorIcon1Click = useCallback(() => {
    window.open("m.me/313159416057889");
  }, []);
  
  return (
    <div className={styles.flashDeposit}>
      <main className={styles.divbody}>
       <Navbar />
        <section className={styles.body}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.sectionHeading1FlashDeWrapper}>
                <h1 className={styles.sectionHeading}>Flash Deposit</h1>
              </div>
              <div className={styles.sectionIfYouWantToDeposWrapper}>
                <div className={styles.sectionIf}>
                  If you want to deposit on any FishNetWin platform instantly,
                  then this feature will definitely be your favorite. The
                  feature is called Flash Deposit.
                </div>
              </div>
              <div className={styles.sectionHeading4WhatIsWrapper}>
                <div className={styles.sectionHeading1}>
                  What is Flash Deposit?
                </div>
              </div>
              <div className={styles.sectionFlashDepositIsTheParent}>
                <div className={styles.sectionFlash}>
                  Flash Deposit is the feature that helps players to make
                  deposits in a few minutes and start playing instantly. Through
                  Flash Deposit, our beloved players will be able to create
                </div>
                <div className={styles.sectionFlash}>deposit orders via</div>
              </div>
              <div className={styles.sectionListItemOurTeParent}>
                <div className={styles.sectionList}>Our Telegram : ✉</div>
                <div
                  className={styles.sectionList1}
                  onClick={onSectionList1Click}
                >
                  +1 209 444 7244
                </div>
                <button
                  className={styles.sectionListItemButton}
                  onClick={onSectionListItemButtonClick}
                >
                  <div className={styles.linkMake}>Make deposit</div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector41.svg"
                  />
                </button>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.sectionListItemBitbetWrapper}>
                  <div className={styles.sectionIf}>FishNetWin Live Chat</div>
                </div>
                <div className={styles.sectionListItemFaceboParent}>
                  <div className={styles.sectionList3}>Facebook Messenger</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector42.svg"
                    onClick={onVectorIcon1Click}
                  />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.sectionListItemBitbetWrapper}>
                  <div className={styles.sectionIf}>
                    As well as every contact channel
                  </div>
                </div>
                <div className={styles.sectionHeading4HowToUWrapper}>
                  <div className={styles.sectionHeading1}>
                    How to use Flash Deposit?
                  </div>
                </div>
              </div>
              <div className={styles.sectionYouCanUtilizeTheWrapper}>
                <div className={styles.sectionIf}>
                  You can utilize the Flash Deposit feature in a few simple
                  steps. All you need to do to request a deposit order is to
                  provide the following:
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.sectionFlash}>
                  Your email address that is linked to your FishNetWin account
                </div>
                <div className={styles.sectionFlash}>
                  The name of the platform where you want to make a deposit
                </div>
                <div className={styles.sectionFlash}>
                  The amount of the deposit
                </div>
                <div className={styles.sectionFlash}>And a coupon code</div>
              </div>
              <div className={styles.sectionYouCanUtilizeTheWrapper}>
                <div className={styles.sectionIf}>
                  As soon as you complete this step, our support agent will send
                  you an invoice link, and you will be asked to finalize the
                  transaction by sending the funds.
                </div>
              </div>
            </div>
            <div className={styles.sectionFlashdepositpngWrapper}>
            <img
            className={styles.sectionFlashdepositpng}
            alt=""
            src="/section--flashdepositpng@2x.png"
          />
            </div>
          </div>
          <div className={styles.sectionHeading6MakeDepWrapper}>
            <div className={styles.sectionHeading3}>
              Make Deposits More Efficiently through Flash Deposit Feature Right
              Now!
            </div>
          </div>
        </section>
      <Footer />        
      </main>
    </div>
  );
};

export default FlashDeposit;
