import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const {title,body,id} = props.post;


    //  read-more button function
     const readMoreButton = (id) =>{
      history.push(`/post/${id}`)
    }
   
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                         {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                       {body}......
                    </Typography>
                </CardContent>
                <CardActions>
                 
                <Button onClick={() => readMoreButton(id)}  variant="contained" color="secondary">Read More</Button>
          
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;