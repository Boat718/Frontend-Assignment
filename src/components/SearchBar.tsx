import { FunctionComponent, useRef, useState } from "react";
import { TextField, Button, Box, Typography, MenuItem, colors, TextFieldProps, InputLabel, Select, SelectChangeEvent } from "@mui/material";
import { CalendarIcon, DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Dayjs } from "dayjs";
interface SearchBarProps {
  
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
 
const SearchBar: FunctionComponent<SearchBarProps> = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState<string | null>("waiting");
  const [period, setPeriod] = useState<string | null>("transmission");

  const isEndDateDisabled = (date: Dayjs) => {
    if (!startDate) return false;
    return date.isBefore(startDate, "day"); // Disable dates before or same as start date
  };

  const handleSearch = () => {
    console.log("Searching from:", startDate?.format('DD/MM/YYYY'), "to:", endDate?.format('DD/MM/YYYY'));
    console.log("Status from:", status, "to:", period);
  };
  
  const sharedTextFieldProps: Partial<TextFieldProps>  = {
    size: "small",
    sx: {
      width: "200px", height: "40px", borderRadius: "8px", borderColor:"#bfbfbf", color:"#14415b",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius:"8px",
          borderColor: "none", // Default border color
        },
        "&:hover fieldset": {
          borderColor: "none", // Prevent hover effect
        },
        "&.Mui-focused fieldset": {
          borderColor: "none", // Prevent focus effect
        },
      },
      "& .MuiInputBase-root.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "none", // Prevent focus outline color change
        },
      },
      "& .MuiInputBase-input": {
          color: "#14415b"},
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", gap: "1rem", alignItems: "center", color:"#336890" }}
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
            <MenuItem value={"transmission"}>Transmission</MenuItem>
            <MenuItem value={"delivery"}>Delivery</MenuItem>
            <MenuItem value={"payment"}>Payment</MenuItem>
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
            <MenuItem value={"waiting"}>Waiting</MenuItem>
            <MenuItem value={"complete"}>Complete</MenuItem>
            <MenuItem value={"inProgress"}>In Progress</MenuItem>

        </Select>

        <Typography variant="subtitle2">From</Typography>
        <DatePicker
          sx={{color:"#14415b"}}
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          slots={{
            openPickerIcon: CalendarMonthOutlinedIcon, // Replace the default calendar icon
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
            openPickerIcon: CalendarMonthOutlinedIcon, // Replace the default calendar icon
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
          sx={{ borderRadius: "20px", width: "120px", textTransform: "none", background:"#1771c5" }}
        >
          Search
        </Button>
      </Box>
    </LocalizationProvider>
  );
};
 
export default SearchBar;