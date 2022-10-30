import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

export default function SignupPage() {
  const GENERIC_SIGNUP_FAILURE = "Something wen't wrong while creating your account. Try again."

  const [loading, setLoading] = React.useState(false);
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(GENERIC_SIGNUP_FAILURE);

  const navigate = useNavigate();

  async function trySignup(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setLoading(true);
    setShowErrorMessage(false);

    let signupPayload = JSON.stringify({
      "username": data.get("username"),
      "password": data.get("password"),
      "firstName": data.get("firstName"),
      "lastName": data.get("lastName")
    });

    try {
      let response = await fetch('https://jarsfundraiser.azurewebsites.net/Fundraiser/AddUser', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: signupPayload
      });
      
      const responseJson = await response.json();
      if (!response.ok) {
        displayError(responseJson["errorMessage"]);
        return;
      }

      navigate("/");
    } catch (err) {
      displayError();
    }
  }

  function displayError(errorMessage) {
    if (!errorMessage) {
      errorMessage = GENERIC_SIGNUP_FAILURE;
    }
    setErrorMessage(errorMessage);
    setShowErrorMessage(true);
    setLoading(false);
  }

  return (
      <Container component="main" maxWidth="sm">
        <Card
          sx={{
            marginTop: 8,
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Typography variant="body1" sx={{color: "red"}} visibility={showErrorMessage ? "visible" : "hidden" }>
            {errorMessage}
          </Typography>
          <Box component="form" onSubmit={trySignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="username"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={()=>navigate("/login")}>
                  <Typography variant="body3">
                    Already have an account? Sign in
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
  );
}