import { LinearProgress, Paper, Typography } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React from 'react';
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

                            <Typography variant="body1">This is a fundraiser description.</Typography>
                        </div>

                    </div>
                    <RecentDonations style={{flex: "1"}}></RecentDonations>
                </div>
            </Paper>
        </div>
    );
}

export default FundraiserPage;
