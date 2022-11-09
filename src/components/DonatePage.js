import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import PaymentIcon from '@mui/icons-material/Payment';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { useNavigate, useParams } from 'react-router-dom'
import { InputAdornment } from '@mui/material';
import { useState } from 'react';
import { sendDonation } from '../js/FundraiserAPI';

export default function DonatePage() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentType, setPaymentType] = useState("credit_card");
    const { fundraiserId } = useParams();
    const navigate = useNavigate();

    function switchPaymentType(event) {
        setPaymentType(event.target.value);
    }

    function paymentIsCreditCard() {
        return paymentType === "credit_card";
    }

    async function submitDonation(event) {
        event.preventDefault();

        setIsLoading(true);
        setErrorMessage(null);

        const data = new FormData(event.currentTarget);
        const donation = {
            amount: data.get("donationAmount"),
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            paymentType: data.get("paymentType"),
            addressCountry: data.get("country"),
            addressState: data.get("state"),
            addressCity: data.get("city"),
            addressStreet1: data.get("address1"),
            addressStreet2: data.get("address2"),
            addressZip: data.get("zip"),
            note: data.get("message"),
            fundraiserId: fundraiserId,
        };

        if (paymentType === "credit_card") {
            donation.creditCardNumber = data.get("accountNumber");
            donation.cvv = data.get("cvv");
        } else if (paymentType === "bank_account") {
            donation.bankAccountNumber = data.get("accountNumber");
        }

        const result = await sendDonation(donation);
        
        setIsLoading(false);
        if (!result.success) {
            setErrorMessage(result.errorMessage ?? "Something went wrong while donating.");
            return;
        }

        navigate("/fundraiser/" + fundraiserId);
    }

    return (
        <Container component="main" maxWidth="sm">
            <Card
                sx={{
                    marginTop: 6,
                    marginBottom: 6,
                    padding: 6,
                    paddingBottom: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <PaymentIcon sx={{ fontSize: "64px", backgroundColor: "#1976d2", padding: "10px", borderRadius: "100%", color: "white", mb: "8px" }}></PaymentIcon>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Donate to Test Fundraiser
                </Typography>
                <Grid container spacing={2.5} component="form" onSubmit={submitDonation}>
                    <Grid item xs={12} sm={12} sx={{textAlign: "center", mt: "24px"}}>
                        <TextField
                            required
                            name="donationAmount"
                            variant="standard"
                            label="Donation amount"
                            id="outlined-start-adornment"
                            InputProps={{
                                style: {fontSize: "24px", textAlign: "center", width: "120px"},
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                inputMode: "numeric"
                            }}
                        />
                    </Grid>

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
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="message"
                            name="message"
                            label="Message to fundraiser"
                            fullWidth
                            multiline
                            minRows={3}
                            maxRows={3}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Typography variant="h6">
                            Payment
                        </Typography>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="paymentType"
                                defaultValue="credit_card"
                                onChange={e => switchPaymentType(e)}
                            >
                                <FormControlLabel value="credit_card" control={<Radio />} label="Credit Card" />
                                <FormControlLabel value="bank_account" control={<Radio />} label="Bank Account" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid 
                        item
                        xs={12}
                        sm={paymentIsCreditCard() ? 9 : 12}
                        style={{ paddingTop: "0px" }}
                    >
                        <TextField
                            required
                            id="accountNumber"
                            name="accountNumber"
                            label={paymentIsCreditCard() ? "Credit Card Number" : "Bank Account Number"}
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        style={{paddingTop: "0px"}}
                        display={paymentIsCreditCard() ? "block" : "none"}
                    >
                        <TextField
                            required={paymentIsCreditCard() ? true : false}
                            id="cvv"
                            name="cvv"
                            label="CVV"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Typography variant="h6">
                            Billing address
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: "0px" }}>
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
                            required
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
                    <Grid item xs={12} sm={6} sx={{marginBottom: "24px"}}>
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

                    <Grid item xs={12}>
                        <Typography color="red" visibility={errorMessage ? "visible" : "hidden"}>{errorMessage}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <LoadingButton type="submit" size="medium" variant="contained" loading={isLoading}>Donate</LoadingButton>
                        <Button onClick={() => navigate(-1)} size="medium" sx={{ marginLeft: "10px" }}>Cancel</Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}