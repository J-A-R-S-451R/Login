import './App.css';
import LoginPage from './LoginPage';
import FundraiserCard from './FundraiserCard';
import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, List } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox'

function App() {
  return (
    <div className="App">
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
      <Divider />
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
      <LoginPage></LoginPage>
      //<FundraiserCard name="Billy's Fundraiser" description="Trying to cure cancer using only natural ingredients found in flowers and butterflies. This is a revolutionary techonology, buy in now or lose out forever."></FundraiserCard>
    </div>
  );
}

export default App;
