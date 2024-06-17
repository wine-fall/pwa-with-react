import React, {useState} from 'react';
import {PostCardProps} from './post_card.type';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import {ThumbUpAlt, ThumbUpOffAlt, ThumbDownAlt, ThumbDownOffAlt} from '@mui/icons-material';

const PostCard: React.FC<PostCardProps> = ({style}) => {

  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);


  const handleClickPostCard = () => {
    // todo
  };

  return (
    <Card style={style} sx={{width: 345}}>
      <CardActionArea onClick={handleClickPostCard}>
        <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setLiked(!liked)}
          className={`transition-transform duration-200 ${liked ? 'animate-like' : ''}`}
        >
          {liked ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
        </IconButton>
        <IconButton aria-label="share" onClick={() => setDisliked(!disliked)}
          className={`transition-transform duration-200 ${disliked ? 'animate-dislike' : ''}`}
        >
          {disliked ? <ThumbDownAlt /> : <ThumbDownOffAlt />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
