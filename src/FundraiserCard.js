import { Card, CardContent, Typography, CardMedia, CardActions, Button, Divider } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DonationModal from './DonationModal';
import "./FundraiserCard.css";
import CloseButton from 'react-bootstrap/CloseButton';

function FundraiserCard({ fundraiser }) {
  const [modalOpen, setModalOpen] = useState(false);

const CardInfo = [
{Image: "https://raisingchildren.net.au/__data/assets/image/0019/48304/Positive-family-relationships.jpg", Title: "Family Johnson House Burnt Down", Text: "A fire happened overnight for the family. They lost everything."},
{Image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*", Title: "Lassie is Sick", Text: "Need help paying for a surgery."},
{Image: "https://media.istockphoto.com/photos/close-up-young-smiling-man-in-casual-clothes-posing-isolated-on-blue-picture-id1270987867?k=20&m=1270987867&s=612x612&w=0&h=lX9Y1qUxtWOa0W0Mc-SvNta00UH0-sgJQItkxfwE4uU=", Title: "Help Pay for Ronny Funeral", Text: "A tragic accident cost his life."},
]
  const navigate = useNavigate();

  function navigateToFundraiser() {
    navigate("/fundraiser/" + fundraiser.id);
  }

  const renderCard = (card, index) => {
    return(
        <div>
        <Card sx={{ marginTop: "32px" }}>
            <CardMedia
            component="img"
            height="240"
            src={card.Image}
            className="card__img"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {card.Title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {card.Text}
                </Typography>
            </CardContent>
            <Divider></Divider>
            <CardActions>
                <Button size="medium" variant="contained" onClick={()=>setModalOpen(true)}>Donate</Button>
                <Button size="medium" onClick={navigateToFundraiser}>Learn More</Button>
            </CardActions>
            <DonationModal fundraiser={fundraiser} modalOpen={modalOpen} onModalClose={()=>setModalOpen(false)}></DonationModal>
            
        </Card>
        </div>
    )
  }
    return (
       <div>
        {CardInfo.map(renderCard)}
       </div>
        
    );

}

export default FundraiserCard;
