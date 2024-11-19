import * as React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "wohnort", label: "Wohnort", minWidth: 100 },
  {
    id: "alter",
    label: "Alter",
    minWidth: 20,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "mail",
    label: "E-Mail",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, wohnort, alter, mail) {
  return { name, wohnort, alter, mail };
}

const rows = [
  createData("Peter Lustig", "Bonn", 53, "peter.lustig@web.de"),
  createData("Anne Kante", "Köln", 23, "anne.kante@web.de"),
  createData("Tom Marten", "Bonn", 35, "anne.kante@web.de"),
  createData("Peter Lustig", "Bonn", 53, "peter.lustig@web.de"),
  createData("Anne Kante", "Köln", 23, "anne.kante@web.de"),
  createData("Tom Marten", "Bonn", 35, "anne.kante@web.de"),
  createData("Peter Lustig", "Bonn", 53, "peter.lustig@web.de"),
  createData("Anne Kante", "Köln", 23, "anne.kante@web.de"),
  createData("Tom Marten", "Bonn", 35, "anne.kante@web.de"),
  createData("Peter Lustig", "Bonn", 53, "peter.lustig@web.de"),
  createData("Anne Kante", "Köln", 23, "anne.kante@web.de"),
  createData("Tom Marten", "Bonn", 35, "anne.kante@web.de"),
  createData("Peter Lustig", "Bonn", 53, "peter.lustig@web.de"),
  createData("Anne Kante", "Köln", 23, "anne.kante@web.de"),
  createData("Tom Marten", "Bonn", 35, "anne.kante@web.de"),
  createData("Peter Lustig", "Bonn", 53, "peter.lustig@web.de"),
  createData("Anne Kante", "Köln", 23, "anne.kante@web.de"),
  createData("Tom Marten", "Bonn", 35, "anne.kante@web.de"),
];

export default function UserList() {
  return (
    <Grid item xs={12} sm={8}>
      <Typography>
        <h3>ALLE BENUTZER</h3>
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          borderColor: "secondary.main",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableContainer sx={{ height: "30vw" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
}
