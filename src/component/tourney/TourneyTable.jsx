import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";

export default function TourneyTable(prop) {

    return <Dialog
        open={prop.open}
        fullWidth={ true }
        maxWidth={"md"}
        keepMounted
    >
        <DialogTitle>Tourney Table</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} >
               {prop.tourney.groups.map((group, i) => {
                   return (
                       <Grid item key={i} >
                           <TableContainer component={Paper}>
                               <Table sx={{ minWidth: 250 }}  aria-label="simple table">
                                   <TableHead>
                                       <TableRow>
                                           <TableCell>{group.name.toUpperCase()}</TableCell>
                                       </TableRow>
                                   </TableHead>
                                   <TableBody>
                                       {group.team_slots.map(team_slot => (
                                           <TableRow
                                               key={team_slot.team.name}
                                               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                           >
                                               <TableCell component="th" scope="row">
                                                   {team_slot.team.name} [{team_slot.user_id}]
                                               </TableCell>
                                           </TableRow>
                                       ))}
                                   </TableBody>
                               </Table>
                           </TableContainer>
                       </Grid>
                   )
               })}
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {prop.setOpenDialogTable(false)}} >OK</Button>
        </DialogActions>
    </Dialog>
}
