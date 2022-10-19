//import './FundraiserCard.css';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Divider, Paper, LinearProgress } from '@mui/material';
import { minHeight } from '@mui/system';
import React from 'react';
import { styled } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import RecentDonations from './RecentDonations';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

function FundraiserPage() {
    return (
        <div className="donation-page" style={{display: "flex", flexDirection: "column", width: "98vw", justifyContent: "center", justifyItems: "center", alignItems: "center"}}>
            <Paper sx={{ height: "75vh", width: "80vw", marginTop: "32px"}}>
                <div style={{display: "flex", flexDirection: "row", justifyItems: "center", alignItems: "stretch", height: "100%"}}>
                    <div style={{flex: "5", padding: "32px"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <Typography variant="h4">Fundraiser</Typography>
                            <Typography variant="body1">Goal $7000</Typography>

                            <div style={{marginTop: "auto"}}>
                                <BorderLinearProgress variant="determinate" value={50} />
                            </div>
                        </div>

                    </div>
                    <RecentDonations style={{flex: "1"}}></RecentDonations>
                </div>
            </Paper>
        </div>
    );
}

export default FundraiserPage;
