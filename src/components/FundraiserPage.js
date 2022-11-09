import "../css/FundraiserPage.css"
import { CircularProgress, LinearProgress, Paper, Typography } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import RecentDonations from './RecentDonations';
import { useParams } from "react-router-dom";
import { getFundraiser } from "../js/FundraiserAPI";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 50,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 50,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

function FundraiserPage() {
    const { fundraiserId } = useParams();
    const [fundraiser, setFundraiser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function loadFundraiser() {
      const result = await getFundraiser(fundraiserId);
      setFundraiser(result);
      setLoading(false);
    }
  
    useEffect(() => {
      loadFundraiser();
    }, []);

    return (
        <div className="donation-page">
            <Paper className="paper-container">
                <div className="page-contents">
                    <div className="content-column">
                        <div className="content-area">
                            {loading ? (
                                <CircularProgress variant="indeterminate"></CircularProgress>
                            ) : (
                                <>
                                    <div className="fundraiser-details">
                                        <Typography variant="h4">{fundraiser.name}</Typography>
                                        <Typography variant="body1">{fundraiser.description}</Typography>
                                    </div>

                                    <div className="progress-bar-container">
                                        <Typography variant="body1">
                                            Progress: ${fundraiser.donationTotal} out of ${fundraiser.goal}
                                        </Typography>

                                        <BorderLinearProgress
                                            className="progress-bar"
                                            variant="determinate"
                                            value={(fundraiser.donationTotal / fundraiser.goal) * 100}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <RecentDonations className="recent-donations-column"></RecentDonations>
                </div>
            </Paper>
        </div>
    );
}

export default FundraiserPage;
