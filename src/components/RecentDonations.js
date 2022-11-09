import React from 'react';
import DonationCard from './DonationCard';
import { getDonations } from '../js/FundraiserAPI';
import { useState, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';

function RecentDonations({ fundraiserId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [donations, setDonations] = useState([]);

    async function loadRecentDonations() {
        if (!fundraiserId) {
            return;
        }
        const result = await getDonations(fundraiserId);
        if (!result.success) {
            console.log("Unable to get recent donations for id " + fundraiserId);
            return;
        }

        setDonations(result);
        setIsLoading(false);
    }

    useEffect(() => {
        loadRecentDonations();
    }, [fundraiserId]);

    return (
        <div className="recent-donations" style={{ overflowY: "scroll", overflowX: "hidden", padding: "6px" }}>
            {
                !isLoading ? (
                    donations.length > 0 ? (
                        donations.map(x => {
                            return <DonationCard donation={x}></DonationCard>
                        }))
                    : (
                        <Typography>There haven't been any donations to this fundraiser yet.</Typography>
                )) : (
                    <CircularProgress variant="indeterminate"></CircularProgress>
                )
            }
        </div>
    );
}

export default RecentDonations;
