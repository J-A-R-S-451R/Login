import { Button, Grid, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../js/FundraiserAPI';
import { updateUser } from '../js/FundraiserAPI';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';


export default function UserInfoCard() {
    const [profileUpdateError, setProfileUpdateError] = useState(null);
    const [isSavingProfile, setIsSavingProfile] = useState(false);

    const navigate = useNavigate();
    const currentUser = useCurrentUser();

    async function updateUserInfo(event) {
        event.preventDefault();

        setIsSavingProfile(true);
        setProfileUpdateError(null);

        const data = new FormData(event.currentTarget);
        const userInfo = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            addressCountry: data.get("country"),
            addressState: data.get("state"),
            addressCity: data.get("city"),
            addressStreet1: data.get("address1"),
            addressStreet2: data.get("address2"),
            addressZip: data.get("zip"),
        };

        const result = await updateUser(userInfo);

        setIsSavingProfile(false);
        if (!result.success) {
            setProfileUpdateError(result.errorMessage ?? "Something went wrong while updating your profile.");
            return;
        }
    }

    return (
        <>
            <PersonIcon sx={{ width: "100px", height: "100px", backgroundColor: "gray", color: "white", borderRadius: "100%", marginBottom: "24px" }}></PersonIcon>
            <Grid container spacing={2.5} component="form" onSubmit={updateUserInfo} sx={{ textAlign: "left" }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        defaultValue={currentUser?.firstName}
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
                        defaultValue={currentUser?.lastName}
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: "20px" }}>
                    <Typography variant="h6">
                        Billing address
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ paddingTop: "0px" }}>
                    <TextField
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        defaultValue={currentUser?.addressStreet1}
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
                        defaultValue={currentUser?.addressStreet2}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        defaultValue={currentUser?.addressCity}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State"
                        fullWidth
                        variant="standard"
                        defaultValue={currentUser?.addressState}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        defaultValue={currentUser?.addressZip}
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginBottom: "24px" }}>
                    <TextField
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        defaultValue={currentUser?.addressCountry}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography color="red" display={profileUpdateError ? "block" : "none"}>{profileUpdateError}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <LoadingButton type="submit" size="medium" variant="contained" loading={isSavingProfile}>Save</LoadingButton>
                </Grid>
            </Grid>
        </>
    )
}

