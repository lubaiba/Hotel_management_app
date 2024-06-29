import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

export default function MediaCard({room}:any) {
  const theme=useTheme();
  return (
    <div >
    <Card sx={{ minWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={room.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {room.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{backgroundColor:theme.palette.secondary.main}}>Book Now</Button>
      </CardActions>
    </Card>
    </div>
  );
}
