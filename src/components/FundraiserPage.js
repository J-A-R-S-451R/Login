import "../css/FundraiserPage.css"
import { Button, CircularProgress, LinearProgress, Paper, Typography } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import RecentDonations from './RecentDonations';
import { useNavigate, useParams } from "react-router-dom";
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

    const navigate = useNavigate();

    function donateToFundraiser() {
        navigate("/donate/" + fundraiserId);
    }

    function formatMoney(num) {
        return num.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }

    async function loadFundraiser() {
      const result = await getFundraiser(fundraiserId);
      console.log(result);
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
                                    <img className="hero-image" src={fundraiser.imageUrl ?? ""}></img>
                                    <div className="fundraiser-details">
                                        <Typography variant="h4">{fundraiser.name}</Typography>
                                        <Typography variant="body1">{fundraiser.description}</Typography>
                                    </div>

                                    <div className="bottom-bar">
                                        <div className="progress-bar-container">
                                            <Typography variant="body1">
                                                Progress: ${formatMoney(fundraiser.donationTotal)} out of ${formatMoney(fundraiser.goal)}
                                            </Typography>

                                            <BorderLinearProgress
                                                className="progress-bar"
                                                variant="determinate"
                                                value={(fundraiser.donationTotal / fundraiser.goal) * 100}
                                            />

                                        </div>
                                        <div className="donate-button-container">
                                            <Button variant="contained" onClick={()=>donateToFundraiser()}>Donate</Button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <RecentDonations fundraiserId={fundraiserId} className="recent-donations-column"></RecentDonations>
                </div>
            </Paper>
        </div>
    );
}

export default FundraiserPage;
