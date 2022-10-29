import '../css/DashboardPage.css'
import { Typography } from '@mui/material';
import React from 'react';
import FundraiserCard from './FundraiserCard';

function DashboardPage({ fundraisers }) {
  if (!fundraisers) {
    fundraisers = []
  }

  return (
      <div className="dashboard-container">
        <div className="hero-header">
          <Typography className="hero-text" fontWeight={800} fontSize="32px" color="white">
            We all must work to make the world worthy
          </Typography>
        </div>

        <div className="fundraiser-cards">
            {fundraisers.map(x => {
                return <FundraiserCard fundraiser={x}></FundraiserCard>
            })}
        </div>
      </div>
  );
}

export default DashboardPage;
