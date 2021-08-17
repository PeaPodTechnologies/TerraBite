import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import SignupForm, { ProduceSelection } from './SignupForm';
import GridCard from './GridCard';
import SuccessAlert from './SuccessAlert';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
    },
  }),
);

export default function NewSubscription(props: any) {
    const classes = useStyles();
    const user = useAuth()?.uid;

    // Dialog box open state
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const placeOrderAndClose = (selection: {[key: string]: ProduceSelection}, period: number, address: string): void => {
        // Place the order here
        handleClose()
        const list = Object.fromEntries(Object.entries(selection).map(entry=>{
            return [entry[0], entry[1].quantity]
        }))
        firebase.firestore().collection('subscriptions').add({
            owner: user,
            destination: address,
            period: period,
            source: "Cluster Farm 63",
            list: list 
        }).then(()=>{
            setAlert(true);
        })
    }

    const [alert, setAlert] = useState(false);

    const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };

    return (
        <>
            <GridCard>
                <Box>
                    <Button variant="contained" color="primary" className={classes.button} startIcon={<AddCircleOutlineIcon fontSize="large" />} onClick={handleClickOpen}>
                        New
                    </Button>
                </Box>
            </GridCard>
            <SignupForm openState={open} placeOrderAndClose={placeOrderAndClose} handleClose={handleClose} />
            <SuccessAlert openState={alert} onClose={handleAlertClose}>Order placed successfully!</SuccessAlert>
        </>
    )
}