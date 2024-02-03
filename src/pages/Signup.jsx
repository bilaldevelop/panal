import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Signup = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [dob, setDob] = useState(""); // Date of Birth
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const handleSignup = async (event) => {
    event.preventDefault();
    // First, check if we are on the first step (collecting email and password)
    if (currentStep === 1) {
      try {
        // Create the user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // Extract the user from the returned userCredential
        const { user } = userCredential;
        // User is successfully created, now we move to the next step
        setCurrentStep(2); // Set the current step to 2 to collect additional details
      } catch (error) {
        setError(error.message);
        // Don't proceed to the next step, because there was an error
      }
    }

    // Next, if we are on the second step, save the additional details
    else if (currentStep === 2) {
      try {
        const user = auth.currentUser; // Ensure that we have the current user
        if (user) {
          // Save the additional details to Firestore
          await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            email, // Email is already saved in auth, but also save it in Firestore
            phone,
            username,
            referralCode,
            promoCode,
            dob, // Date of Birth
          });
          // After saving details, redirect to the dashboard
          navigate("/dashboard");
        } else {
          setError("No user is currently signed in.");
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const onVectorIconClick = useCallback(() => {
    window.open("https://www.facebook.com/fishnetwins");
  }, []);

  return (
    <div className={styles.signup}>
      <main className={styles.divbody}>
        <Navbar />
        <div className={styles.body}>
          <div className={styles.frame1}>
            <div className={styles.heading1RegisterParent}>
              <h1 className={styles.heading1}>REGISTER</h1>
              <div className={styles.noDepositRequired}>
                No deposit required. Register now and get 5$ from us.
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.heading2}>Share with your friends</div>
              <div className={styles.frame2}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector33.svg"
                  onClick={onVectorIconClick}
                />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector34.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector35.svg"
                />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector36.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector37.svg"
                />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <form className={styles.divregisterBox} onSubmit={handleSignup}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                      {currentStep === 1 && (
                        <>
                          {/* Email */}
                          <div className={styles.groupLabelFirstNameParent}>
                            <div className={styles.groupLabel}>Email</div>
                            <input
                              className={styles.groupInput}
                              type="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          {/* Password */}
                          <div className={styles.groupLabelFirstNameParent}>
                            <div className={styles.groupLabel}>Password</div>
                            <input
                              className={styles.groupInput}
                              type="password"
                              placeholder="Create a password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                        </>
                      )}

                      {currentStep === 2 && (
                        <>
                          {/* Additional fields for Step 2 */}
                          {/* First Name */}
                          <div className={styles.groupLabelFirstNameParent}>
                            <div className={styles.groupLabel}>First Name</div>
                            <input
                              className={styles.groupInput}
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          {/* Last Name */}
                          <div className={styles.groupLabelFirstNameParent}>
                            <div className={styles.groupLabel}>Last Name</div>
                            <input
                              className={styles.groupInput}
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                          {/* Phone */}
                          <div className={styles.groupLabelFirstNameParent}>
                            <div className={styles.groupLabel}>Phone</div>
                            <input
                              className={styles.groupInput}
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>

                          {/* Other fields like username, referralCode, promoCode, dob */}
                          {/* ... */}
                        </>
                      )}
                    </div>
                    <button className={styles.button1} type="submit">
                      <b className={styles.next}>
                        {currentStep === 1 ? "Next" : "Complete Registration"}
                      </b>
                    </button>
                  </div>
                </form>

                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Signup;
