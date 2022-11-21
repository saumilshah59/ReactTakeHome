import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function OrderTable(props) {

 const { data } = props;

 return (
    <TableContainer style={{ margin: '10px' }} component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell align="center">Item No</TableCell>
           <TableCell align="center">Order Id</TableCell>
           <TableCell align="center">Type</TableCell>
           <TableCell align="center">Name</TableCell>
           <TableCell align="center">Category</TableCell>
           <TableCell align="center">Description</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((row, key) => (
           <TableRow key={key}>
             <TableCell align="center">{ row.item_number }</TableCell>
             <TableCell align="center">{row.order_id}</TableCell>
             <TableCell align="center">{row.type}</TableCell>
             <TableCell align="center">{row.name}</TableCell>
             <TableCell align="center">{row.category}</TableCell>
             <TableCell align="center">{row.desc}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 );
}