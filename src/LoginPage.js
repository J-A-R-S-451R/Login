import './LoginPage.css';
import { Card, CardContent, Input, Typography, CardActions, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

    return (
      
      <div className="login-page" >
        <Card className="login-page-card">
          <CardContent>
            <Typography gutterBottom={true} variant="h6" align="left">Login to JARS Fundraiser</Typography>
            <Typography
              gutterBottom={true}
              variant="h9"
              color={"red"}
              align="left"
              visibility={showErrorMessage ? "visible" : "hidden"}
            >Your credentials are incorrect.</Typography>

            <Input
              className="login-page-username"
              onChange={(e)=>setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              value={username}
              readOnly={loading}
              sx={{marginBottom: "40px", width: "90%"}}
            ></Input>
            <br></br>
            <Input
              className="login-page-password"
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
              readOnly={loading}
              sx={{width: "90%"}}
            ></Input>
          </CardContent>
          <CardActions className="login-actions">
              <LoadingButton
                onClick={()=>tryLogin()}
                className="login-page-login-button"
                variant="contained"
                loading={loading}>
                  Login
              </LoadingButton>
              <Button
                onClick={()=>navigate("/signup")}
                variant="outline">
                  Register
              </Button>
            </CardActions>
        </Card>
      </div>
    );

  async function tryLogin() {
    setLoading(true);
    setShowErrorMessage(false);

    let loginPayload = JSON.stringify({
      "username": username,
      "password": password
    });

    try {
      let response = await fetch('https://jarsfundraiser.azurewebsites.net/Fundraiser/LoginUser', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + window.btoa(loginPayload)
        },
        credentials: "include"
      });
  
      response.json();
    } catch (err) {
      setLoading(false);
      setShowErrorMessage(true);
    }

  
  }
}

export default LoginPage;
