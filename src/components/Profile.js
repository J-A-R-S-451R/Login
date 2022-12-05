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

import { Link } from 'react-router-dom';

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




