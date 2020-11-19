import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 320,
    marginBottom: 25
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function UserCard({ name, username, email, click, button }) {

  const classes = useStyles();

  return(
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {username}
        </Typography>
        <Typography variant="body2" component="p">
          {email}
          <br />
        </Typography>
      </CardContent>
      {
        button?
          <CardActions>
            <Button size="small" onClick={click}>Posts</Button>
          </CardActions>
          :
          ''
      }

    </Card>
  )
}

export default UserCard