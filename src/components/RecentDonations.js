import React from 'react';
import DonationCard from './DonationCard';
import { getCurrentUserDonations, getDonations, useCurrentUser } from '../js/FundraiserAPI';
import { useState, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';

function RecentDonations({ mode, fundraiserId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [donations, setDonations] = useState([]);

    async function loadRecentDonations() {
        if (mode === "fundraiser" && !fundraiserId) {
            return;
        }

        let result = null;
        if (mode === "fundraiser") {
            result = await getDonations(fundraiserId);
        } else if (mode === "user") {
            result = await getCurrentUserDonations();
        } else {
            console.log("Invalid mode selected.");
            return;
        }

        if (!result.success) {
            console.log("Unable to get recent donations");
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
                            return <DonationCard donation={x} showFundraiserDetails={mode === "user"}></DonationCard>
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
