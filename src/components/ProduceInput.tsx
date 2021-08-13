import { Theme } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';

// Styles
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(3),
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    })
)

// Props
interface ProduceInputProps {
    label: string;
    option: string;
    quantity: number;
    updateSelection: (option: string, quantity: number) => void;
}

// Component
const ProduceInput : React.FC<ProduceInputProps> = (props: ProduceInputProps) => {
    const handleChange = (event: React.ChangeEvent<{ value: string }>, option: string) => {
        props.updateSelection(option, Number(event.target.value));
    };
    
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <TextField
                type="number"
                label={props.label}
                value={props.quantity}
                onChange={(event)=>{handleChange(event, props.option)}}
                InputLabelProps={{
                    shrink: true,
                }}
                />
            <FormHelperText>Units per Day</FormHelperText>
        </FormControl>
    )
}

export default ProduceInput;