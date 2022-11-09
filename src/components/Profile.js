import React from 'react';

import { Card, CardContent, Typography, CardMedia, CardActions, Divider, Input } from '@mui/material';
import "../css/Profile.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';


export default function Profile({ fundraiser }) {
  return (
    <section>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <PersonIcon sx={{ width: "100px", height: "100px", backgroundColor: "gray", color: "white", borderRadius: "100%", marginBottom: "12px" }}></PersonIcon>
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <Input placeholder="Full Name" value="Jonatan"></Input>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <Input placeholder="Email" value="example@example.com"></Input>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText>
                          <Input placeholder="Address" value="Bay Area, San Francisco, CA"></Input>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="button">
              <Button>Start A Fund</Button>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">


            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1"> </span>Donated</MDBCardText>

                    <MDBRow>
                      <MDBCol>
                        <MDBCardTitle className="mb-1" style={{ fontSize: '.77rem' }}>Family Johnson House Burnt Down </MDBCardTitle>
                        <MDBCardText>$20.00</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr></hr>
                    <MDBRow>
                      <MDBCol>
                        <MDBCardTitle className="mb-1" style={{ fontSize: '.77rem' }}>Lassie is Sick </MDBCardTitle>
                        <MDBCardText>$20.00</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>




              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1"></span> Donations</MDBCardText>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://media.istockphoto.com/photos/close-up-young-smiling-man-in-casual-clothes-posing-isolated-on-blue-picture-id1270987867?k=20&m=1270987867&s=612x612&w=0&h=lX9Y1qUxtWOa0W0Mc-SvNta00UH0-sgJQItkxfwE4uU=" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Help Pay for Ronny Funeral
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          A tragic accident cost his life.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}




