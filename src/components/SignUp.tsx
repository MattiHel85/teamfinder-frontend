import React from 'react';
import { Container, Button, TextField, Divider, Typography } from "@mui/material";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Typography sx={{margin: '15px 0px'}} variant='h4'>Sign Up</Typography>
      <Typography sx={{margin: '15px 0px'}} variant='body1'>It's really simple!</Typography>
      <Divider sx={{margin: "10px 0px", color: '#07005D'}} />  
      <form
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
      >
        <TextField 
            label="First name"
            type="text"
            name="firstname"
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField 
            label="Last name"
            type="text"
            name="lastname"
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField 
            label="Email address"
            type="email"
            name="email"
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField 
            label="Confirm email address"
            type="email"
            name="confirmemail"
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Password"
            type="password"
            name="password"
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Confirm password"
            type="password"
            name="confirmpassword"
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Avatar URL"
            type="text"
            name="avatarurl"
            sx={{
                margin: "3px"
            }}
            required
        />
        <Divider sx={{margin: "10px 0px", color: '#07005D'}} />     
        <Typography sx={{margin: '15px 0px'}} variant='body2'>By creating an account you agree to our terms & conditions.</Typography>
      <Typography sx={{margin: '15px 0px'}} variant='body2'>You can review these in your account settings.</Typography>
        <Divider sx={{margin: "10px 0px", color: '#07005D'}} />     
        <Button sx={{margin: "10px 0px"}} variant='contained' type='submit'>Create account</Button>
      </form>
    </Container>
  )
}

export default SignUp;