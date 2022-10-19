import { Card, CardContent, Typography, CardMedia, CardActions, Button, Divider } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DonationModal from './DonationModal';

function FundraiserCard({ fundraiser }) {
  const [modalOpen, setModalOpen] = useState(false);


  const navigate = useNavigate();

  function navigateToFundraiser() {
    navigate("/fundraiser/" + fundraiser.id);
  }

    return (
        <Card sx={{ marginTop: "32px" }}>
            <CardMedia
            component="img"
            height="240"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {fundraiser.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {fundraiser.description}
                </Typography>
            </CardContent>
            <Divider></Divider>
            <CardActions>
                <Button size="medium" variant="contained" onClick={()=>setModalOpen(true)}>Donate</Button>
                <Button size="medium" onClick={navigateToFundraiser}>Learn More</Button>
            </CardActions>
            <DonationModal fundraiser={fundraiser} modalOpen={modalOpen} onModalClose={()=>setModalOpen(false)}></DonationModal>
        </Card>
    );

}

export default FundraiserCard;