import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom:25,
    minHeight:300
  },
  media: {
    height: 140,
  },
});

function PostCard({ title, body, click, button }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={click}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          button?
            <Button size="small" onClick={click} color="primary">
              Learn More
            </Button>
            :
            ''
        }

      </CardActions>
    </Card>
  );
}

export default PostCard