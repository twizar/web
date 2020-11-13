import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import React from "react";

const availableGroupsCounts = [2, 4, 8, 16]

export default function GroupsCount(prop) {
    return <FormControl component="fieldset">
        <FormLabel >Groups count</FormLabel>
        <RadioGroup name="teams-count"
                    row
                    value={prop.tourneySettings.groups_count}
                    onChange={event => {
                        prop.setTourneySettings({
                            ...prop.tourneySettings,
                            groups_count: parseInt(event.target.value)
                        });
                    }}
        >
            {availableGroupsCounts.map((count, i) =>
                <FormControlLabel key={i} value={count} control={<Radio color="primary" />} label={count} />
            )}
        </RadioGroup>
    </FormControl>
}
