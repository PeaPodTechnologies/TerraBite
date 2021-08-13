import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Theme } from '@material-ui/core';
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
interface ProduceDropdownProps {
    label: string;
    option: string;
    quantity: number;
    updateSelection: (option: string, quantity: number) => void;
}

// Choices
const maxquantity = 20;
const quantitychoices: number[] = [];
for(var i = 0; i <= maxquantity; i++){
    quantitychoices.push(i);
}

// Component
const ProduceDropdown : React.FC<ProduceDropdownProps> = (props: ProduceDropdownProps) => {
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>, option: string) => {
        props.updateSelection(option, event.target.value as number);
    };
    
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                {props.label}
            </InputLabel>
            <Select defaultValue={`${quantitychoices[0]}`} onChange={(event)=>{handleChange(event, props.option)}} displayEmpty className={classes.selectEmpty}>
                {quantitychoices.map((index)=>{
                    return (
                        <MenuItem key={index} value={index}>{index}</MenuItem>
                    )
                })}
            </Select>
            <FormHelperText>Units per Day</FormHelperText>
        </FormControl>
    )
}

export default ProduceDropdown;