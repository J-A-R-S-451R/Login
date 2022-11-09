import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function DonationCard({ donation }) {
    const { firstName, lastName, amount, date, note } = donation;

    function formatDate(date) {
        if (!date) {
            return "";
        }

        let parsed = new Date(date);
        return `${months[parsed.getMonth()]} ${parsed.getDate()}, ${parsed.getFullYear()}`;
    }

    return (
        <div className="donation-card">
            <Card sx={{ maxWidth: 345, marginBottom: "6px" }} elevation={4}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {firstName && lastName ? (firstName[0].toUpperCase() + lastName[0].toUpperCase()) : "NA"}
                </Avatar>
                }
                title={firstName + " " + lastName}
                subheader={formatDate(date)}
                action={
                    <Typography m>{"$" + amount}</Typography>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {note}
                </Typography>
            </CardContent>
            </Card>
        </div>
    );
}

export default DonationCard;
