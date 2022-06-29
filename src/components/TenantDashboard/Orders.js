import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "27 Jun, 2022",
    "Tom Scholz",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    3024
  ),
  createData(
    1,
    "27 May, 2022",
    "Tom Scholz",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    3024
  ),
  createData(
    2,
    "27 Apr, 2022",
    "Tom Scholz",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    3024
  ),
  createData(
    3,
    "27 Mar, 2022",
    "Tom Scholz",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    3024
  ),
  createData(
    4,
    "27 Feb, 2022",
    "Tom Scholz",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    3024
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent payments</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Property</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align='right'>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align='right'>{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more payments
      </Link>
    </React.Fragment>
  );
}
