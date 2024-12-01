import { Box, Button, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
interface ExpandDetailProps {
  
}
 
const ExpandDetail: FunctionComponent<ExpandDetailProps> = () => {

  return ( 
  <Box sx={{ padding: 2, backgroundColor: "#f9fdfe", borderRadius:"5px" }}>
    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"3px solid #eff0f0"}}>
      <Box sx={{display:"flex", marginBottom:"10px"}}>
        <Typography sx={{color:"#2a82fd", fontWeight:"600"}}>FIRSTNAME LASTNAME (10130ZA - US Margin)</Typography>
        <Button
          sx={{ borderRadius: "20px", width: "200px", textTransform: "none", background:"ffff", border:"0.5px solid black", color:"#1c74c6", marginLeft:"20px" }}
        >
          Full review details
          <LaunchSharpIcon />
        </Button>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ borderRadius: "20px", width: "120px", textTransform: "none", background:"#1771c5", marginRight:"25px" }}
        >
          ACCEPT
        </Button>
        <Button
         sx={{ borderRadius: "20px", width: "120px", textTransform: "none", background:"ffff", border:"0.5px solid red", color:"red", marginRight:"80px" }}
        >
          Reject
          <KeyboardArrowDownSharpIcon />
        </Button>
      </Box>
    </Box>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // Creates 4 equal columns
        gap: "16px", // Adds space between the columns and rows
        marginTop: "10px",
      }}
    >
      <Box>
        <Typography>
          Net Amount: <span style={{ fontWeight: "600" }}>1152.95 USD</span>
        </Typography>
      </Box>
      <Box>
        <Typography>
          Price: <span style={{ fontWeight: "600" }}>135.00</span>
        </Typography>
      </Box>
      <Box>
        <Typography>
          Exchange Rate: <span style={{ fontWeight: "600" }}>1.3357</span>
        </Typography>
      </Box>
      <Box>
        <Typography>
          O/S Limit: <span style={{ fontWeight: "600" }}>140.0</span>
        </Typography>
      </Box>
      <Box>
        <Typography>
          Reference Number: <span style={{ fontWeight: "600" }}>1234567890</span>
        </Typography>
      </Box>
      <Box>
        <Typography>
          Date/Time: <span style={{ fontWeight: "600" }}>2023/01/04 03:05:43</span>
        </Typography>
      </Box>
      <Box>
        <Typography>
          Telephone: <span style={{ fontWeight: "600" }}>000-000-0000</span>
        </Typography>
      </Box>
      <Box>
        <Typography>
          User ID: <span style={{ fontWeight: "600" }}>12344321</span>
        </Typography>
      </Box>
    </Box>
    <Box sx={{background:"#f4f6f7", borderRadius:"5px", marginTop:"10px"}}>
      <Typography sx={{color:"#000b2d", fontWeight:"500", padding:"15px", fontSize:"20px"}}>Warning(s)</Typography>
      <Box sx={{marginTop:"-20px", fontWeight:"400", fontSize:"16px", paddingBottom:"10px"}}>
        <ul>
          <li>To trade this security in this account, a currency conversion will be made at the current rate.</li>
          <li>A similar order has already been submitted.</li>
          <li>Your transaction will be processed the following business day.</li>
          <li>It is not possible to calculate the buying power of this order.</li>
          <li>A cancellation will not be possible during business hours on market orders. You can call a representative for more information.</li>
          <li>For the above-mentioned reason(s), your order will be processed by one of our representatives.          </li>        
        </ul>
      </Box>
    </Box>
    
  </Box>
  );
}
 
export default ExpandDetail;