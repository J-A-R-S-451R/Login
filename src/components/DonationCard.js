import { Avatar, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import React from 'react';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function DonationCard({ donation, showFundraiserDetails }) {
    const { firstName, lastName, amount, date, note, fundraiserName, fundraiserId } = donation;

    function formatDate(date) {
        if (!date) {
            return "";
        }

        let parsed = new Date(date);
        return `${months[parsed.getMonth()]} ${parsed.getDate()}, ${parsed.getFullYear()}`;
    }

    function formatMoney(num) {
        return num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className="donation-card">
            <Card sx={{ maxWidth: 345, marginBottom: "6px" }} elevation={4}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }}>
                            {firstName && lastName ? (firstName[0].toUpperCase() + lastName[0].toUpperCase()) : "NA"}
                        </Avatar>
                    }
                    title={firstName + " " + lastName}
                    subheader={formatDate(date)}
                    action={
                        <Typography m>{"$" + formatMoney(amount)}</Typography>
                    }
                />
                <CardContent>
                    {showFundraiserDetails ? (
                        <>
                            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                                From <Link to={"/fundraiser/" + fundraiserId}>{fundraiserName}</Link>
                            </Typography>
                        </>
                    ) : (<></>)}
                    <Typography variant="body2" color="text.secondary">
                        {note}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default DonationCard;
