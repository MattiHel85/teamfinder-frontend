import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, TextField, Divider, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { registerUser } from '../redux/slices/userSlice';
import { SignUpProps } from '../types/props';


const SignUp: React.FC<SignUpProps> = ({handleClose}) => {
    const [ userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicUrl: '',
        isAdmin: false
    })
    const [message, setMessage] = useState<string>(''); 
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;

        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('')
        if (userData.password !== userData.confirmPassword){
            setMessage("Your passwords don't match. Try again.")
        }
        dispatch(registerUser(userData));
        handleClose()
    }

    return (
      <Container>
        {
            message && 
                <Typography sx={{color: 'red', fontSize: '18px'}}>
                    {message}
                </Typography>
        }
        <Typography sx={{margin: '15px 0px'}} variant='h4'>Sign Up</Typography>
        <Typography sx={{margin: '15px 0px'}} variant='body1'>It's really simple!</Typography>
        <Divider sx={{margin: "10px 0px", color: '#07005D'}} />  
        <form
          method='POST'
          onSubmit={handleSignUp}
          style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
          }}
        >
          <TextField 
              label="First name"
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              sx={{
                  margin: "3px"
              }}
              required
          />
          <TextField 
              label="Last name"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              sx={{
                  margin: "3px"
              }}
              required
          />
          <TextField 
              label="Email address"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              sx={{
                  margin: "3px"
              }}
              required
          />
          <TextField
              label="Password"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              sx={{
                  margin: "3px"
              }}
              required
          />
          <TextField
              label="Confirm password"
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleInputChange}
              sx={{
                  margin: "3px"
              }}
              required
          />
          <TextField
              label="Avatar URL"
              type="text"
              name="profilePicUrl"
              value={userData.profilePicUrl}
              onChange={handleInputChange}
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