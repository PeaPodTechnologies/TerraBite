import { useEffect, useState, FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import  "firebase/firestore";

import SubscriptionItem, { SubscriptionItemProps } from './SubscriptionItem';
import NewSubscription from './NewSubscription';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        justifyContent: "center"
    },
    header: {
        padding: '2%',
        minWidth: '90vw',
        textAlign: 'center'
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
        firebase.firestore().collection('subscriptions').where('owner', '==', user?.uid).onSnapshot(snapshot=>{
            const data = snapshot.docs.map(doc=>{
                return ({item: doc.data()} as SubscriptionItemProps)
            });
            setGridData(data);
        })
        
    }, [user]);

    return (
        <div>
            {gridData === undefined ? (<CircularProgress/>) : (<>
                {gridData.length === 0 ? (
                    <Box className={classes.header}>
                        <Typography variant="h6">
                            No subscriptions found for {user?.displayName}!
                        </Typography>
                    </Box>
                ) : (<></>)}
                <Grid container spacing={3} className={classes.root}>
                    {gridData.map((item, index) => {
                        return (<Grid item key={index}><SubscriptionItem item={item.item}/></Grid>);
                    })}
                    <Grid item><NewSubscription/></Grid>
                </Grid>
            </>)}
        </div>
    );
}
export default SubscriptionGrid;