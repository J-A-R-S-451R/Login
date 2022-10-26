import './LoginPage.css';
import { Card, CardContent, Input, Typography, CardActions, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react';
import FundraiserCard from './FundraiserCard';

function DashboardPage({ fundraisers }) {
/*   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false); */
  if (!fundraisers) {
    fundraisers = []
  }

  return (
      <div className="dashboard-container" style={{display: "flex", flexDirection: "column", width: "98vw", justifyContent: "center", justifyItems: "center", alignItems: "center", backgroundColor: '#eee'}}>
        <div className="hero-header" style={{display: "flex", flowDirection: "column", justifyItems: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "300px", backgroundImage: "url(https://mymodernmet.com/wp/wp-content/uploads/2020/08/Story-Of-Flowers-Still-thumbnail.jpg)", backgroundSize: "cover"}}>
          <Typography fontWeight={800} fontSize="32px" color="white"  sx={{textShadow: "black 1px 0 21px"}}>
            We all must work to make the world worthy
          </Typography>
        </div>

        <div className="fundraiser-cards" style={{width: "50vw", display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center"}}>
            {fundraisers.map(x => {
                return <FundraiserCard fundraiser={x}></FundraiserCard>
            })}
        </div>
      </div>
  );
}

export default DashboardPage;
