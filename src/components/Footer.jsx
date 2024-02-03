import  { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  const navigate = useNavigate();
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
    <footer className="">
      <div className={`${styles.footer} container`}>
        <div className={styles.frameDiv}>
          <div className={styles.pages}>
            <div className={styles.heading2}>Pages</div>
            <a className={styles.linkGames} onClick={onLinkGamesClick}>
              Games
            </a>
            <div className={styles.linkGames}> Blog</div>
            <div className={styles.linkGames}>About</div>
            <div className={styles.linkGames}>Support</div>

            <div className={styles.linkGames} onClick={onLinkFlashClick}>
              Flash Deposit
            </div>
            <div className={styles.linkGames} onClick={onLinkFaqClick}>
              Faq
            </div>
          </div>
          <div className={styles.promotions3}>
            <div className={styles.linkGames}>Promotions</div>
            <div className={styles.linkGames}>Platforms</div>
            <div className={styles.linkGames}>Privacy Policy</div>
            <div className={styles.linkGames}>Terms and Conditions</div>
            <div className={styles.linkGames}>Referral Program</div>
          </div>

          <div className={`${styles.footerRight} col-6`}>
            <div className={styles.footerLogo}>
              <img
                className={styles.fishnetLogo2Icon}
                alt=""
                src="/fishnetlogo-223@2x.png"
              />
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector48@2x.png"
              />
              <img
                className={styles.vectorIcon}
                alt=""
                src="/bitcoinbtclogo-123@2x.png"
              />
              <img className={styles.dogeIcon} alt="" src="/doge21@2x.png" />
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
          </div>
          {/* <div className={styles.frameChild2} /> */}
        </div>
        <div className={styles.footerLogos}>
          <img
            className={styles.sectionLinkImage}
            alt=""
            src="/section--link--image512@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image513@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image514@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image515@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image516@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image517@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image518@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image519@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image520@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image521@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image522@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image523@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image524@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image525@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image526@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image527@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image528@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image529@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image530@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image531@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image532@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image533@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image534@2x.png"
          />
          <img
            className={styles.sectionLinkImage1}
            alt=""
            src="/section--link--image535@2x.png"
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
    </footer>
  );
};
