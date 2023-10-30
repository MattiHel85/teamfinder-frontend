import React from 'react';
import { SignInProps } from '../types/props';
import { Container, Button, TextField, Divider } from "@mui/material";

const SignIn: React.FC<SignInProps> = ( {handleOpen}) => {
  return (
    <Container>
      <form
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
      >
        <TextField 
            label="Email address"
            type="email"
            name="email"
            sx={{
                margin: "3px"
            }}
        />
        <TextField
            label="Password"
            type="password"
            name="password"
            sx={{
                margin: "3px"
            }}
        />
        <Button sx={{margin: "10px 0px"}} variant='contained' type='submit'>Log in</Button>
        <Button sx={{margin: "10px 0px"}} type='submit'>Forgotten password?</Button>
        <Divider sx={{margin: "10px 0px", color: '#07005D'}}>No account?</Divider>        
        <Button sx={{margin: "10px 0px"}} variant='contained' color='success' onClick={handleOpen}>Create new account</Button>
      </form>
    </Container>
  )
}

export default SignIn