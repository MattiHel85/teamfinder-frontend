import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import UpdateTeam from "./UpdateTeam";
import { Team } from "../types/Team";
import { fetchTeamById } from "../redux/slices/teamSlice";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/slices/rootSlice";



const TeamInfo: React.FC = () => {
    const [update, setUpdate] = useState(false)
    const [team, setTeam] = useState<Team>({
      _id: '',
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
    const dispatch: AppDispatch = useDispatch()
    const {id} = useParams()

    console.log('teamID: ', id)

    useEffect(() => {
      dispatch(fetchTeamById(id))
      const fetchedTeam = useSelector((state: RootState) => state.teams.teams[0])
      console.log('fetchedTeam: ', fetchedTeam)
    }, [dispatch, id])

    return(
      <Card 
        key={team._id}
        sx={{
          width: "30em",
          margin: "2em"
        }}
      >
        <CardMedia 
          sx={{height: 140}}
          image={team.badgeUrl}
        />
        {
          !update ? 
          <>          
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {team.name}
              </Typography>
              <Typography variant='body2'>
                Nickname: {team.nickname}
              </Typography>
              <Typography variant='body2'>
                Founded: {team.founded}
              </Typography>
              <Typography variant='body2'>
                Stadium: {team.groundName}
              </Typography>
              <Typography variant='body2'>
                Capacity: {team.groundCapacity}
              </Typography>
              <Typography variant='body2'>
                Country: {team.country}
              </Typography>
              <Typography variant='body2'>
                League: {team.league}
              </Typography>
              <Typography variant='body2'>
                Coach: {team.coach}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button size='small'>Share</Button>
              <Button size='small' onClick={() => setUpdate(true)}>Update Team</Button>
            </CardActions>
          </> : 
          <>
            <UpdateTeam team={team}/>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button size='small'>Share</Button>
              <Button size='small' onClick={() => setUpdate(false)}>Update Complete</Button>
            </CardActions>
          </>
        }
      </Card>
    )
}

export default TeamInfo;
