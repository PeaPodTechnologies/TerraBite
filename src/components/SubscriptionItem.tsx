import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '18vw',
        minWidth: '200px'
    },
    title: {
        flexGrow: 1
    },
    buttonbox: {
        padding: '.5em'
    },
    textbox: {
        padding: '.5em',
        minHeight: '3.5em',
        maxHeight: '3.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagebox: {
        padding: '1em',
    },
    image: {
        maxWidth: '70%', 
        maxHeight: '70%'
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
    }
}

export default function SubscriptionItem(props: SubscriptionItemProps) {
    const classes = useStyles();

    console.log(props.item)

    return (<div>
        <Paper className={classes.paper} elevation={5}>
            <Typography variant="h6" className={classes.title}>
                <Box className={classes.titlebox}>
                    {props.item.destination}
                </Box>
            </Typography>
            <Box className={classes.textbox}>
                <Typography variant="body2">
                    Delivers from {props.item.source} every {props.item.period} days: {Object.entries(props.item.list).map(entry=>{return entry[1]+'x '+entry[0]}).join(", ")}
                </Typography>
            </Box>
            <Box className={classes.buttonbox}>
                <Button variant="contained" color="primary" onClick={()=>{}}>
                    Manage
                </Button>
            </Box>
        </Paper>
    </div>)
}