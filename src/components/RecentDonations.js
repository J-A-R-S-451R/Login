import React from 'react';
import DonationCard from './DonationCard';

function RecentDonations() {
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

export default RecentDonations;
