import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Player from "./Player";
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function Players(prop) {
    return <Card variant="outlined" sx={{p: 2}} >
        <Box>
            <Grid container spacing={1} >
                {prop.tourneySettings.users.map((_, i) => <Grid item key={i} >
                    <Player playerIndex={i} tourneySettings={prop.tourneySettings} setTourneySettings={prop.setTourneySettings} teams={prop.teams} />
                </Grid>)}
            </Grid>
        </Box>
        <Divider variant="middle" sx={{ m: 2 }} />
        <Button startIcon={<AddIcon />} onClick={() => {
            prop.setTourneySettings({
                ...prop.tourneySettings,
                users: [...prop.tourneySettings.users, {
                    user_id: `Player ${prop.tourneySettings.users.length + 1}`,
                    teams_count: 0,
                    required_teams: []
                }],
            })
        }}>
            Add player
        </Button>
    </Card>
}
