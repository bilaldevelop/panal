/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const onLogoImageClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  console.log({ isOpenSidebar });
  const onWhatsappContainerClick = useCallback(() => {
    window.location.href = "tel:+1 209 444 7244";
  }, []);
  useEffect(()=>{
    setIsOpenSidebar(false)
  },[navigate])
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

  return (
    <div>
      <div className={styles.topMenu}>
        <img
          className={styles.logoIcon}
          alt=""
          src="/logo7@2x.png"
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
          <div style={{display:"flex"}}>
            {isOpenSidebar === true ? (
              <button
                onClick={() => setIsOpenSidebar(false)}
                className={styles.drawerButton}
              >
                {/*<img alt="" src="/svgviewerpngoutput-2-112@2x.png" /> */}
                <CloseIcon />
              </button>
            ) : (
              <button
                onClick={() => setIsOpenSidebar(true)}
                className={styles.drawerButton}
              >
               <MenuIcon />
                {/*<img alt="" src="/svgviewerpngoutput-116@2x.png" /> */}
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
      {isOpenSidebar && (
        <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
          <div className={styles.signInGroup}>
            <button className={`${styles.signIn} ${styles.signInMenu}`} onClick={onSignIn1Click}>
              <div className={styles.signIn1}>Sign In</div>
            </button>
            <button className={`${styles.signUp} ${styles.signInMenu}`} onClick={onSignUp1Click}>
              <div className={styles.signUp1}>Sign Up</div>
            </button>
          </div>
          <button className={styles.games1} onClick={onGamesClick}>
            <div className={styles.promotions}>Games</div>
          </button>
          <button className={styles.games3} onClick={onGames1Click}>
            <div className={styles.promotions}>Promotions</div>
          </button>
          <button className={styles.games4} onClick={onGames2Click}>
            <div className={styles.promotions}>How Does it Works?</div>
          </button>
          <button className={styles.games5} onClick={onGames3Click}>
            <div className={styles.promotions}>Don’t Have BTC?</div>
          </button>
          <button className={styles.games6} onClick={onGames4Click}>
            <div className={styles.promotions}>Deposit</div>
          </button>
          <button className={styles.games7} onClick={onGames5Click}>
            <div className={styles.promotions}>Flash Deposit</div>
          </button>
          <button className={styles.games8} onClick={onGames6Click}>
            <div className={styles.promotions}>Events</div>
          </button>
        </div>
        )}
      </div>
      <nav className={styles.mainMenu}>
        <button className={styles.games9} onClick={onGames7Click}>
          <div className={styles.games10}>Games</div>
        </button>
        <button className={styles.promotions1} onClick={onPromotionsClick}>
          <div className={styles.promotions2}>Promotions</div>
        </button>
        <button className={styles.howDoesItWork} onClick={onHowDoesItWorkClick}>
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
            <button className={styles.games11} onClick={onGames8Click}>
              <div className={styles.promotions}>Deposit</div>
            </button>
            <button className={styles.games12} onClick={onGames9Click}>
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
    </div>
  );
};
