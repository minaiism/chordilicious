import React from 'react';
import { makeStyles } from '@material-ui/core';

const Favorites = (props) => {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        img:{
            width: '80%',
            height: '80%',
        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf3MbGlHM3bsMhmb2Ao5repTleZu7_vSgQrYg4nU-chXK8lxhe8HnRqdLGt0_6HKGJfjAIQuF6yEw9GIb_PAHy2xz8J3.jpg?r=c53" className={classes.img} alt="favorites"/>
        </div>
    );
};

export default Favorites;
