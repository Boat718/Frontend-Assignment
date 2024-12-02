import { FunctionComponent,useState } from "react";
import { Button, Box, Typography, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import dayjs, { Dayjs } from "dayjs";
import sharedTextFieldProps from "../css/sharedTextFieldProps";
import { MockData } from "../types/mockData";

interface SearchBarProps {
  isMobile?: boolean;
  setSearchData : any;
}

 
const SearchBar: FunctionComponent<SearchBarProps> = ({ isMobile, setSearchData   }) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState<string | null>("Waiting");
  const [period, setPeriod] = useState<string | null>("Transmission");

  const isEndDateDisabled = (date: Dayjs) => {
    if (!startDate) return false;
    return date.isBefore(startDate, "day");
  };

  const filterData = (data: MockData[]) => {
    return data.filter((record) => {
      let isValid = true;
      if(status !== record.status) {
        isValid = false;
      }

      if(period !== record.period) {
        isValid = false;
      }

      if(!endDate || !startDate) {
        isValid = false;
      }

      if (endDate && record.expiration && dayjs(record.expiration).isAfter(endDate, "day")) {
        isValid = false;
      }
      if (startDate && record.date && dayjs(record.date).isBefore(startDate, "day")) {
        isValid = false;
      }
      return isValid;
    })
  }

  const isFormValid = () => {
    return startDate && endDate && status && period;
  };

  const handleSearch = async () => {
    const response = await fetch("/mock_data.json");
    const data = await response.json();
    const filteredData = filterData(data);
    setSearchData(filteredData);
  };
  


  
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", gap: "1rem", alignItems: "center", color:"#336890", flexWrap: isMobile ? "wrap" : "nowrap", flexDirection: isMobile ? "column" : "none"}}
      >
        <Typography variant="subtitle2">Period</Typography>
        <Select
            labelId="period-select-label"
            id="period-select"
            value={period!}
            defaultValue={period!}
            onChange={(event: SelectChangeEvent<string>) => setPeriod(event.target.value)}
            sx={sharedTextFieldProps.sx}
          >
            <MenuItem value={"Transmission"}>Transmission</MenuItem>
            <MenuItem value={"Delivery"}>Delivery</MenuItem>
            <MenuItem value={"Payment"}>Payment</MenuItem>
        </Select>

        <Typography variant="subtitle2" >Status</Typography>

        <Select
            labelId="staus-select-label"
            id="status-select"
            value={status!}
            defaultValue={status!}
            onChange={(event: SelectChangeEvent<string>) => setStatus(event.target.value)}
            sx={sharedTextFieldProps.sx}
          >
            <MenuItem value={"Waiting"}>Waiting</MenuItem>
            <MenuItem value={"Complete"}>Complete</MenuItem>
            <MenuItem value={"InProgress"}>In Progress</MenuItem>

        </Select>

        <Typography variant="subtitle2">From</Typography>
        <DatePicker
          sx={{color:"#14415b"}}
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          slots={{
            openPickerIcon: CalendarMonthOutlinedIcon,
          }}
          slotProps={{
            textField: sharedTextFieldProps,
            openPickerIcon:{
              sx: {
                color: "#1973c6",
              }
            }
          }}
        />
        <Typography variant="subtitle2">To</Typography>
        <DatePicker
        sx={{borderRadius:"20px"}}
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          shouldDisableDate={isEndDateDisabled}
          slots={{
            openPickerIcon: CalendarMonthOutlinedIcon,
          }}
          slotProps={{
            textField: sharedTextFieldProps,
            openPickerIcon:{
              sx: {
                color: "#1973c6",
              }
            }
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={!isFormValid()}
          sx={{ borderRadius: "20px", width: "120px", textTransform: "none", background:"#1771c5" }}
        >
          Search
        </Button>
      </Box>
    </LocalizationProvider>
  );
};
 
export default SearchBar;