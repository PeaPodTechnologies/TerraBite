import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';

import SignupForm, { ProduceSelection } from './SignupForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: "column",
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        height: '200px',
        width: '300px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing(1),
    },
  }),
);

export default function NewSubscription(props: any) {
    const classes = useStyles();

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
    }

    return (<div>
        <Paper className={classes.paper} elevation={5}>
            <Box>
                <Button variant="contained" color="primary" className={classes.button} startIcon={<AddCircleOutlineIcon fontSize="large" />} onClick={handleClickOpen}>
                    New
                </Button>
            </Box>
            <SignupForm openState={open} placeOrderAndClose={placeOrderAndClose} handleClose={handleClose} />
        </Paper>
    </div>)
}