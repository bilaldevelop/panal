import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./Binance.module.css";

const Binance = () => {
  const navigate = useNavigate();

  const onLinkContainer5Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLinkContainer6Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.binance}>
      <main className={styles.divbody}>
       <Navbar />
        <div className={styles.heading1BinanceOnlineBParent}>
          <section className={styles.heading1}>
            Binance - Online fishnetwin Casino
          </section>
          <section className={styles.section}>
            <div className={styles.frame1}>
              <h1 className={styles.heading2}>
                How To Create A Binance Account
              </h1>
              <div className={styles.listItemVisitTheOfficiParent}>
                <div className={styles.listItem}>
                  Visit the official Binance website binance.com and click
                  Register. If you’re a US-based citizen, visit binance.us.
                </div>
                <div className={styles.listItem}>
                  Enter your email address, password, tick the box. After
                  reading the Binance Terms of Use, click Create Account.
                </div>
                <div className={styles.listItem}>
                  Before you proceed to the next step, you have to complete a
                  puzzle verification code. Move the slider to the appropriate
                  location.
                </div>
                <div className={styles.listItem}>
                  You will receive a verification email. Take note: the email
                  will be sent to the email you provided. Click the confirmation
                  link in your email and log-in again. You have to confirm your
                  registration within ten minutes.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article11@2x.png"
            />
          </section>
          <section className={styles.section1}>
            <div className={styles.heading2BuyBitcoinParent}>
              <h1 className={styles.heading2}>Buy Bitcoin</h1>
              <div className={styles.listThereAreTwoPrimaryWParent}>
                <div className={styles.listThere}>
                  There are two primary ways to buy Bitcoin on Binance:
                </div>
                <div className={styles.listItem}>
                  Buy crypto coins from the platform itself using a credit or
                  debit card or bank account.
                </div>
                <div className={styles.listItem}>
                  Trade with another person (Binance P2P)
                </div>
              </div>
            </div>
            <div className={styles.span}>
              <img className={styles.imageIcon} alt="" src="/image24@2x.png" />
            </div>
          </section>
          <section className={styles.section}>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article12@2x.png"
            />
            <div className={styles.heading2HowToBuyBitcoinParent}>
              <h1 className={styles.heading22}>
                How To Buy Bitcoin Using Credit Or Debit Card Method
              </h1>
              <div className={styles.listItemSignInToYourParent}>
                <div className={styles.listItem}>
                  Sign in to your Binance account
                </div>
                <div className={styles.listItem}>
                  Search for "Buy Crypto" and hover your mouse over it on top of
                  your screen. Five different crypto purchasing options will pop
                  up. Click on the "Credit/Debit Card” option.
                </div>
                <div className={styles.listItem}>
                  You will be redirected to a page. You can select the amount of
                  money you want to purchase for your Binance BTC on that page.
                </div>
                <div className={styles.listItem}>
                 <h1>
                 After selecting the amount, click on “Buy.” You'll get a
                  prompt to verify your account (if you've not done so before
                  proceeding to purchase the Binance Bitcoin). Press ”Verify
                  Now.” You’ll be redirected to the verification page.
                 </h1>
                </div>
                <div className={styles.listItem}>
                  You have to verify your identity to make your first trade on
                  the verification page. That includes providing your full legal
                  name, residential address, date of birth, uploading your photo
                  ID, and taking a picture of yourself. These are standard
                  procedures
                </div>
                <div className={styles.listItem}>
                  After verification, you have to confirm your payment details.
                  Once you complete all of them, check the order summary and
                  complete it.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.registerNow}>Register Now</div>
                <img className={styles.svgIcon1} alt="" src="/svg3.svg" />
              </div>
            </div>
          </section>
          <section className={styles.section3}>
            <div className={styles.heading2HowToBuyBitcoinParent}>
              <h1 className={styles.heading2}>
                How to Buy Bitcoin Using the Trading Process
              </h1>
              <div className={styles.listItemSignInToYourParent}>
                <div className={styles.toReceiveBitcoin}>
                  To receive Bitcoin on Binance, you need to send your Bitcoin
                  address to the sender. Follow these steps to find your Bitcoin
                  address.
                </div>
                <div className={styles.listItem}>
                  On your dashboard, search for “Trade” on top of the screen and
                  hover over it.
                </div>
                <div className={styles.listItem}>
                  Different options will pop up which relate to a particular
                  type of trading. If you’re a beginner trader, the
                  “Classic”interface is ideal. If you’re an experienced trader,
                  you can use the “Advanced” version.
                </div>
                <div className={styles.listItem}>
                  You’ll be redirected to a screen interface and start trading
                  from there. As a beginner, focus on the “Market” tab. You can
                  buy BTC at the particular time that it holds at that specific
                  point in time.
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article13@2x.png"
            />
          </section>
          <section className={styles.section4}>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article14@2x.png"
            />
            <div className={styles.heading2HowToSendBitcoiParent}>
              <h1 className={styles.heading22}>
                How to Send Bitcoin From Binance to Other Wallets
              </h1>
              <div className={styles.listItemSignInToYourParent}>
                <div className={styles.listItem}>
                  Sign in to your Binance account
                </div>
                <div className={styles.listItem}>
                  Click on “Wallet” and select “Fiat and Spot.”
                </div>
                <div className={styles.listItem}>
                  At the top of the page, click on “Withdraw."
                </div>
                <div className={styles.listItem}>
                  There are two options on top: "Crypto" and "Fiat." Make sure
                  that "Crypto” is selected. The default coin chosen should be
                  "BTC Bitcoin" under "Crypto."
                </div>
                <div className={styles.listItem}>
                  On the right side of the screen, you’ll see the “Recipient’s
                  BTC Address.” That’s the address you want to send the Bitcoin
                  to. Copy and paste the recipient’s BTC address.
                </div>
                <div className={styles.listItem}>
                  Scroll down and select the “Transfer Network” you want to use.
                  The recommended network to use is the “BTC” network.
                </div>
                <div className={styles.listItem}>
                  After selecting the network, scroll down and choose the amount
                  you want to transfer. Click on “Submit.”
                </div>
                <div className={styles.listItem}>
                  You’ll be redirected to a security verification page. Click on
                  “Send code.” Enter the e-mail verification code and Google
                  verification code from your Google Authenticator app.
                </div>
                <div className={styles.listItem}>Click on “Submit.”</div>
              </div>
              <div className={styles.link1}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
          </section>
          <section className={styles.section5}>
            <div className={styles.heading2HowToReceiveBitParent}>
              <h1 className={styles.heading2}>
                How to Receive Bitcoin on Binance
              </h1>
              <div className={styles.toReceiveBitcoinOnBinanceGroup}>
                <div className={styles.toReceiveBitcoin}>
                  To receive Bitcoin on Binance, you need to send your Bitcoin
                  address to the sender. Follow these steps to find your Bitcoin
                  address:
                </div>
                <div className={styles.listItem}>
                  Log into your Binance account.
                </div>
                <div className={styles.listItem}>
                  Search for “Wallet’ on top of the screen and click on it
                </div>
                <div
                  className={styles.listItem}
                >{`In the drop-down menu, click “Spot (Deposit & Withdraw).”`}</div>
                <div className={styles.listItem}>
                  Click on “Deposit” on the top of the screen.
                </div>
                <div className={styles.listItem}>
                  On the Deposit page, the default coin should be Bitcoin. On
                  the right side, you’ll find the BTC address. Copy the BTC
                  address.
                </div>
              </div>
              <div className={styles.link5}>
                <div className={styles.support}>Support</div>
                <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
              </div>
            </div>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article15@2x.png"
            />
          </section>
          <section className={styles.section6}>
            <img
              className={styles.articleIcon}
              alt=""
              src="/article16@2x.png"
            />
            <div className={styles.heading2HowToSendBitcoiParent}>
              <h1 className={styles.heading22}>
                How to Convert Bitcoin on Binance
              </h1>
              <div className={styles.listThereAreTwoPrimaryWParent}>
                <div className={styles.listItem}>
                  Log in to your Binance account.
                </div>
                <div className={styles.listItem}>
                  Search for “Trade” on top of the screen and hover over it.
                </div>
                <div className={styles.listItem}>
                  In the drop-down options, select “Convert.”
                </div>
                <div className={styles.listItem}>
                  You’ll be redirected to the “Convert” page. On that page, you
                  can convert any coins available in the options.
                </div>
              </div>
              <div className={styles.link6} onClick={onLinkContainer5Click}>
                <div className={styles.registerNow}>Register Now</div>
                <img className={styles.svgIcon1} alt="" src="/svg3.svg" />
              </div>
            </div>
          </section>
          <section className={styles.registerNow2}>
            <h1 className={styles.heading27}>
              Register now to start playing the best slot games.
            </h1>
            <div className={styles.link7} onClick={onLinkContainer6Click}>
              <div className={styles.registerNow3}>Register Now</div>
              <img className={styles.svgIcon7} alt="" src="/svg4.svg" />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Binance;
