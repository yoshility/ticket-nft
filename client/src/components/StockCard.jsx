import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const StockCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../assets/Shibuya.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



// import "./Main.css"

// export const StockCard = (props) => {
//   return (
//     <button className="card">
//       <div>
//         <img src={props.image}  alt="画像" className="card-img" />
//       </div>
//       <h2 className="card-title">{props.name}</h2>
//       <p className="card-txt">{props.desc}</p>
//       <p className="card-price">{props.price} ETH</p>
//       <button className="card-button">購入する</button>
//     </button>
//   );
// }
