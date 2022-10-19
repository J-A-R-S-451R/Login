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


import {
  createHashRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <DashboardPage fundraisers={[{id: 1, title: "First Fundraiser", description: "this is the description."}, {id: 2, title: "The second fundraiser", description: "this is the description for the other fundraiser."}]}></DashboardPage>
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
