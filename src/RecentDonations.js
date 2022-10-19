//import './FundraiserCard.css';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Divider, Paper, LinearProgress } from '@mui/material';
import { minHeight } from '@mui/system';
import React from 'react';
import { styled } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import DonationCard from './DonationCard';

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

class RecentDonations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
        <div className="recent-donations" style={{overflowY: "scroll", overflowX: "hidden", padding: "6px"}}>
            <DonationCard></DonationCard>
            <DonationCard></DonationCard>
            <DonationCard></DonationCard>
            <DonationCard></DonationCard>
            <DonationCard></DonationCard>
            <DonationCard></DonationCard>
            <DonationCard></DonationCard>
            <DonationCard></DonationCard>

        </div>
    );
  }

}

export default RecentDonations;
