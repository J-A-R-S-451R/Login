import React from 'react';
import DonationCard from './DonationCard';

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
