import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function RentalCard({ rental }) {
  return (
    // Add more properties after the card action area
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          console.log("clicked");
        }}>
        <CardMedia
          component='img'
          height='140'
          image={rental.image}
          alt='Rental'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {rental.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {rental.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
