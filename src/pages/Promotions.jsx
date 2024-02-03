import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./Promotions.module.css";

const Promotions = () => {
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

  const onButtonContainer1Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer5Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer6Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer7Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer8Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer9Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer10Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer11Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer12Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer13Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButtonContainer14Click = useCallback(() => {
    navigate("/signup");
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
    <div className={styles.promotions}>
      <div className={styles.divbody}>
        <Navbar />
        <div className={styles.heading1PromotionsWrapper}>
          <div className={styles.heading1}>PROMOTIONS</div>
        </div>
        <div className={styles.divchakraContainer}>
          <div className={styles.divpointerParent}>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbwpromosignupredesign3-xmbqc5rwebp@2x.png"
              />
              <div className={styles.heading4}>
                <div className={styles.registerOnFishnetwin}>
                  Register on fishnetwin and Earn $5 For Free
                </div>
              </div>
              <div className={styles.spanchakraText}>
                <div className={styles.notOnlyWill}>
                  fishnetwin offers you exceptional free cash rewards as soon as
                  you start your gaming journey on the platform.
                </div>
                <div className={styles.notOnlyWill}>
                  The first bonus that you will encounter on fishnetwin is
                  called Sign up Bonus. 
                </div>
                <div className={styles.heading32}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer1Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbwfirstdepositredesign-wckkvsfwebp@2x.png"
              />
              <div className={styles.heading4}>
                <div className={styles.registerOnFishnetwin}>
                  Multiply Your Wins: Up to $1000 First Deposit Match!
                </div>
              </div>
              <div className={styles.spanchakraText1}>
                <div className={styles.whenYouEmbark}>
                  When you embark on your gaming journey at fishnetwin, you need
                  to make a deposit to access the best
                </div>
                <div className={styles.whenYouEmbark}>
                  games. fishnetwin encourages you to place a wager, and in
                  return, enjoy exceptional rewards along the
                </div>
                <div className={styles.whenYouEmbark}>way.</div>
                <div className={styles.div}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer2Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbw2ndand3rddepositredesignwebp@2x.png"
              />
              <div className={styles.heading4}>
                <div
                  className={styles.registerOnFishnetwin}
                >{`Take Out 20% Extra Cash By Making Your 2nd & 3rd Deposits on fishnetwin`}</div>
              </div>
              <div className={styles.spanchakraText}>
                <div className={styles.notOnlyWill}>
                  Not only will you enjoy a 50% deposit-match bonus on your
                  first, but also you will get a shot at an extra 20%
                </div>
                <div className={styles.notOnlyWill}>
                  deposit-match bonus on your 2nd and 3rd deposits!
                </div>
                <div className={styles.div1}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer3Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/c326786754df4b619a558f8d1f0a64d4-e77ljc2webp@2x.png"
              />
              <div className={styles.heading4}>
                <div className={styles.registerOnFishnetwin}>
                  Join fishnetwin’s Easter Promotion and Get Egg-citing Free
                  Plays!
                </div>
              </div>
              <div className={styles.spanchakraText1}>
                <div className={styles.whenYouEmbark}>
                  Hop into springtime fun with fishnetwin’s Easter promotion and
                  stand a chance of winning more cash
                </div>
                <div className={styles.whenYouEmbark}>
                  rewards! From April 8th to 15th, we’re allowing you to crack
                  open a basket of free plays!
                </div>
                <div className={styles.whenYouEmbark}>
                  With every deposit you make, you can earn eggs which you can
                  redeem for free plays on your favourit
                </div>
                <div className={styles.whenYouEmbark}>…</div>
                <div className={styles.whenYouEmbark}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer4Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/valentines-daywebp@2x.png"
              />
              <div className={styles.heading4}>
                <div className={styles.registerOnFishnetwin}>
                  Valentine’s Day
                </div>
              </div>
              <div className={styles.spanchakraText1}>
                <div className={styles.whenYouEmbark}>Roses are Red</div>
                <div className={styles.whenYouEmbark}>Violets are Blue</div>
                <div className={styles.div}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer5Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbwhallowenpop3webp@2x.png"
              />
              <div className={styles.heading4}>
                <div className={styles.registerOnFishnetwin}>
                  It’s The Spookiest Time Of The Year!
                </div>
              </div>
              <div className={styles.spanchakraText1}>
                <div className={styles.whenYouEmbark}>
                  But There’s No Reason To Fear
                </div>
                <div className={styles.whenYouEmbark}>
                  fishnetwin Is Giving You Lots Of Delicious Candy Promotions
                  For Your Sweet Tooth This Halloween
                </div>
                <div className={styles.div}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer6Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer6}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/paradise-daywebp@2x.png"
              />
              <div className={styles.heading4}>
                <div className={styles.registerOnFishnetwin}>
                  Get 25% BONUS on Paradise Once a Day!
                </div>
              </div>
              <div className={styles.p}>
                <div className={styles.div}>
                  Deposit credits to Paradise to get a 25% bounceback bonus.
                </div>
                <i
                  className={styles.whenYouEmbark}
                >{`For example, depositing $100 will earn you an additional `}</i>
                <i className={styles.whenYouEmbark}>
                  $25. The offer stands once a day, every day of the week.
                </i>
              </div>
              <div className={styles.button1} onClick={onButtonContainer7Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
          </div>
          <div className={styles.divpointerParent}>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbwquestachievementwebp@2x.png"
              />
              <div className={styles.heading47}>
                <div className={styles.registerOnFishnetwin}>
                  Challenge your Competitors on this Quest Achievement!
                </div>
              </div>
              <div className={styles.spanchakraText6}>
                <div className={styles.notOnlyWill}>
                  Experience the immersive gaming experience and incredible cash
                  prizes with fishnetwin as we unveil our newest
                </div>
                <div className={styles.notOnlyWill}>
                  gaming challenge, Quest Achievement! This challenge will take
                  you on a whole new adventure as you boost your
                </div>
                <div className={styles.notOnlyWill}>winning chances. </div>
                <div className={styles.heading32}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer8Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer8}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbwwebp@2x.png"
              />
              <div className={styles.heading47}>
                <div className={styles.registerOnFishnetwin}>
                  Get Your 50% Bounceback During Happy Hours
                </div>
              </div>
              <div className={styles.spanchakraText6}>
                <div className={styles.notOnlyWill}>
                  If you want to maximize your winning chances while playing the
                  best casino games, you need to enter fishnetwin. 
                </div>
                <div className={styles.notOnlyWill}>
                  Check us out on Happy Hours and enjoy a 50% bounceback bonus
                  right away.
                </div>
                <div className={styles.heading32}>…</div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer9Click}>
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbwreferralpromotionwebp@2x.png"
              />
              <div className={styles.heading47}>
                <div className={styles.registerOnFishnetwin}>
                  Refer a Friend and Earn $10 for FREE
                </div>
              </div>
              <div className={styles.spanchakraText6}>
                <div className={styles.notOnlyWill}>
                  In addition to sign up as well as deposit-match bonuses,
                  fishnetwin also offers you a unique offer which is called
                </div>
                <div className={styles.notOnlyWill}>
                  Referral Program. Through the Referral Bonus, you will be able
                  to take advantage of the $10 free cash. So, how to
                </div>
                <div className={styles.notOnlyWill}>claim it? </div>
                <div className={styles.heading32}>…</div>
              </div>
              <div
                className={styles.button1}
                onClick={onButtonContainer10Click}
              >
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/saint-patricks-daywebp@2x.png"
              />
              <div className={styles.heading47}>
                <div className={styles.registerOnFishnetwin}>
                  Don’t Miss Out on Your Chance to Win Big this St. Patrick’s
                  Day!
                </div>
              </div>
              <div className={styles.spanchakraText9}>
                <div className={styles.whenYouEmbark}>
                  Join us in our celebration as we bring you the luck of the
                  Irish with our exclusive St. Patrick’s Day
                </div>
                <div className={styles.whenYouEmbark}>
                  promotion! Collect as many St. Patrick’s symbols as possible
                  and win free plays on all platforms!
                </div>
                <div className={styles.whenYouEmbark}>
                  The more symbols you get, the more free plays you’ll receive,
                  and the more you WIN!
                </div>
                <div className={styles.whenYouEmbark}>…</div>
              </div>
              <div
                className={styles.button1}
                onClick={onButtonContainer11Click}
              >
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/bbwthanksgivingpopwebp@2x.png"
              />
              <div className={styles.heading47}>
                <div className={styles.registerOnFishnetwin}>
                  Countdown Begins for Our Profitable Thanksgiving Leaderboard
                  Campaign
                </div>
              </div>
              <div className={styles.spanchakraText9}>
                <div className={styles.whenYouEmbark}>
                  Check out fishnetwin during Thanksgiving Holiday and get a
                  shot at amazing cash rewards!
                </div>
                <div className={styles.whenYouEmbark}>
                  Through this campaign, all the lucky fishnetwin users will be
                  rewarded with free cash prizes whenever
                </div>
                <div className={styles.whenYouEmbark}>they make a deposit.</div>
                <div className={styles.whenYouEmbark}>…</div>
              </div>
              <div
                className={styles.button1}
                onClick={onButtonContainer12Click}
              >
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer12}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/get-four-platformswebp@2x.png"
              />
              <div className={styles.heading47}>
                <div className={styles.registerOnFishnetwin}>
                  Get 20% Cashback BONUS on Four Platforms!
                </div>
              </div>
              <div className={styles.p1}>
                <div className={styles.whenYouEmbark}>
                  <p
                    className={styles.a20Cashback}
                  >{`A 20% cashback bonus is a great opportunity to get a second chance at winning huge prizes! How it `}</p>
                  <p className={styles.a20Cashback}>
                    works? When your balance goes below 1 dollar, 20% of your
                    total loss gets back to your account!
                  </p>
                </div>
              </div>
              <div
                className={styles.button1}
                onClick={onButtonContainer13Click}
              >
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
            <div className={styles.divpointer13}>
              <img
                className={styles.bbwPromoSignUpRedesign3XmIcon}
                alt=""
                src="/riversweepswebp@2x.png"
              />
              <div className={styles.heading47}>
                <div className={styles.registerOnFishnetwin}>
                  Bonus on $50 and more deposits
                </div>
              </div>
              <div className={styles.p2}>
                <div className={styles.whenYouEmbark}>
                  <p
                    className={styles.a20Cashback}
                  >{`Exclusive to the Riversweeps platform, whenever you deposit $50 or more to your Riversweeps account, `}</p>
                  <p
                    className={styles.a20Cashback}
                  >{`we’ll add another 25%! Deposit $100 worth of Bitcoin, and $125 will be deposited to your Riversweeps `}</p>
                  <p className={styles.a20Cashback}>account.</p>
                </div>
              </div>
              <div
                className={styles.button1}
                onClick={onButtonContainer14Click}
              >
                <div className={styles.registerNow}>Register Now</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Promotions;
