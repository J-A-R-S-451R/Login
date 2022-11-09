import '../css/DashboardPage.css'
import { CircularProgress, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FundraiserCard from './FundraiserCard';
import { getAllFundraisers } from '../js/FundraiserAPI';

function DashboardPage() {
  const [fundraisers, setFundraisers] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadFundraisers() {
    const result = await getAllFundraisers();
    setFundraisers(result);
    setLoading(false);
  }

  useEffect(() => {
    loadFundraisers();
  }, []);

  return (
      <div className="dashboard-container">
        <div className="hero-header">
          <Typography className="hero-text" fontWeight={800} fontSize="32px" color="white">
            We all must work to make the world worthy
          </Typography>
        </div>

        {
          loading ? (
            <CircularProgress variant="indeterminate" sx={{mt: "16px"}}></CircularProgress>
          )
          : (
            <div className="fundraiser-cards">
              {fundraisers.map(x => {
                  return <FundraiserCard fundraiser={x}></FundraiserCard>
              })}
            </div>
          )
        }
      </div>
  );
}

export default DashboardPage;
