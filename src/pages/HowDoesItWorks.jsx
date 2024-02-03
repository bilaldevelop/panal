import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./HowDoesItWorks.module.css";

const HowDoesItWorks = () => {

  return (
    <div className={styles.howDoesItWorks}>
      <div className={styles.divbody}>
         <Navbar />
        <div className={styles.body}>
          <div className={styles.sectionHeading}>HOW DOES IT WORK ?</div>
          <div className={styles.register}>
            <div className={styles.frameParent}>
              <div className={styles.heading2Parent}>
                <div className={styles.heading2}>
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.heading21}>Registration</div>
              </div>
              <div className={styles.registrationInFishnetwinContainer}>
                <p className={styles.registrationInFishnetwin}>
                  Registration in FishNetWin is essential, otherwise, you will
                  not be able to enter the preferred game platform, nor use
                  services such as depositing and withdrawal. In order to start,
                  you need to go to the Get Started page which is basically a
                  registration page and fill in the details required in the
                  form.
                </p>
                <p className={styles.registrationInFishnetwin}>
                  The registration process will take a while to proceed and
                  during that time your account status is going to be “pending”
                  As soon as the request gets approved, you will get an email
                  along with your login details for the casino platforms of your
                  choosing. If you are looking to register for additional casino
                  platforms after you got approval from FishNetWin, you need to
                  submit an additional request via the “register for additional
                  platforms tab. Watch the video for a detailed explanation!
                </p>
              </div>
            </div>
            
              <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
            
          </div>
          <div className={styles.deposit3}>
          <div>
            <img className={styles.logo2Icon} alt="" src="/logo-11@2x.png" />
           </div>
            <div className={styles.frameParent}>
              <div className={styles.frame2}>
                <div className={styles.heading22}>
                  <div className={styles.div}>2</div>
                </div>
                <div className={styles.heading23}>Deposit</div>
              </div>
              <div className={styles.registrationInFishnetwinContainer}>
                <p className={styles.registrationInFishnetwin}>
                  As you finalize the registration process, the next step is
                  depositing cash! By clicking on the deposit tab, you can pick
                  the casino platform where you want to send funds. After that,
                  you need to go to the checkouts to specify the details about
                  the following transfer. Just click on your name and go to the
                  Deposit. Here you will add your preferred deposit amount and
                  add it to the cart. After Proceeding to Checkout, you will
                  choose your preferred platform, review your order and click to
                  Pay with Bitcoin.
                </p>
                <p className={styles.registrationInFishnetwin}>&nbsp;</p>
                <p className={styles.registrationInFishnetwin}>
                  In the payment section, you can easily scan the QR code using
                  your Bitcoin wallet, or manually send the shown Bitcoin amount
                  to the given address. Then you just need to wait shortly while
                  our team is reviewing and adding the deposit to your game
                  account. And you are done! Now you can start playing your
                  favorite slots for real money! See video for more detailed
                  explanation!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.register}>
          <div className={styles.frameParent}>
            <div className={styles.heading2Parent}>
              <div className={styles.heading2}>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.heading21}>Withdrawal</div>
            </div>
            <div className={styles.registrationInFishnetwinContainer}>
              <p className={styles.registrationInFishnetwin}>
              Now, the withdrawal process is even easier! All you have to do
              is to go to Withdrawal, enter the details such as your wallet ID
              and preferred withdrawal amount, enter the verification code you
              receive on your number, and click Submit. Our team will review
              your request and send you the funds after it’s cleared. The
              whole process is shown in detail in the video.
              </p>
            </div>
          </div>
          
          <img className={styles.logo1Icon} alt="" src="/video@2x.png" />
          
        </div>
        {/*
          <div className={styles.withdrawal}>
            <div className={styles.frameParent}>
              <div className={styles.heading2Group}>
                <div className={styles.heading24}>
                  <div className={styles.div2}>3</div>
                </div>
                <div className={styles.heading25}>Withdrawal</div>
              </div>
              <div className={styles.nowTheWithdrawal}>
                Now, the withdrawal process is even easier! All you have to do
                is to go to Withdrawal, enter the details such as your wallet ID
                and preferred withdrawal amount, enter the verification code you
                receive on your number, and click Submit. Our team will review
                your request and send you the funds after it’s cleared. The
                whole process is shown in detail in the video.
              </div>
            </div>
            <img className={styles.videoIcon} alt="" src="/video@2x.png" />
          </div>
         */}
          <div className={styles.bonuses}>
            <div className={styles.heading26}>Bonuses</div>
            <div className={styles.pleaseBeReminded}>
              Please be reminded that if your deposit matches several bonuses at
              a time, only one of them with the highest amount will be added to
              your account. This is how it works: For instance, let's say you
              just made the first deposit which would give you a 50% bonus, and
              at the same time, you deposited $50 or more on the Riversweeps
              platform, which would give you a 20% bonus. In this case, among
              these two options, you are eligible to get ONLY a 50% bonus for
              the first deposit you made
            </div>
          </div>
        </div>
        
        <Footer />
       
      </div>
    </div>
  );
};

export default HowDoesItWorks;
