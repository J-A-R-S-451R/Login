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
        <div className="donation-page" style={{display: "flex", flexDirection: "column", width: "98vw", justifyContent: "center", justifyItems: "center", alignItems: "center"}}>
            <Paper sx={{ height: "75vh", width: "80vw", marginTop: "32px"}}>
                <div style={{display: "flex", flexDirection: "row", justifyItems: "center", alignItems: "stretch", height: "100%"}}>
                    <div style={{flex: "5"}}>
                        <div className="content-area" style={{display: "flex", flexDirection: "column", height: "100%"}}>
                            <div className="fundraiser-details" style={{padding: "32px 32px 0px 32px", overflowY: "auto", flexGrow: "1", boxShadow: "0px -4px 6px -5px inset rgb(0 0 0 / 50%)"}}>
                                <Typography variant="h4">Fundraiser</Typography>
                                <Typography variant="body1">Goal $7000</Typography>
                                <Typography variant="body1">This is a fundraiser description.</Typography>
                            </div>



                            <div style={{marginTop: "auto", boxShadow: "3px", padding: "16px", textAlign: "center"}}>
                                Progress: $325 out of $500
                                <BorderLinearProgress variant="determinate" sx={{height: "16px", marginTop: "6px"}} value={50} />
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
