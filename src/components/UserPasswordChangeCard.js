import { Grid, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { updateUserPassword } from '../js/FundraiserAPI';
import { useState } from 'react';


export default function UserPasswordChangeCard() {
    const [passwordUpdateError, setPasswordUpdateError] = useState(null);
    const [isSavingPassword, setIsSavingPassword] = useState(false);

    async function updatePassword(event) {
        event.preventDefault();
        setIsSavingPassword(true);
        setPasswordUpdateError(null);

        const data = new FormData(event.currentTarget);
        const newPassword = data.get("newPassword");
        const newPasswordConfirm = data.get("newPasswordConfirm");

        if (newPassword !== newPasswordConfirm) {
            setPasswordUpdateError("Passwords do not match. Try again.");
            setIsSavingPassword(false);
            return;
        }


        const result = await updateUserPassword(newPassword);

        setIsSavingPassword(false);
        if (!result.success) {
            setPasswordUpdateError(result.errorMessage ?? "Something went wrong while updating your password.");
            return;
        }
    }

    return (
        <Grid container spacing={2.5} component="form" onSubmit={updatePassword} sx={{ textAlign: "left" }}>
            <Grid item xs={12}>
                <Typography>
                    Update Password
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    fullWidth
                    variant="standard"
                    type="password"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="newPasswordConfirm"
                    name="newPasswordConfirm"
                    label="Confirm New Password"
                    fullWidth
                    variant="standard"
                    type="password"
                />
            </Grid>

            <Grid item xs={12}>
                <Typography color="red" display={passwordUpdateError ? "block" : "none"}>{passwordUpdateError}</Typography>
            </Grid>

            <Grid item xs={12}>
                <LoadingButton type="submit" size="medium" variant="contained" loading={isSavingPassword}>Update</LoadingButton>
            </Grid>
        </Grid>
    )
}

