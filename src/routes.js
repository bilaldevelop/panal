// Admin Imports
import MainDashboard from "./views1/admin/default";
import NFTMarketplace from "./views1/admin/marketplace";
import Profile from "./views1/admin/profile";
import DataTables from "./views1/admin/tables";
import RTLDefault from "./views1/rtl/default";

// Auth Imports
import SignIn from "./views1/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Usermanagement from "./views1/usermanagement/Usermanagement";
import Emailmanagement from "./views1/Emailmanagement/Emailmanagement";
import Account from "./views1/Account/Account";
import EmailVerification from "./views1/EmailVerification/EmailVerification";
import PasswordManagement from "./views1/Password Management/PasswordManagement";
import Userverified from "views1/Verified/Userverified";
import Message from "views1/Massage/Message";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdPerson className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "User Management",
    layout: "/admin",
    path: "usermanagemt",
    icon: <MdLock className="h-6 w-6" />,
    component: <Usermanagement />,
  },
  {
    name: "Email Management",
    layout: "/admin",
    path: "Emailmanagement",
    icon: <MdLock className="h-6 w-6" />,
    component: <Emailmanagement />,
  },

  {
    name: "Account",
    layout: "/admin",
    path: "Account",
    icon: <MdLock className="h-6 w-6" />,
    component: <Account/>,
  },
  {
    name: "Email Verification",
    layout: "/admin",
    path: "Email Verification",
    icon: <MdLock className="h-6 w-6" />,
    component: <EmailVerification/>,
  },
  {
    name: "Password Management",
    layout: "/admin",
    path: "PasswordManagement",
    icon: <MdLock className="h-6 w-6" />,
    component: <PasswordManagement/>,
  },
  {
    name: "User-verified",
    layout: "/admin",
    path: "Userverified",
    icon: <MdLock className="h-6 w-6" />,
    component: <Userverified/>,
  },
  {
    name: "Message",
    layout: "/admin",
    path: "Message",
    icon: <MdLock className="h-6 w-6" />,
    component: <Message/>,
  },
  ];

export default routes;
