import React, { useState} from 'react';
import { Container, Button, TextField } from "@mui/material";
import { Team } from '../types/Team';

const UpdateTeam: React.FC = ( ) => {
  const [editedTeam, setEditedTeam] = useState<Team>({
    id: 0,
    badgeUrl: '',
    name: '',
    nickname: '',
    founded: 0,
    groundName: '',
    groundCapacity: 0,
    country: '',
    league: '',
    coach: ''
  })

  const handleInputChange = (e: any) => {
    const { name, value} = e.target;
    setEditedTeam((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }


  const handleEditTeam = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditedTeam({
      id: 0,
      badgeUrl: '',
      name: '',
      nickname: '',
      founded: 0,
      groundName: '',
      groundCapacity: 0,
      country: '',
      league: '',
      coach: ''
    })
  }

  return (
    <Container>
      <form
        onSubmit={handleEditTeam}
        method='POST'
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
            margin: 'auto'
        }}
      >
        <TextField 
            label="Team name"
            type="name"
            name="name"
            value={editedTeam.name}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="Team nickname"
            type="nickname"
            name="nickname"
            value={editedTeam.nickname}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="Founded"
            type="founded"
            name="founded"
            value={editedTeam.founded}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="Ground name"
            type="groundName"
            name="groundName"
            value={editedTeam.groundName}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="Ground capacity"
            type="groundCapacity"
            name="groundCapacity"
            value={editedTeam.groundCapacity}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="Country"
            type="country"
            name="country"
            value={editedTeam.country}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="League"
            type="league"
            name="league"
            value={editedTeam.league}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="Coach"
            type="coach"
            name="coach"
            value={editedTeam.coach}
            onChange={handleInputChange}
            sx={{
              margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />
        <TextField
            label="Badge URL"
            type="badgeUrl"
            name="badgeUrl"
            value={editedTeam.badgeUrl}
            onChange={handleInputChange}
            sx={{
                margin: ".25em 0",
                backgroundColor:'white',
                borderRadius: '15px'
            }}
            required
        />       
        <Button sx={{margin: ".25em 0", fontSize: '1em', fontWeight: '600', borderRadius: '15px'}} variant='contained' type='submit'>Update team</Button>
      </form>
    </Container>
      
  )
}

export default UpdateTeam