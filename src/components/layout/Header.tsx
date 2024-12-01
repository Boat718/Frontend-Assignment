import { FunctionComponent } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchBar from "../SearchBar";

interface HeaderProps {
  
}
 
const Header: FunctionComponent<HeaderProps> = () => {
  return <Box position="static" sx={{background:"#ffff"}}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <div>
      <Typography variant="h6" component="div" sx={{color:"#002c4a", fontWeight:"700"}}>
        Search
      </Typography>
      <Typography variant="subtitle2" component="div" sx={{color:"#828793"}}>
        Search result: <span style={{color:"#113e59"}}>123</span>
      </Typography>
      </div>
      <Box>
        <SearchBar />
      </Box>
    </Toolbar>
  </Box>;
}
 
export default Header;