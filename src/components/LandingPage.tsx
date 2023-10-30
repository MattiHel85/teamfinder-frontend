import React, { useState} from "react";
import {Container, Box, Typography, Modal} from "@mui/material"
import logo from '../assets/futistr-logo.png'
import SignIn from "./SignIn"
import SignUp from "./SignUp";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
  };

const LandingPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'center',
                alignItems:'center'
            }}
        >
            <Box
                sx={{
                    margin: '2em',
                    backgroundColor: 'white',
                    padding: '100px',
                    borderRadius: '15px',
                    width: '400px',
                    height: '425px'
                }}
            >
                <img src={logo} alt="Logo" style={{width: '350px'}}/>
                <Typography
                    sx={{
                        color: '#07005D',
                        fontWeight: 600,
                        fontSize: '25px'
                    }}
                >
                    YOUR FOOTBALL SOCIAL!
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    margin: '2em',
                    backgroundColor: 'white',
                    fontWeight: 600,
                    padding: '30px',
                    borderRadius: '15px',
                    width: "400px",
                    height: "425px"
                }}
            >
                <SignIn handleOpen={handleOpen} />
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <SignUp />
                </Box>
            </Modal>
        </ Container>
    )
}

export default LandingPage;