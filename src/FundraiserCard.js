//import './FundraiserCard.css';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

class FundraiserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Card>
        <CardContent>
            <Typography align="left" variant="h5" gutterBottom="true">{this.props.name}</Typography>
            <Typography align="left" variant="body1">{this.props.description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default FundraiserCard;
