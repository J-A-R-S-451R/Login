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

/*
      <Drawer
        variant="permanent"
        anchor="left"
        className="drawer"
        PaperProps={{
          sx: {
            backgroundColor: "#1b2530",
            color: "white"
          }
        }}
      >
            <List>
        <ListItem key="1" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon sx={{color: "white"}}></InboxIcon>
            </ListItemIcon>
            <ListItemText primary="Item 1" />
          </ListItemButton>
        </ListItem>
      </List>
      </Drawer>

      <DashboardPage fundraisers={[{title: "Billy bob's fundraiser", description: "this is the description."}, {title: "The second fundraiser", description: "this is the description for the other fundraiser."}]}></DashboardPage>

*/


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

/* import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<DashboardPage fundraisers={[{id: 1, title: "Billy bob's fundraiser", description: "this is the description."}, {id: 2, title: "The second bob's fundraiser", description: "this is the description for the other fundraiser."}]} />}
    >
        <Route
          path="fundraisers/:id"
          element={<FundraiserPage />}
        />
    </Route>
  )
); */

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
