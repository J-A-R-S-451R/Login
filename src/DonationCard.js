import { Card, CardContent, CardHeader, Typography, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

function DonationCard() {
    return (
        <div className="donation-card">
            <Card sx={{ maxWidth: 345, marginBottom: "6px" }} elevation={4}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    GD
                </Avatar>
                }
                title="John Doe"
                subheader="September 14, 2016"
                action={
                    <Typography m>$15</Typography>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This is where the contributers write their notes.
                </Typography>
            </CardContent>
            </Card>
        </div>
    );
}

export default DonationCard;
