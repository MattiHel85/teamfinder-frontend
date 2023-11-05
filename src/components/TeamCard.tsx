import React from "react";
import { useNavigate } from "react-router-dom";
import { TeamProps } from "../types/Team";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';



const TeamCard: React.FC<TeamProps> = ({team}) => {
    const navigate = useNavigate()
    const handleNavigateToTeam = () => {
      navigate(`/teams/${team._id}`)
    }

    return(
      <Card 
        onClick={handleNavigateToTeam}
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
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {team.name}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default TeamCard;
