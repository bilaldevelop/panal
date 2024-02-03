// import AdminLayout from "./layouts1/admin";
import {  useEffect, useContext } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate
} from "react-router-dom";
import AdminLayout from "./layouts1/admin"
import Home from "./pages/Home";
import Promotions from "./pages/Promotions";
import Dogecoin1 from "./pages/Dogecoin1";
import Dogecoin from "./pages/Dogecoin";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Deposit from "./pages/Deposit";
import FAQ from "./pages/FAQ";
import Withdrawals from "./pages/Withdrawals";
import Deposits from "./pages/Deposits";
import Platforms from "./pages/Platforms";
import SystemMessage from "./pages/SystemMessage";
import PromotionMessage from "./pages/PromotionMessage";
import Verifications from "./pages/Verifications";
import Bonuses from "./pages/Bonuses";
import ChangePassword from "./pages/ChangePassword";
import EmailPhoneVerifications from "./pages/EmailPhoneVerifications";
import ChangeEmailPhone from "./pages/ChangeEmailPhone";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Coinbase from "./pages/Coinbase";
import Kraken from "./pages/Kraken";
import Binance from "./pages/Binance";
import CashApp from "./pages/CashApp";
import FlashDeposit from "./pages/FlashDeposit";
import Events from "./pages/Events";
import DontHaveBtc from "./pages/DontHaveBtc";
import HowDoesItWorks from "./pages/HowDoesItWorks";
import Games from "./pages/Games";
import { AuthContext } from "./context/AuthContext";
// import Sidebar from "./components/sidebar";

function App() {
  const Navigate = useNavigate()
  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {

    // If the user is not authenticated, redirect to the login page
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    // If the user is authenticated, render the children components
    return children;
  };
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
console.log()
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dogecoin":
        title = "";
        metaDescription = "";
        break;
      case "/dogecoin1":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/deposit":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawals":
        title = "";
        metaDescription = "";
        break;
      case "/deposits":
        title = "";
        metaDescription = "";
        break;
      case "/platforms":
        title = "";
        metaDescription = "";
        break;
      case "/system-message":
        title = "";
        metaDescription = "";
        break;
      case "/promotion-message":
        title = "";
        metaDescription = "";
        break;
      case "/verifications":
        title = "";
        metaDescription = "";
        break;
      case "/bonuses":
        title = "";
        metaDescription = "";
        break;
      case "/change-password":
        title = "";
        metaDescription = "";
        break;
      case "/emailphone-verifications":
        title = "";
        metaDescription = "";
        break;
      case "/change-emailphone":
        title = "";
        metaDescription = "";
        break;
      case "/account":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/coinbase":
        title = "";
        metaDescription = "";
        break;
      case "/kraken":
        title = "";
        metaDescription = "";
        break;
      case "/binance":
        title = "";
        metaDescription = "";
        break;
      case "/cash-app":
        title = "";
        metaDescription = "";
        break;
      case "/flash-deposit":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/dont-have-btc":
        title = "";
        metaDescription = "";
        break;
      case "/how-does-it-works":
        title = "";
        metaDescription = "";
        break;
      case "/games":
        title = "";
        metaDescription = "";
        break;
        case "/admin":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Promotions />} />
    <Route path="/dogecoin" element={<Dogecoin1 />} />
    <Route path="/dogecoin1" element={<Dogecoin />} />
    <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
    <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
    <Route path="/deposit" element={<Deposit />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/withdrawals" element={<RequireAuth><Withdrawals /></RequireAuth>} />
    <Route path="/deposits" element={<Deposits />} />
    <Route path="/platforms" element={<RequireAuth><Platforms /></RequireAuth>} />
    <Route path="/system-message" element={<RequireAuth><SystemMessage /></RequireAuth>} />
    <Route path="/promotion-message" element={<RequireAuth><PromotionMessage /></RequireAuth>} />
    <Route path="/verifications" element={<RequireAuth><Verifications /></RequireAuth>} />
    <Route path="/bonuses" element={<RequireAuth><Bonuses /></RequireAuth>} />
    <Route path="/change-password" element={<RequireAuth><ChangePassword /></RequireAuth>} />
    <Route path="/emailphone-verifications" element={<RequireAuth><EmailPhoneVerifications /></RequireAuth>} />
    <Route path="/change-emailphone" element={<RequireAuth><ChangeEmailPhone /></RequireAuth>} />
    <Route path="/account" element={<RequireAuth><Account /></RequireAuth>} />
    <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/coinbase" element={<Coinbase />} />
    <Route path="/kraken" element={<Kraken />} />
    <Route path="/binance" element={<Binance />} />
    <Route path="/cash-app" element={<CashApp />} />
    <Route path="/flash-deposit" element={<FlashDeposit />} />
    <Route path="/events" element={<Events />} />
    <Route path="/dont-have-btc" element={<DontHaveBtc />} />
    <Route path="/how-does-it-works" element={<HowDoesItWorks />} />
    <Route path="/games" element={<Games />} />
 <Route path="admin/*" element={<AdminLayout/>} />  

  </Routes>
  
  );
}
export default App;
// import React from "react";
// import {
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import AdminLayout from "./layouts/admin";
 
// const App = () => {

//   return (
//    <>
//  <Routes>
//        <Route path="admin/*" element={<AdminLayout/>} /> 
//     </Routes>
//    </>
//   );
// };
// export default App;







