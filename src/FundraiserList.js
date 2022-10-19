import React from 'react';
import { Card, Input, Typography } from '@mui/material';
import FundraiserCard from './FundraiserCard';

function FundraiserList({ fundraisers }) {
    return (
        <div className="fundraiser-list">
            {fundraisers.map(fundraiser => {
                return <FundraiserCard title={fundraiser.title} description={fundraiser.description}></FundraiserCard>
            })}
        </div>
    );
}

export default FundraiserList;
