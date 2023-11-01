import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { RootState } from '../redux/slices/rootSlice';
import { logout } from '../redux/slices/authSlice';

const UserProfile: React.FC = () => {
    const dispatch: AppDispatch = useDispatch(); 
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        setTimeout(() => {
          navigate('/');
        }, 100)
      };

    return (  
      <Container> 
        {
            user ? (
                <>
                    <Typography>
                        Signed in as: {user?.firstName} {user?.lastName}  
                    </Typography>
                    <Divider />
                    <Button onClick={handleLogout}>Sign Out</Button>  
                </>
            ) : (
                <>
                    <Typography>
                        You are not signed in.
                    </Typography>
                    <Divider />
                    <Button onClick={() => navigate('/')}>Go to Sign In</Button> 
                </>
            )
        } 
      </Container>
    )
}

export default UserProfile