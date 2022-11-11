import './css/App.css';
import DashboardPage from './components/DashboardPage';
import FundraiserPage from './components/FundraiserPage';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import SignupPage from './components/SignupPage';
import DonatePage from './components/DonatePage';
import Profile from './components/Profile';
import FundraiserType from './components/FundraiserType';
import NewFundraiserPage from './components/NewFundraiserPage';

import {
  createHashRouter, Outlet, RouterProvider
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <DashboardPage></DashboardPage>
      },
      {
        path: "/fundraiser/:fundraiserId",
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
        path: "/donate/:fundraiserId",
        element: <DonatePage></DonatePage>
      },
      {
        path: "/profile",
        element:<Profile></Profile>
      },
      {
        path: "/categories",
        element: <FundraiserType></FundraiserType>
      },
      {
        path: "/new-fundraiser/",
        element: <NewFundraiserPage></NewFundraiserPage>
      }
    ]
  },
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