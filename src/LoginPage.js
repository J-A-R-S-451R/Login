import './LoginPage.css';
import { Card, CardContent, Input, Typography, CardActions } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      showErrorMessage: false
    };
  }

  _onUsernameUpdate(e) {
    this.setState({
      "username": e.target.value
    });
  }

  _onPasswordUpdate(e) {
    this.setState({
      "password": e.target.value
    });
  }

  render() {
    return (
      <div className="login-page">
        <Card className="login-page-card">
          <CardContent>
            <Typography gutterBottom={true} variant="h6" align="left">Login to Fundraiser 9000</Typography>
            <Typography
              gutterBottom={true}
              variant="h9"
              color={"red"}
              align="left"
              visibility={this.state.showErrorMessage ? "visible" : "hidden"}
            >Your credentials are incorrect.</Typography>

            <Input
              className="login-page-username"
              onChange={(e)=>this._onUsernameUpdate(e)}
              type="text"
              placeholder="Username"
              value={this.state.username}
              readOnly={this.state.loading}
              sx={{marginBottom: "40px"}}
            ></Input>
            <br></br>
            <Input
              className="login-page-password"
              onChange={(e)=>this._onPasswordUpdate(e)}
              type="password"
              placeholder="Password"
              value={this.state.password}
              readOnly={this.state.loading}
            ></Input>
          </CardContent>
          <CardActions>
              <LoadingButton
                onClick={()=>this.tryLogin()}
                className="login-page-login-button"
                variant="contained"
                loading={this.state.loading}>
                  Login
              </LoadingButton>
            </CardActions>
        </Card>
      </div>
    );
  }

  async tryLogin() {
    this.setState({loading: true});

    let loginPayload = JSON.stringify({
      "username": this.state.username,
      "password": this.state.password
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
      this.setState({loading: false, showErrorMessage: true});
    }
    
  
  }
}

export default LoginPage;
