import { Card, CardContent, Input, Typography, CardActions } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",

      loading: false,
      showErrorMessage: false
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div className="login-page">
        <Card className="login-page-card">
          <CardContent>
            <Typography gutterBottom={true} variant="h6" align="left">Signup for JARS Fundraiser</Typography>
            <Typography
              gutterBottom={true}
              variant="h9"
              color={"red"}
              align="left"
              visibility={this.state.showErrorMessage ? "visible" : "hidden"}
            >There was a problem setting up your account</Typography>

            <Input
              className="login-page-username"
              onChange={(e)=>this.handleInputChange(e)}
              type="text"
              placeholder="Username"
              value={this.state.username}
              readOnly={this.state.loading}
              name="username"
              sx={{marginBottom: "40px", width: "90%"}}
            ></Input>

            <Input
              className="login-page-password"
              onChange={(e)=>this.handleInputChange(e)}
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              readOnly={this.state.loading}
              sx={{marginBottom: "40px", width: "90%"}}
            ></Input>

            <Input
              className="login-page-password"
              onChange={(e)=>this.handleInputChange(e)}
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              readOnly={this.state.loading}
              sx={{marginBottom: "40px", width: "90%"}}
            ></Input>

            <Input
              className="login-page-password"
              onChange={(e)=>this.handleInputChange(e)}
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              readOnly={this.state.loading}
              sx={{width: "90%"}}
            ></Input>


          </CardContent>
          <CardActions>
              <LoadingButton
                onClick={()=>this.trySignup()}
                className="login-page-login-button"
                variant="contained"
                loading={this.state.loading}>
                  Sign up
              </LoadingButton>
            </CardActions>
        </Card>
      </div>
    );
  }

  async trySignup() {
    this.setState({loading: true});

    let signupPayload = JSON.stringify({
      "username": this.state.username,
      "password": this.state.password,
      "firstName": this.state.firstName,
      "lastName": this.state.lastName
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
  
      response.json();
    } catch (err) {
      this.setState({loading: false, showErrorMessage: true});
    }
    
  
  }
}

export default SignupPage;
