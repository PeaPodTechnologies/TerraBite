import { useEffect, useState, FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import  "firebase/firestore";
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

import SubscriptionItem, { SubscriptionItemProps } from './SubscriptionItem';
import NewSubscription from './NewSubscription';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '80vw',
        justifyContent: "center"
    },
    header: {
        padding: '2%',
        width: '100%',
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
                return ({item: doc.data(), docPath: doc.ref.path} as SubscriptionItemProps)
            });
            setGridData(data);
        })
        
    }, [user]);

    // Delete confirmation snackbar
    const [deleteAlert, setDeleteAlert] = useState(false);
    const handleDeleteAlertOpen = () => {setDeleteAlert(true)};
    const handleDeleteAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setDeleteAlert(false);
    };

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
                        return (<SubscriptionItem item={item.item} docPath={item.docPath} deleteAlert={handleDeleteAlertOpen}/>);
                    })}
                    <NewSubscription/>
                </Grid>
                <Snackbar open={deleteAlert} autoHideDuration={6000} onClose={handleDeleteAlertClose}>
                    <Alert onClose={handleDeleteAlertClose} severity="success">
                        Subscription cancelled!
                    </Alert>
                </Snackbar>
            </>)}
        </div>
    );
}
export default SubscriptionGrid;