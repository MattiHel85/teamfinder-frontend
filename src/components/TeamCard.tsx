import React from "react";
import { TeamProps } from "../types/Team";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';



const TeamCard: React.FC<TeamProps> = ({team}) => {

    return(
      <Card 
        key={team.id}
        sx={{
          width: "20em"
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
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default TeamCard;