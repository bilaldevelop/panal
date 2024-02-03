import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FAQ.module.css";

const FAQ = () => {
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

  const onLinkContainerClick = useCallback(() => {
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
    <div className={styles.faq}>
      <div className={styles.divbody}>
        <div className={styles.topMenu}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/logo4@2x.png"
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
              src="/svgviewerpngoutput-2-15@2x.png"
            />
            <div className={styles.frame}>
              <img
                className={styles.svgviewerPngOutput1Icon}
                alt=""
                src="/svgviewerpngoutput-16@2x.png"
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
        <div className={styles.heading1}>
          <div className={styles.faq1}>FAQ</div>
        </div>
        <div className={styles.section}>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>What is FishNetWin?</b>
              </div>
              <div className={styles.svg}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                FishNetWin is an online sweepstakes platform that provides the
                latest online slot games and slots at the comfort of your home.
                We give you zero financial risks and 100% privacy due to the
                crypto solutions we offer. There are more than 500 unique games
                for you to enjoy with your friends and colleagues. You’re
                guaranteed to have the best time ever!
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  Which platforms are on FishNetWin?
                </b>
              </div>
              <div className={styles.svg1}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region1}>
              <div className={styles.ultrapower}>
                There are 20 platforms that you can enjoy on FishNetWin. The
                list includes:
              </div>
              <div className={styles.list}>
                <div className={styles.ultrapower}>Ultrapower</div>
                <div className={styles.ultrapower}>Rivermonster</div>
                <div className={styles.ultrapower}>Skillmine</div>
                <div className={styles.ultrapower}>Paradise Casino</div>
                <div className={styles.ultrapower}>Vegas7</div>
                <div className={styles.ultrapower}>VegasX</div>
                <div className={styles.ultrapower}>Riversweeps</div>
                <div className={styles.ultrapower}>Ice8</div>
                <div className={styles.ultrapower}>Juwa</div>
                <div className={styles.ultrapower}>Gold Hunter</div>
                <div className={styles.ultrapower}>Ice4</div>
                <div className={styles.ultrapower}>Golden Treasure</div>
                <div className={styles.ultrapower}>Vegas Sweeps</div>
                <div className={styles.ultrapower}>Milky Way</div>
                <div className={styles.ultrapower}>FunZone</div>
                <div className={styles.ultrapower}>Fire Kirin</div>
                <div className={styles.ultrapower}>Orion Stars</div>
                <div className={styles.ultrapower}>Admiral</div>
                <div className={styles.ultrapower}>Lucky Dragon</div>
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do you register on FishNetWin?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                <p className={styles.toRegisterOn}>
                  To register on FishNetWin, Click on “Get Started" on the
                  FishNetWin official website. You'll be redirected to the
                  registration pages, where you have to fill in all the
                  necessary details. After the registration, your account will
                  be pending while we approve your request. You'll receive an
                  email along with your login details for
                </p>
                <p className={styles.toRegisterOn}>
                  the sweepstakes platforms you chose when you get approved. For
                  a full explainer video, click here.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I deposit on FishNetWin?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                To deposit on FishNetWin, click "Deposit" and choose your
                preferred casino platform. Next, enter the amount you want to
                send and choose the platform to which you want to send the
                money. Then, proceed to the checkout page, check your order, and
                pay with Dogecoin or Bitcoin. You can do that by scanning the QR
                code or manually sending the amount. Once the payment is
                completed, we’ll review and add the deposit to your account.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I withdraw from FishNetWin?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                Click on "Withdrawal," fill in the required information (wallet
                ID, withdrawal amount), and hit "Submit." After processing your
                request, we'll transfer the money to you immediately. Your
                withdrawal request will be reviewed and the requested amount
                will be sent to your crypto address within 24 hours
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.howCanI}>
                  How can I register for additional platforms?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                To register for additional sweepstakes platforms after you've
                got approval, you need to submit a different request. You can do
                so by signing in to your account and clicking on your name. In
                the drop-down menu, select "Register for additional platforms."
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.howCanI}>
                  How do I buy, send, or receive Bitcoin using Cashapp?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region6}>
              <div className={styles.fishnetwinIsAn}>
                You have to download Cashapp. In the app, tap on the rising
                curve icon. Two available options, Bitcoin and Buy Stocks will
                be shown. Select Bitcoin, tap the buy button, and specify the
                amount you want to purchase. Click next. A confirmation screen
                will appear where you’ll see full details of the transaction.
                Complete the transaction by clicking on the confirm button. To
                receive Bitcoin, go to the Banking tab on the main screen,
                select Bitcoin and tap the deposit BTC. You can scan, copy or
                share your Cashapp Bitcoin address with FishNetWin or an
                external wallet. If you want to send Bitcoin, select the Banking
                tab and select BTC. You can scan the QR code to send the BTC.
                For the full explainer video, click here.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Bitcoin using Coinbase?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                You can easily make all the mentioned transactions through
                Coinbase. See our detailed guide.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Bitcoin using Kraken?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                You can easily make all the mentioned transactions through
                Kraken. See our detailed guide.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Bitcoin using Binance?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                You can easily make all the mentioned transactions through
                Binance. See our detailed guide.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Dogecoin using Coinbase?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                You can buy Dogecoin by entering the site's "Trade" tab and
                entering the desired amount. First, select the "Buy" field in
                the tab. Then, select a payment method and proceed with the
                purchase afterward. To send Dogecoin, click on “Portfolio” and
                "Send." Options to send will display. Enter the amount you want
                to send and select “Dogecoin” in the "Pay With" field. To
                receive, click "Receive” and select Dogecoin under “Currency.”
                Copy the address that appears and send it to the sender.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive DOGE coins using Kraken?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                After logging into your Kraken account, navigate to the "Buy
                Crypto" tab and click the "Buy" button to purchase Dogecoin.
                Select Dogecoin from the currency dropdown and enter the desired
                purchase amount. Select a payment method and proceed with the
                order afterward. To send Dogecoin, click "Funding," enter the
                desired amount, and then review and approve the transaction. To
                receive Dogecoin, click on "Funding," then "Search," and
                finally, "Deposit." If this is your first time, click "Generate
                New Address" and send that to the sender.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Dogecoin using Binance?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div
                className={styles.fishnetwinIsAn}
              >{`You can buy Dogecoin on Binance by selecting "Buy Crypto" and "Credit/Debit Card." Then, select Dogecoin under the "Coin" section and enter the desired purchase amount. Finally, verify your payment information and complete the transaction. Click "Wallet" and then "Fiat and Spot." Next, click "Crypto" and then "Dogecoin" to proceed. Next, copy the recipient's wallet address and paste it into the corresponding field on the right. Finally, select your desired "Transfer Network" and hit the submit button when you're done. Select "Wallet," then "Spot (Deposit & Withdraw)," and then "Deposit" to start the process of receiving Dogecoin. Then, locate the Dogecoin address on the right side of the deposit page by searching for it. Then, copy the address and send it to the sender.`}</div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Ether coins using Coinbase?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                You can buy Ethereum by selecting "Trade," then "Buy Field," and
                finally "Buy." Then, choose a payment method and enter the
                amount you want to purchase. Finally, select "Buy" to complete
                the transaction. You can send Ethereum by selecting "Portfolio"
                and "Send." Then, specify the money you want to send and your
                wallet's address. Then, under the "Pay With" dropdown, choose
                Ethereum and hit "Continue." Select "Receive," then "Currency,"
                and then "Ethereum" to receive Ethereum. An address will be
                generated. Send that address to the sender.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Ether coins using Kraken?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                Select "Buy Crypto" and enter the desired amount to purchase
                Ethereum. The final step is to verify your order and complete
                the purchase. To send Ethereum, click "Funding," then "Search,"
                and finally, "Transfer." Enter the amount you want to send.
                Then, select "Confirm Transfer" to complete the transaction. To
                receive Ethereum, go to "Funding," type in Ethereum in the
                search bar, and then click "Deposit." If this is your first
                time, click "Generate New Address" and send it to the sender.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I buy, send, or receive Ethereum using Binance?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                To buy Ethereum on Binance, select "Buy Crypto" followed by
                "Credit/Debit Card." Put in your desired purchase amount and hit
                "Buy." Verify your payment information and finish the purchase.
                To send Ethereum, select "Wallet," followed by "Fiat and Spot."
                After that, look for Ethereum in the "Crypto" section below
                "Coin." When you're done, copy the receiver's address and paste
                it into the box on the right. Next, pick your desired transfer
                network and hit the submit button. To receive Ethereum, select
                "Wallet," "Fiat and Spot," and "Deposit." Next, select Ethereum
                from the "Coin" dropdown menu, and your address will appear.
                Send that address to the sender.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>Referring a friend</b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                After signing in, click on your name, then click on the Referral
                link button from dropdown. You will see your referral link on
                this page. You can copy and send this link to invite your
                friends to FishNetWin. When someone comes with your link, you
                and the invited friend will get a bonus deposit on one of the
                platforms.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>How to play</b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                In order to play games, first you need to register on the
                website. After registering, when we approve your account, we
                will send you the accounts and the platforms to play the games
                on. Then you can easily log in with your accounts on these
                platforms to play.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  What is this requirement about?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                In some account safety circumstances, we might request you to
                upload a selfie, with a paper that includes the date you took
                the selfie and the website’s name hand-written on it.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  For what reason am I required to upload this selfie?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                Taking this selfie with a paper is one of the numerous security
                procedures we take to ensure we are talking with the real
                account holder rather than an imitator. We recognize that this
                is not convenient, but we do this to make certain that we
                deliver the best protection for your account.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How do I properly take this photograph?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region1}>
              <div className={styles.ultrapower}>
                In the picture, we must see you, the FishNetWin account holder,
                taking a selfie with a paper that has the date you take the
                photograph. It is critical that the date and the website's name
                are handwritten so we can prevent computer-edited requests.
                Please refer to the image below as an example:
              </div>
              <img
                className={styles.faqbgwebpIcon}
                alt=""
                src="/faqbgwebp@2x.png"
              />
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How can I deliver this document?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                We will ask you to send the photo via email. We recommend you
                check the email that you have obtained from us for clear
                instructions on providing the photo.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  What happens if a player commits fraud?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                If a player commits fraud, they will be blocked from the website
                for one week if they’ve made a deposit. The block will extend
                for three months if they’ve not made any deposit. So we
                encourage all players to desist from any fraudulent acts.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  What happens if I don’t use my gaming account for a prolonged
                  time?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                Regardless of the sub-platform that you pick and play at, your
                gaming account will be deactivated by FishNetWin if you don’t
                use it for more than 60 days.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How can I play games on FishNetWin?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.fishnetwinIsAn}>
                You must sign up on FishNetWin platform before you can start
                playing games there. Once your account has been approved
                following registration, we'll send you a confirmation email.
                Next, click the "Platforms" tab in your profile to submit a
                request to play on additional platforms.
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>Withdrawal Policies</b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region25}>
              <div className={styles.whatAreThe}>
                What are the Terms and Conditions of account verification?
              </div>
              <div className={styles.ultrapower}>
                If the user deposited less than $500 to their new FishNetWin
                account, they would be asked to complete the verification
                annually by each month.
              </div>
              <div className={styles.whatAreThe}>What if I deposited more?</div>
              <div className={styles.ultrapower}>
                <p className={styles.toRegisterOn}>
                  Yes, it depends on how much you deposited on the platform. If
                  the size of overall deposits ranges between $500 and $5.000,
                  you will be asked to complete the verification process after
                  every 6 months period.
                </p>
                <p className={styles.toRegisterOn}>
                  On the other hand, if your deposit amount is between $5.000
                  and $50.000, you will be asked to complete the verification
                  process only once a year.
                </p>
              </div>
              <div className={styles.whatAreThe}>
                Can I avoid the verification process?
              </div>
              <div className={styles.ultrapower}>
                The short answer is yes. You can totally avoid the verification
                process and all the steps by depositing at least $50.000 to your
                FishNetWin account after registration.
              </div>
              <div className={styles.whatAreThe}>
                What if I win by using a sign-up bonus without actually
                depositing?
              </div>
              <div className={styles.ultrapower}>
                The short answer is yes. You can totally avoid the verification
                process and all the steps by depositing at least $50.000 to your
                FishNetWin account after registration.
              </div>
              <div className={styles.whatAreThe}>
                How to complete the verification process on FishNetWin If I am
                trying to withdraw the amount without making a deposit?
              </div>
              <div className={styles.ultrapower}>
                <p className={styles.toRegisterOn}>
                  After you have just signed up on the platform, the next step
                  is to complete the verification process. To do so, you need to
                  submit a selfie with your ID card as well as a piece of paper
                  on which you need to write the website’s name and the date of
                  the verification. Keep in mind that the image should be clear.
                </p>
                <p className={styles.toRegisterOn}>
                  Otherwise, it will prolong the process, and you might need to
                  repeat the steps once again.
                </p>
              </div>
              <div className={styles.ultrapower}>
                In that case, all you need to do is to provide a selfie while
                holding your ID Card, and that is pretty much it. After that, we
                will evaluate the documents and approve them instantly if
                everything is right.
              </div>
              <div className={styles.whatAreThe}>
                How to complete the verification process if I deposit, win and
                try to withdraw the amount?
              </div>
            </div>
          </div>
          <div className={styles.divchakraAccordionItem3}>
            <div className={styles.heading2Button}>
              <div className={styles.divfaqsubtit}>
                <b className={styles.whatIsFishnetwin}>
                  How Can I Deposit Instantly on FishNetWin?
                </b>
              </div>
              <div className={styles.svg2}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
              </div>
            </div>
            <div className={styles.region26}>
              <div className={styles.ultrapower}>
                The short answer is yes. The Flash Deposit feature makes it
                possible to deposit funds instantly on FishNetWin through a
                variety of support channels, such as
              </div>
              <div className={styles.item}>
                <div className={styles.ourTelegram}>Our Telegram : ✉</div>
                <div className={styles.link1}>+1 209 444 7244</div>
                <div
                  className={styles.ourTelegram}
                >{`(https://t.me/                   `}</div>
              </div>
              <div className={styles.ultrapower}>Live chat</div>
              <div className={styles.ultrapower}>And FB messenger</div>
              <div className={styles.ultrapower}>
                To make the instant deposit, simply enter your contact
                information, including
              </div>
              <div className={styles.ultrapower}>Your registered email</div>
              <div className={styles.ultrapower}>
                The platform where you want to deposit
              </div>
              <div className={styles.ultrapower}>The deposit amount</div>
              <div className={styles.ultrapower}>And the coupon code</div>
              <div className={styles.ultrapower}>
                Once you have provided this information, the FishNetWin support
                agent will send you an invoice link to finalize the transaction.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divpageTitle}>
          <div className={styles.heading5}>
            <div className={styles.depositNowToContainer}>
              <p className={styles.toRegisterOn}>
                Deposit Now to start playing
              </p>
              <p className={styles.toRegisterOn}>the best slot games.</p>
            </div>
          </div>
          <div className={styles.link2} onClick={onLinkContainerClick}>
            <div className={styles.depositNow1}>Deposit Now</div>
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
                <p className={styles.toRegisterOn}>Lucky</p>
                <p className={styles.toRegisterOn}>Dragon</p>
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
                  src="/fishnetlogo-25@2x.png"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/vector14@2x.png"
                />
                <img
                  className={styles.bitcoinBtcLogo1Icon}
                  alt=""
                  src="/bitcoinbtclogo-15@2x.png"
                />
                <img className={styles.dogeIcon} alt="" src="/doge5@2x.png" />
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
                    className={styles.vectorIcon28}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon29}
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon30}
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon31}
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
              src="/section--link--image100@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image101@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image102@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image103@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image104@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image105@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image106@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image107@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image108@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image109@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image110@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image111@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image112@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image113@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image114@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image115@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image116@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image117@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image118@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image119@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image120@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image121@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image122@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image123@2x.png"
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
      </div>
    </div>
  );
};

export default FAQ;
