import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import React from 'react';

const UsersTable = () => {
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                
            </TableBody>
        </Table>
    </TableContainer>

}