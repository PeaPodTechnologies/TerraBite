import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '18em'
    },
  })
)

const GridCard : React.FC = ({children}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={5}>
            {children}
        </Paper>
    )
}

export default GridCard