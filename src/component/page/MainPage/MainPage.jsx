import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Chip from "@material-ui/core/Chip";

export default function MainPage(prop) {
    const [teamsCount, setTeamsCount] = useState(16)
    const availableTeamsCounts = [4, 8, 16, 32, 64, 128]
    const handleChange = event => setTeamsCount(parseInt(event.target.value))

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" color={"primary"}/>;
    return (
        <Grid container spacing={2} >
            <Grid item >
                <FormControl component="fieldset">
                    <FormLabel >Teams count</FormLabel>
                    <RadioGroup name="teams-count" row value={teamsCount} onChange={handleChange} >
                        {availableTeamsCounts.map((count, i) =>
                            <FormControlLabel key={i} value={count} control={<Radio color="primary" />} label={count} />
                        )}
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item container spacing={4} >
                {prop.players.map((player, i) =>
                    <Grid key={i} item >
                        <TextField
                            required
                            label="Player name"
                            defaultValue={player.name}
                            variant="outlined"
                        />
                        <TextField type="number" label="Teams count" inputProps={{min: 1, max: 4}} defaultValue={player.teamsCount} variant="outlined" />
                        <Autocomplete
                            multiple
                            options={prop.teams}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        checked={selected}
                                    />
                                    {option.name}
                                </React.Fragment>
                            )}
                            renderTags={(tagValue, getTagProps) =>
                                tagValue.map((team, index) => (
                                    <Chip
                                        label={team.name}
                                        {...getTagProps({ index })}
                                        style={{backgroundColor: team.color}}
                                        color={"primary"}
                                    />
                                ))}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label="Required teams" />
                            )}
                        />
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}
