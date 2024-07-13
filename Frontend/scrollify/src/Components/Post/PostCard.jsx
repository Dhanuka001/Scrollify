import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const PostCard = () => {
  return (
    <Card className="">
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Dhanuka"
        subheader="@dhanuka"
      />
     
     <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2024/03/28/15/59/life-8661191_1280.jpg"
        alt="Paella dish"
      />

    <CardContent>
        <Typography variant="body2" color="text.secondary">
          life is beautiful
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
       <div>
        <IconButton>
            {true?<FavoriteIcon/>:<FavoriteBorder/>}

        </IconButton>

       </div>
      </CardActions>

    </Card>
  )
}

export default PostCard
