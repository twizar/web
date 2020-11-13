import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import {EUROPEAN_LEAGUES} from "../../config/config";

const label = { inputProps: { 'aria-label': 'Only European leagues' } };

export default function LeaguesFilter(prop) {
    const [checked, setChecked] = React.useState(true);

    return (
        <FormControl component="fieldset">
            <FormLabel >Only European leagues</FormLabel>
            <Switch checked={checked} onChange={(event) => {
                if (event.target.checked) {
                    prop.setTourneySettings({
                        ...prop.tourneySettings,
                        leagues: EUROPEAN_LEAGUES
                    })
                } else {
                    prop.setTourneySettings({
                        ...prop.tourneySettings,
                        leagues: []
                    })
                }

                setChecked(event.target.checked);
            }} {...label} />
        </FormControl>
    );
}
