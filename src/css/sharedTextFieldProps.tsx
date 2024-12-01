import { TextFieldProps } from "@mui/material";

const sharedTextFieldProps: Partial<TextFieldProps>  = {
  size: "small",
  sx: {
    width: "200px", height: "40px", borderRadius: "8px", borderColor:"#bfbfbf", color:"#14415b",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius:"8px",
        borderColor: "none",
      },
      "&:hover fieldset": {
        borderColor: "none", 
      },
      "&.Mui-focused fieldset": {
        borderColor: "none", 
      },
    },
    "& .MuiInputBase-root.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "none", 
      },
    },
    "& .MuiInputBase-input": {
        color: "#14415b"},
  }
};

export default sharedTextFieldProps;