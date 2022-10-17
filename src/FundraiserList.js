import React from 'react';
import { Card, Input, Typography } from '@mui/material';
import FundraiserCard from './FundraiserCard';

class FundraiserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="fundraiser-list">
            {this.props.fundraisers.map(fundraiser => {
                return <FundraiserCard name={fundraiser.name} description={fundraiser.description}></FundraiserCard>
            })}
        </div>
    );
  }
}

export default FundraiserList;
