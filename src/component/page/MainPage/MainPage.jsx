import Grid from "@mui/material/Grid";
import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {API} from "aws-amplify";
import GroupsCount from '../../tourney/GroupsCount';
import TeamsPerGroup from '../../tourney/TeamsPerGroup';
import Players from "../../tourney/Players";
import TourneyTable from "../../tourney/TourneyTable";
import LeaguesFilter from "../../tourney/LeaguesFilter";
import {
    DEFAULT_GROUPS_COUNT, DEFAULT_TEAMS_PER_GROUP_COUNT, EUROPEAN_LEAGUES
} from "../../../config/config";

export default function MainPage(prop) {
    const [tourneySettings, setTourneySettings] = useState({
        groups_count: DEFAULT_GROUPS_COUNT,
        teams_per_group: DEFAULT_TEAMS_PER_GROUP_COUNT,
        leagues: EUROPEAN_LEAGUES,
        users: [
            {
                user_id: "Player 1",
                teams_count: DEFAULT_GROUPS_COUNT * DEFAULT_TEAMS_PER_GROUP_COUNT / 2,
                required_teams: []
            },
            {
                user_id: "Player 2",
                teams_count: DEFAULT_GROUPS_COUNT * DEFAULT_TEAMS_PER_GROUP_COUNT / 2,
                required_teams: []
            },
        ]
    });
    const [tourney, setTourney] = useState({groups: []});
    const [openDialogTable, setOpenDialogTable] = useState(false)

    prop.users.emailById = function (id) {
        const user = this.filter(user => user.Username === id)[0]
        return user.Attributes.filter(attribute => attribute.Name === "email")[0].Value
    };
    return (
        <Grid container spacing={6} >
            <Grid item >
                <GroupsCount tourneySettings={tourneySettings} setTourneySettings={setTourneySettings} />
            </Grid>
            <Grid item >
                <TeamsPerGroup tourneySettings={tourneySettings} setTourneySettings={setTourneySettings} />
            </Grid>
            <Grid item >
                <LeaguesFilter tourneySettings={tourneySettings} setTourneySettings={setTourneySettings} />
            </Grid>
            <Grid item container spacing={2} >
                <Players tourneySettings={tourneySettings} setTourneySettings={setTourneySettings} teams={prop.teams} />
            </Grid>
            <Grid item >
                <TourneyTable open={openDialogTable} setOpenDialogTable={setOpenDialogTable} tourney={tourney} />
                <Stack spacing={2} direction="row" >
                    <Button variant="contained" onClick={() => {
                        API.post("Teams", "/tourneys", { body: tourneySettings }).then(response => {
                            const tourney = response[0];
                            setTourney(tourney);
                            setOpenDialogTable(true);
                        })
                    }} >Generate tourney</Button>
                </Stack>
            </Grid>
        </Grid>
    );
}
