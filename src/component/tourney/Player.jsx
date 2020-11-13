import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Chip from "@mui/material/Chip";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Box from '@mui/material/Box'
const filterOptions = createFilterOptions({
    stringify: (team) => team.name,
});

export default function Player(prop) {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" color={"primary"}/>;
    const tourney = { ...prop.tourneySettings };

    return <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    ><Paper variant="outlined" >
        <div>
            <TextField
                required
                label="Player name"
                variant="outlined"
                value={tourney.users[prop.playerIndex].user_id}
                onChange={event => {
                    tourney.users[prop.playerIndex].user_id = event.target.value
                    prop.setTourneySettings(tourney);
                }}
            />
        </div>
        <div>
            <Autocomplete
                multiple
                options={prop.teams}
                disableCloseOnSelect
                getOptionLabel={(team) => team.id}
                filterOptions={filterOptions}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                    </li>
                )}
                renderTags={(tagValue, getTagProps) => tagValue.map((team, index) =>
                    <Chip key={index} label={team.name} {...getTagProps({ index })} style={{backgroundColor: team.color}} color={"primary"} />
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Required teams" />
                )}
                onChange={(_, teams) => {
                    const ids = [];
                    teams.map(team => {ids.push(team.id)});
                    tourney.users[prop.playerIndex].required_teams = ids;
                    prop.setTourneySettings(tourney);
                }}
            />
        </div>
    </Paper></Box>

}
