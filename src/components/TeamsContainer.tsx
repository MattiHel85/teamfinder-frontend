import React, { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/slices/rootSlice";
import { fetchTeamsAsync } from "../redux/slices/teamSlice";
import { Team } from "../types/Team";
import TeamCard from "./TeamCard";
import {Container, Typography} from "@mui/material"


const TeamsContainer: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const {teams, loading, error} = useSelector((state: RootState) => state.teams);

    useEffect(() => {
      dispatch(fetchTeamsAsync())
    }, [dispatch])

    if(loading){
      return <Typography
        sx={{
          color: 'white',
          fontWeight: 600,
          fontSize: '30px'
        }}
      >
        Loading...
      </Typography>
    }

    if(error){
      return <Typography
        sx={{
          color: 'white',
          fontWeight: 600,
          fontSize: '30px'
        }}
      >
        Error: {error}
      </Typography>
    }
    return (
      <>
        <Typography
          sx={{
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: '15em'
          }}
        >
          Teams
        </Typography>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
        {
          teams && teams.map((team: Team) =>
            <TeamCard team={team}/>
          )
        }
        </ Container>
      </>
    )
}

export default TeamsContainer;