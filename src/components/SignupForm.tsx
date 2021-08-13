import React from 'react'
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext';
import firebase from 'firebase/app'
import 'firebase/firestore'

import ProduceDropdown from './ProduceDropdown';

const styles = (theme: Theme) => createStyles({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    checklistbox: {
        minWidth: '30vw'
    },
})

const useStyles = makeStyles(styles);

// ===== Signup Dialog =====

// Props
interface SignupProps {
    openState: boolean;
    placeOrderAndClose: (options: {[key: string]: number}, period: number, address: string)=>void; 
    handleClose: ()=>void;
}

export default function SignupForm(props: SignupProps) {
    const classes = useStyles();

    const [selection, setSelection] = useState<{[key: string]: number}>({});
    const user = useAuth();
    useEffect(() => {
        firebase.firestore().collection('options').get().then(docs=>{
            const data = docs.docs.map(doc=>{
                return [doc.id, 0]
            });
            setSelection(Object.fromEntries(data));
        })
    }, [user]);
    
    const updateSelection = (label: string, quantity: number) => {
        const newstate = Object.fromEntries(Object.entries(selection));
        newstate[label] = quantity;
        setSelection(newstate);
    };

    const incomplete = Object.values(selection).every(value=>{return value === 0});
    return (
        <div>
            <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.openState}>
            <Box className={classes.checklistbox}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    Create a New Subscription
                </DialogTitle>
                <DialogContent dividers>
                <FormLabel component="legend">Select Produce:</FormLabel>
                <FormGroup>
                    {Object.entries(selection).map((option, index)=>{
                        return (
                            <ProduceDropdown key={index} option={option[0]} label={option[0].charAt(0).toUpperCase()+option[0].substring(1)} quantity={option[1]} updateSelection={updateSelection}/>
                        )
                    })}
                </FormGroup>
                </DialogContent>
                </Box>
                <DialogActions>
                    <Button autoFocus onClick={()=>{props.placeOrderAndClose(selection, 7, "no address yet")}} color="primary" disabled={incomplete}>
                    Place Recurring Order
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

// Dialog Stuff

interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}
  
const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);