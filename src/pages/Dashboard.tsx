import { FC } from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import SubscriptionGrid from '../components/SubscriptionGrid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        header: {
            paddingTop: '2%',
            paddingBottom: '1%',
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
        },
        grid: {
            display: 'flex',
            justifyContent: 'center',
            padding: theme.spacing(3)
        }
    }),
);

const Dashboard:FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.header} >
                <Typography variant='h4'>
                    Manage Subscriptions
                </Typography>
            </Box>
            <Box className={classes.grid}>
                <SubscriptionGrid />
            </Box>
        </div>
    );
};

export default Dashboard;