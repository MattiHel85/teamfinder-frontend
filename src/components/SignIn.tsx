import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInProps } from '../types/props';
import { Container, Button, TextField, Divider } from "@mui/material";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { loginUser } from '../redux/slices/authSlice';

const SignIn: React.FC<SignInProps> = ( {handleOpen}) => {
  const [signInData, setSignInData] = useState({
    email: '',
    password:''
  })

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInChange = (e: any) => {
    const { name, value} = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email, password } = signInData;
      await dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error('Signin failed:', error);
    }
    navigate('/profile');
  }

  return (
    <Container>
      <form
        onSubmit={handleSignIn}
        method='POST'
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
            value={signInData.email}
            onChange={handleSignInChange}
            sx={{
                margin: "3px"
            }}
        />
        <TextField
            label="Password"
            type="password"
            name="password"
            value={signInData.password}
            onChange={handleSignInChange}
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