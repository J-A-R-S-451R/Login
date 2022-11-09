import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DonationModal from './DonationModal';

function FundraiserCard({ fundraiser }) {
    const [modalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate();

    function navigateToFundraiser() {
        navigate("/fundraiser/" + fundraiser.id);
    }

    function donateToFundraiser() {
        navigate("/donate/" + fundraiser.id);
    }

    return (
        <Card sx={{ marginTop: "32px" }}>
            <CardMedia
                component="img"
                height="240"
                image="https://thsblog.s3.amazonaws.com/wp-content/uploads/2019/10/13222121/how_to_sell_fundraiser_tickets_online.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {fundraiser.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {fundraiser.description}
                </Typography>
            </CardContent>
            <Divider></Divider>
            <CardActions>
                <Button size="medium" variant="contained" onClick={donateToFundraiser}>Donate</Button>
                <Button size="medium" onClick={navigateToFundraiser}>Learn More</Button>
            </CardActions>
        </Card>
    );

}

export default FundraiserCard;
