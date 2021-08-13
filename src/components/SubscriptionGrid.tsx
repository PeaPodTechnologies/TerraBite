import { useEffect, useState, FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import  "firebase/firestore";

import SubscriptionItem, { SubscriptionItemProps } from './SubscriptionItem';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '90vw',
        justifyContent: "center"
    },
    header: {
        margin: '1%',
        display: 'flex',
        minWidth: '100vh',
        justifyContent: 'center',
    }
  }),
);

export type SubscriptionGridProps = {
    items?: SubscriptionItemProps[]
};

const SubscriptionGrid : FunctionComponent<SubscriptionGridProps> = (props = {items: undefined}) => {
    const classes = useStyles();

    const [gridData, setGridData] = useState(props.items);
    const user = useAuth();
    useEffect(() => {
        firebase.firestore().collection('subscriptions').where('owner', '==', user?.uid).get().then(docs=>{
            const data = docs.docs.map(doc=>{
                return ({item: doc.data()} as SubscriptionItemProps)
            });
            console.log(data);
            setGridData(data);
        })
    }, [user]);

    return (
        <Grid container spacing={3} className={classes.root}>
            {gridData === undefined ? (<CircularProgress/>) : gridData.length > 0 ? gridData.map(item => {
                return (<Grid item><SubscriptionItem item={item.item}/></Grid>);
            }) : (
            <Box className={classes.header}>
                <Typography variant="h6">
                    No subscriptions found for {user?.displayName}!
                </Typography>
            </Box>
            )}
        </Grid>
    );
}
export default SubscriptionGrid;