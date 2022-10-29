import "../css/FundraiserPage.css"
import { LinearProgress, Paper, Typography } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React from 'react';
import RecentDonations from './RecentDonations';

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
    return (
        <div className="donation-page">
            <Paper className="paper-container">
                <div className="page-contents">
                    <div className="content-column">
                        <div className="content-area">
                            <div className="fundraiser-details">
                                <Typography variant="h4">Fundraiser</Typography>
                                <Typography variant="body1">Goal $7000</Typography>
                                <Typography variant="body1">This is a fundraiser description.</Typography>
                            </div>

                            <div className="progress-bar-container">
                                <Typography variant="body1">
                                    Progress: $325 out of $500
                                </Typography>
                                <BorderLinearProgress className="progress-bar" variant="determinate" value={50} />
                            </div>
                        </div>
                    </div>
                    <RecentDonations className="recent-donations-column"></RecentDonations>
                </div>
            </Paper>
        </div>
    );
}

export default FundraiserPage;
