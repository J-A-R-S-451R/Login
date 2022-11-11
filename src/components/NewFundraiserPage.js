import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom'
import { InputAdornment } from '@mui/material';
import { useState } from 'react';
import { createFundraiser } from '../js/FundraiserAPI';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function NewFundraiserPage() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    async function submitForm(event) {
        event.preventDefault();

        setIsLoading(true);
        setErrorMessage(null);

        const data = new FormData(event.currentTarget);
        const newFundraiser = {
            name: data.get("name"),
            description: data.get("description"),
            goal: data.get("goal"),
            imageUrl: data.get("imageUrl")
        };

        const result = await createFundraiser(newFundraiser);
        
        setIsLoading(false);
        if (!result.success) {
            setErrorMessage(result.errorMessage ?? "Something went wrong while creating the fundraiser.");
            return;
        }

        navigate("/fundraiser/" + result.id);
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
                <VolunteerActivismIcon sx={{ fontSize: "64px", backgroundColor: "#1976d2", padding: "10px", borderRadius: "100%", color: "white", mb: "8px" }}></VolunteerActivismIcon>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create a new fundraiser
                </Typography>
                <Grid container spacing={2.5} component="form" onSubmit={submitForm}>
                    <Grid item xs={12} sm={12} sx={{textAlign: "center", mt: "24px"}}>
                        <TextField
                            required
                            name="goal"
                            variant="standard"
                            label="Donation goal"
                            id="outlined-start-adornment"
                            InputProps={{
                                style: {fontSize: "24px", textAlign: "center", width: "120px"},
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                inputMode: "numeric"
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Title"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="imageUrl"
                            name="imageUrl"
                            label="Image URL"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="Fundraiser description"
                            fullWidth
                            multiline
                            minRows={6}
                            maxRows={6}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography color="red" visibility={errorMessage ? "visible" : "hidden"}>{errorMessage}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <LoadingButton type="submit" size="medium" variant="contained" loading={isLoading}>Create fundraiser</LoadingButton>
                        <Button onClick={() => navigate(-1)} size="medium" sx={{ marginLeft: "10px" }}>Cancel</Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}