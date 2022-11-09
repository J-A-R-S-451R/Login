import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardActions, Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import PaymentIcon from '@mui/icons-material/Payment';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';

export default function DonatePage() {
  return (
    <Container component="main" maxWidth="sm">
        <Card
        sx={{
            marginTop: 6,
            padding: 6,
            paddingBottom: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <PaymentIcon sx={{fontSize: "48px", backgroundColor: "#1976d2", padding: "10px", borderRadius: "100%", color: "white", mb: "8px"}}></PaymentIcon>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Donate to Test Fundraiser
            </Typography>
            <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
                </Grid>

                <Grid item xs={12} sx={{mt: "20px"}}>
                    <Typography variant="h6">
                        Payment
                    </Typography>
                    <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel defaultChecked={true} value="creditCard" control={<Radio />} label="Credit Card" />
                        <FormControlLabel value="bankAccount" control={<Radio />} label="Bank Account" />
                    </RadioGroup>
                    </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={9} spacing={0} style={{paddingTop: "0px"}}>
                <TextField
                    required
                    id="creditCardNumber"
                    name="creditCardNumber"
                    label="Credit Card Number"
                    fullWidth
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={3} style={{paddingTop: "0px"}}>
                <TextField
                    required
                    id="cvv"
                    name="cvv"
                    label="CVV"
                    fullWidth
                    variant="standard"
                />
                </Grid>
                
                <Grid item xs={12} sx={{mt: "20px"}}>
                <Typography variant="h6">
                    Billing address
                </Typography>
                </Grid>
                <Grid item spacing={1} xs={12} style={{paddingTop: "0px"}}>
                <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sx={{marginTop: "32px"}}>
                    <LoadingButton type="submit" size="medium" variant="contained">Donate</LoadingButton>
                    <Button size="medium" sx={{marginLeft: "10px"}}>Cancel</Button>
                </Grid>
            </Grid>
        </Card>
    </Container>
  );
}