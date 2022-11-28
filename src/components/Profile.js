import React, { useState } from 'react';

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

import { Button } from '@mui/material';
import UserInfoCard from './UserInfoCard';
import UserPasswordChangeCard from './UserPasswordChangeCard';
import RecentDonations from './RecentDonations';

export default function Profile() {
  return (
    <section>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCard style={{ border: "none" }}>
                  <MDBCardBody>
                    <UserInfoCard></UserInfoCard>
                  </MDBCardBody>
                </MDBCard>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCard style={{ border: "none" }}>
                  <MDBCardBody>
                    <UserPasswordChangeCard></UserPasswordChangeCard>
                  </MDBCardBody>
                </MDBCard>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">Your Donations</MDBCardText>
                    <RecentDonations mode="user"></RecentDonations>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">Your Fundraisers</MDBCardText>
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




