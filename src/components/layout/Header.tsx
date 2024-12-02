import { FunctionComponent,useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import SearchBar from "../SearchBar";
import { useHeaderContext } from "../../context/HeaderContext";
import { MockData } from "../../types/mockData";
 
const Header: FunctionComponent = () => {
  const [searchData, setSearchData] = useState<any>(null);
  const { setHeaderData } = useHeaderContext();

  const handleSearchData = (data: MockData[]) => {
    setSearchData(data);
    setHeaderData(data) 
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Box
      position="sticky"
      top={0}
      sx={{
        background: "#ffff",
        padding: isMobile ? "8px 16px" : "10px 20px",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          gap: isMobile ? 2 : 0,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#002c4a",
              fontWeight: "700",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Search
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{
              color: "#828793",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Search result:{" "}
            <span style={{ color: "#113e59", fontWeight: "600" }}>{searchData?.length > 0 ? searchData?.length: 0}</span>
          </Typography>
        </Box>
        <Box>
          <SearchBar isMobile={isMobile} setSearchData={handleSearchData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;