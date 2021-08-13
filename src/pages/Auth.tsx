// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Box, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

// Configure FirebaseUI
const uiConfig: firebaseui.auth.Config = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/dashboard',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: "flex",
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center"
    },
  }),
);

function Auth() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Box>
    );
}

export default Auth