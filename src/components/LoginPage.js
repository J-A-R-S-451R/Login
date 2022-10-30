import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoadingButton } from '@mui/lab';

export default function LoginPage() {
  const GENERIC_LOGIN_FAILURE = "Something went wrong while trying to sign in. Try again.";

  const [loading, setLoading] = React.useState(false);
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(GENERIC_LOGIN_FAILURE);

  const navigate = useNavigate();

  async function tryLogin(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setLoading(true);
    setShowErrorMessage(false);

    let loginPayload = JSON.stringify({
      "username": data.get("username"),
      "password": data.get("password")
    });

    try {
      let response = await fetch('https://jarsfundraiser.azurewebsites.net/Fundraiser/LoginUser', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: loginPayload,
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
      errorMessage = GENERIC_LOGIN_FAILURE;
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
            Sign in
          </Typography>
          <Typography variant="body1" sx={{color: "red"}} visibility={showErrorMessage ? "visible" : "hidden" }>
            {errorMessage}
          </Typography>
          <Box component="form" onSubmit={tryLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Button>
                  Forgot password?
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={()=>navigate("/signup")}>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
  );
}