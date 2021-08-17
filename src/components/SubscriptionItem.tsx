import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import GridCard from './GridCard';
import { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from 'firebase';
import 'firebase/firestore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
    },
    buttonbox: {
        padding: theme.spacing(1)
    },
    textbox: {
        padding: '.5em',
        flexGrow: 1,
        verticalAlign: 'top'
    },
    titlebox: {
        fontWeight: "bold"
    }
  }),
);

export type SubscriptionItemProps = {
    item: {
        destination: string,
        source: string,
        period: number,
        owner: string,
        list: {
            [key: string]: number
        }
    },
    docPath: string,
    deleteAlert: ()=>void
}

export default function SubscriptionItem(props: SubscriptionItemProps) {
    const classes = useStyles();

    // Delete confirmation dialog
    const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => {
        setDeleteOpen(true);
    };
    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };
    const handleCancelAndClose = () => {
        handleDeleteClose();
        props.deleteAlert();
        firebase.firestore().doc(props.docPath).delete()
    }

    return (
        <GridCard>
            <Typography variant="h6" className={classes.title}>
                <Box className={classes.titlebox}>
                    {props.item.destination}
                </Box>
            </Typography>
            <Box className={classes.textbox}>
                <Typography variant="body2">
                    Delivers from {props.item.source} every {props.item.period} days: {Object.entries(props.item.list).filter(entry=> {return Number(entry[1])>0}).map(entry=>{return entry[1]+'x '+entry[0]}).join(", ")}
                </Typography>
            </Box>
            <Box className={classes.buttonbox}>
                <Button variant="contained" color="primary" onClick={()=>{}}>
                    Modify
                </Button>
            <Box className={classes.buttonbox}></Box>
                <Button variant="contained" color="secondary" onClick={handleDeleteOpen}>
                    Delete
                </Button>
            </Box>
            <Dialog
                open={deleteOpen}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Delete Subscription for ${props.item.destination}?`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This subscription will be cancelled immediately. Any produce already paid for will be shipped, and billing will stop.
                        </DialogContentText>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="inherit">
                        Cancel
                    </Button>
                    <Button onClick={handleCancelAndClose} color="secondary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </GridCard>
    )
}