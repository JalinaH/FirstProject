import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import React from "react";

const UsersTable = ({ rows }) => {
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
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>
              <Button sx={{ margin: "0px 10px" }} onclick={() => {}}>
                Edit
              </Button>
              <Button sx={{ margin: "0px 10px" }} onclick={() => {}}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>;
};
