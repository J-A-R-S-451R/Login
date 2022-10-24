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
      <div className="dashboard-container" style={{display: "flex", flexDirection: "column", width: "98vw", justifyContent: "center", justifyItems: "center", alignItems: "center"}}>
        <div className="hero-header" style={{display: "flex", flowDirection: "column", justifyItems: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "800px", backgroundImage: "url(https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894_1280.jpg)", backgroundSize: "cover"}}>
          <Typography fontWeight={700} fontSize="45px" color= "white"  sx={{textShadow: "gray 1px 0 21px"}}>
            It only takes you to make it possible.
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
