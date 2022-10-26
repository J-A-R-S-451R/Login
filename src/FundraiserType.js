import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import "./FundraiserType.css";
import { Button, Card, Container } from "react-bootstrap";
import { height } from "@mui/system";
import { Router } from "express";
import Medical from "./Donation/Medical";



function FundraiserType ()  {
const CardInfo =[
{Image: "https://familytiesinc.com/wp-content/uploads/2018/03/family-ties-hero.png", Title: "Medical", Text: "Help those with medical needs.", location: "/medical",},
{Image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg", Title: "Animal", Text: "Help those with animal emergency."},
{Image: "https://images.unsplash.com/photo-1627639679638-8485316a4b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHw%3D&w=1000&q=80", Title: "Emergency", Text: "Help those that are in an emergency."},
{Image: "https://www.nycgovparks.org/facilities/images/basketball-header.jpg", Title: "Memorial", Text: "Help pay for funeral."},
];

const renderCard = (card, index) => {
    return(
        <div className="box">
        <Card style={{ width: '18rem'}} key={index} >
        <Card.Img variant="top"   src={card.Image} className="box__img" />
        <Card.Body>
          <Card.Title>{card.Title}</Card.Title>
          <Card.Text>
            {card.Text}
          </Card.Text>
          <Link >
          <Button variant="primary" src={card.location} >Donate</Button>
          </Link>
        </Card.Body>
      </Card>
      </div>
    );
};

    return (
        <div className="grid">
       {CardInfo.map(renderCard)}
      </div>
    );
  };

export default FundraiserType;