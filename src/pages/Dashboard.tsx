// import React from 'react'
// import firebase from 'firebase/app';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Box, Typography } from '@material-ui/core';

import SubscriptionGrid from '../components/SubscriptionGrid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        header: {
            paddingTop: '2%',
            paddingBottom: '1%',
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
        },
        grid: {
            display: "flex",
            justifyContent: "center",
            padding: theme.spacing(3)
        }
    }),
);

export default function Dashboard () {
    const classes = useStyles();

    var items = [];
    for(var i = 1; i < 9; i++){
        items.push({item: {title: `Form ${i}`, content:'This is some placeholder content. This will be replaced with a description for the form.', imageurl: 'https://via.placeholder.com/150'}})
    }
    return (
        <div className={classes.root}>
            <Box className={classes.header} >
                <Typography variant="h4">
                    Manage Subscriptions
                </Typography>
            </Box>
            <Box className={classes.grid}>
                <SubscriptionGrid />
            </Box>
        </div>
    )
}