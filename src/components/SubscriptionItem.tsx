import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import GridCard from './GridCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
        flexGrow: 1
    },
    buttonbox: {
        padding: theme.spacing(1)
    },
    textbox: {
        padding: '.5em',
        height: '4.5em',
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
                <Button variant="contained" color="secondary" onClick={()=>{}}>
                    Delete
                </Button>
            </Box>
        </GridCard>
    )
}