import React, { useState} from 'react';
import { Container, Button, TextField, Divider } from "@mui/material";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { Team } from '../types/Team';
import { addTeamAsync } from '../redux/slices/teamSlice';

const AddTeam: React.FC = ( ) => {
  const [newTeam, setNewTeam] = useState<Team>({
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

  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (e: any) => {
    const { name, value} = e.target;
    setNewTeam((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }


  const handleAddTeam = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newTeam)
    dispatch(addTeamAsync(newTeam))
    setNewTeam({
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
        onSubmit={handleAddTeam}
        method='POST'
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
      >
        <TextField 
            label="Team name"
            type="name"
            name="name"
            value={newTeam.name}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Team nickname"
            type="nickname"
            name="nickname"
            value={newTeam.nickname}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Founded"
            type="founded"
            name="founded"
            value={newTeam.founded}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Ground name"
            type="groundName"
            name="groundName"
            value={newTeam.groundName}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Ground capacity"
            type="groundCapacity"
            name="groundCapacity"
            value={newTeam.groundCapacity}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Country"
            type="country"
            name="country"
            value={newTeam.country}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="League"
            type="league"
            name="league"
            value={newTeam.league}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Coach"
            type="coach"
            name="coach"
            value={newTeam.coach}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <TextField
            label="Badge URL"
            type="badgeUrl"
            name="badgeUrl"
            value={newTeam.badgeUrl}
            onChange={handleInputChange}
            sx={{
                margin: "3px"
            }}
            required
        />
        <Divider sx={{margin: "10px 0px", color: '#07005D'}}>All set?</Divider>       
        <Button sx={{margin: "10px 0px"}} variant='contained' type='submit'>Add team</Button>
      </form>
    </Container>
  )
}

export default AddTeam