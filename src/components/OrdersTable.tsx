import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel,useMediaQuery, useTheme } from "@mui/material";
import { FunctionComponent, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PendingSharpIcon from '@mui/icons-material/PendingSharp';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import React from "react";
import ExpandDetail from './ExpandDetail';
import getCellStyle from "../css/cellStyles";

interface OrdersTableProps {
  
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const visibleColumns = isMobile
    ? ["account", "operation", "symbol", "status"]
    : [
        "account",
        "operation",
        "symbol",
        "description",
        "qty",
        "filledQty",
        "price",
        "status",
        "date",
        "expiration",
        "noRef",
        "extRef",
      ];

  return (
    <TableContainer component={Box}  sx={{ border:"none" }}>
      <Table sx={{ minWidth: 650, border:"none" } }>
        <TableHead>
          <TableRow>
            <TableCell sx={{width:"0%"}} />
            
            {visibleColumns.map((column) => (
              <TableCell key={column} align={column === "status" ? "center" : "left"}>
                <TableSortLabel
                  active={orderBy === column}
                  direction={orderBy === column ? order : "asc"}
                  onClick={() => handleRequestSort(column)}
                  sx={{color:"#336890", fontSize:"15px"}}
                >
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                </TableSortLabel>
                </TableCell>))}
                
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <React.Fragment key={row.id}>
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
                {visibleColumns.map((column) => (
                  <TableCell
                    key={column}
                    align={column === "status" ? "center" : "left"}
                    sx={getCellStyle(column, isMobile)}
                  >
                    {column === "status" ? (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                        }}
                      >
                        <ScheduleSharpIcon sx={{ color: "#4c92fd" }} />
                        {row[column]}
                      </Box>
                    ) : (
                      row[column]
                    )}
                  </TableCell>
                ))}
                <TableCell><PendingSharpIcon sx={{color:"rgb(110 186 216 / 87%)"}} /></TableCell>
              </TableRow>
              {expandedRows.includes(row.id) &&!isMobile && (
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