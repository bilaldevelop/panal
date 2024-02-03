import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from "../context/AuthContext";


  const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        dispatch({
          type: 'LOGIN',
          payload: userCredential.user
        });
        navigate('/platforms'); // Redirect to homepage or dashboard
      })
      .catch((error) => {
        setError(error.message); // Handle errors here, such as showing an error message to the user
      });
  };
  const onLinkRegisterClick = useCallback(() => {
    navigate('/signup'); // Replace '/register' with your actual registration route
  }, [navigate]);
  return (
    <div className={styles.login}>
      <main className={styles.divbody}>
        <section className={styles.body}>
          <div className={styles.fishnetLogo3Parent}>
            <img
              className={styles.fishnetLogo3Icon}
              alt=""
              src="/fishnetlogo-3@2x.png"
            />
            <div className={styles.divcss10786v4}>
              <div className={styles.divchakraStack}>
                <div className={styles.heading1}>
                  <div className={styles.login}>Login</div>
                </div>
                <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.frame}>
            <div className={styles.groupLabel}>Email</div>
            <input
              className={styles.groupInput}
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.groupLabel1}>Password</div>
              <div className={styles.groupLink}>Forgot Password?</div>
            </div>
            <div className={styles.frame3}>
              <input
                className={styles.groupInput1}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.button} type="submit">
              <div className={styles.signIn}>Sign In</div>
            </button>
          </div>
        </form>
        <div className={styles.divcss1aiww0l}>
      <div className={styles.doNotHave}>Do not have an account?</div>
      <button className={styles.linkRegister} onClick={onLinkRegisterClick}>
        Register Now
      </button>
        </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.footer}>
          <div className={styles.footerLogos}>
            <img
              className={styles.sectionLinkImage}
              alt=""
              src="/section--link--image362@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image363@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image364@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image365@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image366@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image367@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image368@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image369@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image370@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image371@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image372@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image373@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image374@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image375@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image376@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image377@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image378@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image379@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image380@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image381@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image382@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image383@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image384@2x.png"
            />
            <img
              className={styles.sectionLinkImage1}
              alt=""
              src="/section--link--image385@2x.png"
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
      </main>
    </div>
  );
};

export default Login;
