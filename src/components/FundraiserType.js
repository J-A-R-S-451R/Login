import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import "../css/FundraiserType.css";
import { Button, Card, Container } from "react-bootstrap";




function FundraiserType() {
  const CardInfo = [
    { image: "https://familytiesinc.com/wp-content/uploads/2018/03/family-ties-hero.png", title: "Medical", text: "Help those with medical needs." },
    { image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg", title: "Animal", text: "Help those with animal emergency." },
    { image: "https://images.unsplash.com/photo-1627639679638-8485316a4b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHw%3D&w=1000&q=80", title: "Emergency", text: "Help those that are in an emergency." },
    { image: "https://www.nycgovparks.org/facilities/images/basketball-header.jpg", title: "Memorial", text: "Help pay for funeral." },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="box">
        <Card style={{ width: '18rem' }} key={index} >
          <Card.Img variant="top" src={card.image} className="box__img" />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.text}
            </Card.Text>
            <Link >
              <Button variant="primary" src={card.location}>Donate</Button>
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