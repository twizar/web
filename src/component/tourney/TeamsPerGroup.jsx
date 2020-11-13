import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import React from "react";

const availableTeamsPerGroup = [4, 8]

export default function GroupsCount(prop) {
    return <FormControl component="fieldset">
        <FormLabel >Teams per group</FormLabel>
        <RadioGroup name="teams-count"
                    row
                    value={prop.tourneySettings.teams_per_group}
                    onChange={event => {
                        prop.setTourneySettings({
                            ...prop.tourneySettings,
                            teams_per_group: parseInt(event.target.value)
                        });
                    }}
        >
            {availableTeamsPerGroup.map((count, i) =>
                <FormControlLabel key={i} value={count} control={<Radio color="primary" />} label={count} />
            )}
        </RadioGroup>
    </FormControl>
}
