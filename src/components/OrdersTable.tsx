import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel,useMediaQuery, useTheme } from "@mui/material";
import { FunctionComponent, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PendingSharpIcon from '@mui/icons-material/PendingSharp';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import React from "react";
import ExpandDetail from './ExpandDetail';
import getCellStyle from "../css/cellStyles";
import { useHeaderContext } from "../context/HeaderContext";
import { sortData } from "../utils/sortingData";


const OrdersTable: FunctionComponent = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("date");
  const [clickedRowId, setClickedRowId] = useState<number | null>(null);
  const { headerData} = useHeaderContext();

  const rows = headerData || [];

  const toggleRowExpansion = (id: number) => {
    
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
    setClickedRowId((prev) => (prev === id ? null : id));
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
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
      {rows.length === 0 ? 
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        color: "#828793",
        fontSize: "25px",
        fontWeight: "500",
      }}
    >
      No data available
    </Box>
      :
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
              <TableCell sx={{ border: clickedRowId === row.id && !isMobile ? "none" : "" }}>
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
                  sx={getCellStyle(column, isMobile, clickedRowId === row.id && !isMobile)}
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
              <TableCell sx={{ border: clickedRowId === row.id && !isMobile ? "none" : "" }}><PendingSharpIcon sx={{color:"rgb(110 186 216 / 87%)"}} /></TableCell>
            </TableRow>
            {expandedRows.includes(row.id)  && (
              <TableRow>
                <TableCell colSpan={14} sx={{paddingTop: 0}}>
                    <ExpandDetail row={row} isMobile={isMobile}/>
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>}
    </TableContainer>
  );
};

export default OrdersTable;