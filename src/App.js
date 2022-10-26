import './App.css';
import LoginPage from './LoginPage';
import FundraiserCard from './FundraiserCard';
import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, List } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox'
import SignupPage from './Signup';
import NavBar from './NavBar'
import DashboardPage from './DashboardPage';
import DonationModal from './DonationModal';
import FundraiserPage from './FundraiserPage';
import FundraiserType from './FundraiserType';


import {
  createHashRouter,
  RouterProvider,
  Outlet,
  Route
} from "react-router-dom";
import Profile from './Profile';
import Medical from './Donation/Medical';




const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <DashboardPage fundraisers={[{}]}></DashboardPage>
      },
      {
        path: "/fundraiser/:id",
        element: <FundraiserPage></FundraiserPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/signup",
        element: <SignupPage></SignupPage>
      },
      {
        path: "/fundraiserType",
        element:<FundraiserType></FundraiserType>

      },
      {
        path: "/profile",
        element:<Profile></Profile>
      },
      {
        path: "/medical",
        element:<Medical></Medical>
      }



    ]
  },
  {
    path: "/fundraiser/:fundraiserId",
    element: <FundraiserPage></FundraiserPage>
  }
]);

function Root() {
  return (
    <div className="root">
      <NavBar />
  
      <Outlet></Outlet>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
