import { Box, Button, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PendingSharpIcon from '@mui/icons-material/PendingSharp';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import React from "react";
import ExpandDetail from './ExpandDetail';

interface OrdersTableProps {
  
}



export function SortedDescendingIcon() {
  return (
    <div>
      <UnfoldMoreIcon className="icon" />
    </div>
  );
}

const OrdersTable: FunctionComponent = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("account");

  const toggleRowExpansion = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const rows = [
    {
      id: 1,
      account: "00000001",
      operation: "Buy",
      symbol: "NA",
      description: "NATIONAL BANK OF CDA",
      qty: 500,
      filledQty: 0,
      price: 526.0,
      status: "Waiting",
      date: "2022/12/08 05:12:36",
      expiration: "2022/12/08 05:12:36",
      noRef: "13830581",
      extRef: "2-XXXXXXX1-1",
    },
    {
      id: 2,
      account: "00000002",
      operation: "Buy",
      symbol: "NA",
      description: "NATIONAL BANK OF CDA",
      qty: 50000,
      filledQty: 0,
      price: 526.0,
      status: "Complete",
      date: "2022/12/08 05:12:36",
      expiration: "2024/12/08 05:12:36",
      noRef: "13830581",
      extRef: "2-XXXXXXX1-1",
    },
    {
      id: 3,
      account: "00000003",
      operation: "Buy",
      symbol: "NA",
      description: "NATIONAL BANK OF CDA",
      qty: 5000000,
      filledQty: 0,
      price: 526.0,
      status: "Waiting",
      date: "2022/12/08 05:12:36",
      expiration: "2022/12/08 05:12:36",
      noRef: "13830581",
      extRef: "2-XXXXXXX1-1",
    },
  ];

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortData = (array: any[], comparator: (a: any, b: any) => number) => {
    const stabilizedArray = array.map((el, index) => [el, index] as [any, number]);
    stabilizedArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedArray.map((el) => el[0]);
  };

  const comparator = (a: any, b: any) => {
    if (a[orderBy] < b[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  };

  const sortedRows = sortData(rows, comparator);

  return (
    <TableContainer component={Box}  sx={{ border:"none" }}>
      <Table sx={{ minWidth: 650, border:"none" } }>
        <TableHead>
          <TableRow>
            <TableCell sx={{width:"0%"}} />
            <TableCell >
              <TableSortLabel
                active={orderBy === "account"}
                direction={orderBy === "account" ? order : "asc"}
                onClick={() => handleRequestSort("account")}
                >Account 
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === "operation"}
                direction={orderBy === "operation" ? order : "asc"}
                onClick={() => handleRequestSort("operation")}
                >Operation
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === "symbol"}
                direction={orderBy === "symbol" ? order : "asc"}
                onClick={() => handleRequestSort("symbol")}
                >Symbol
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "description"}
                direction={orderBy === "description" ? order : "asc"}
                onClick={() => handleRequestSort("description")}
                >Description
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === "qty"}
                direction={orderBy === "qty" ? order : "asc"}
                onClick={() => handleRequestSort("qty")}
                >Qty.
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === "filledQty"}
                direction={orderBy === "filledQty" ? order : "asc"}
                onClick={() => handleRequestSort("filledQty")}
                >FilledQty
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "price"}
                direction={orderBy === "price" ? order : "asc"}
                onClick={() => handleRequestSort("price")}
                >Price
              </TableSortLabel>
            </TableCell>
            <TableCell> <TableSortLabel
                active={orderBy === "status"}
                direction={orderBy === "status" ? order : "asc"}
                onClick={() => handleRequestSort("status")}
              >
                Status
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "date"}
                direction={orderBy === "date" ? order : "asc"}
                onClick={() => handleRequestSort("date")}
                >Date
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "expiration"}
                direction={orderBy === "expiration" ? order : "asc"}
                onClick={() => handleRequestSort("expiration")}
                >Expiration
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "noRef"}
                direction={orderBy === "noRef" ? order : "asc"}
                onClick={() => handleRequestSort("noRef")}
                >No. Ref.
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "extRef"}
                direction={orderBy === "extRef" ? order : "asc"}
                onClick={() => handleRequestSort("extRef")}
                >Ext. Ref.
                </TableSortLabel>
              </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <React.Fragment key={row.id}>
              {/* Main Row */}
              <TableRow>
                <TableCell>
                  <IconButton onClick={() => toggleRowExpansion(row.id)}>
                    {expandedRows.includes(row.id) ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell align="center" sx={{color:"#4c92fd", fontWeight:"600", fontSize:"17px"}}>{row.account}</TableCell>
                <TableCell align="center" sx={{color:"#002644", fontWeight:"500", fontSize:"17px"}}>{row.operation}</TableCell>
                <TableCell align="center" sx={{color:"#002644", fontWeight:"600", fontSize:"17px"}}>{row.symbol}</TableCell>
                <TableCell sx={{color:"#002644", fontWeight:"500", fontSize:"17px"}}>{row.description}</TableCell>
                <TableCell align="center" sx={{color:"#002644", fontWeight:"500", fontSize:"17px"}}>{row.qty}</TableCell>
                <TableCell align="center" sx={{color:"#002644", fontWeight:"500", fontSize:"17px"}}>{row.filledQty}</TableCell>
                <TableCell sx={{color:"#002644", fontWeight:"500", fontSize:"17px"}}>{row.price}</TableCell>
                <TableCell  align="center" >
                  <Box sx={{ color:"#002644", textAlign: "center", display: "flex", alignItems: "center", fontWeight:"500", fontSize:"17px"}}>
                  <ScheduleSharpIcon sx={{color:"#4c92fd"}}/>
                  {row.status}
                  </Box>
                </TableCell>
                <TableCell sx={{color:"#636a76", fontWeight:"600", fontSize:"17px"}}>{row.date}</TableCell>
                <TableCell sx={{color:"#636a76", fontWeight:"600", fontSize:"17px"}}>{row.expiration}</TableCell>
                <TableCell sx={{color:"#002644", fontWeight:"600", fontSize:"17px"}}>{row.noRef}</TableCell>
                <TableCell sx={{color:"#636a76", fontWeight:"600", fontSize:"17px"}}>{row.extRef}</TableCell>
                <TableCell><PendingSharpIcon sx={{color:"rgb(110 186 216 / 87%)"}} /></TableCell>
              </TableRow>
              {/* Expanded Row */}
              {expandedRows.includes(row.id) && (
                <TableRow>
                  <TableCell colSpan={14} sx={{paddingTop: 0}}>
                    <ExpandDetail/>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
