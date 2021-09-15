import { FC } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Box, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20vh'
        },
    })
);

const Auth:FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Box>
    );
};

export default Auth;