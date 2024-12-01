const getCellStyle = (column: string, isMobile: boolean) => {
  const baseStyle = {
    fontSize: isMobile ? "13px" : "16px",
  };

  switch (column) {
    case "account":
      return {
        ...baseStyle,
        color: "#4c92fd",
        fontWeight: "600",
        textAlign: "center",
      };
    case "symbol":
    case "noRef":
      return {
        ...baseStyle,
        color: "#002644",
        fontWeight: "600",
        textAlign: "center",
      };
    case "description":
    case "qty":
    case "filledQty":
    case "price":
      return {
        ...baseStyle,
        color: "#002644",
        fontWeight: "400",
      };
    case "operation":
    case "date":
    case "expiration":
    case "status":
      return {
        ...baseStyle,
        color: "#002644",
        fontWeight: "500",
        textAlign: "center",
        alignItems: "center",
        gap: "4px",
      };
    
    case "extRef":
      return {
        ...baseStyle,
        color: "#636a76",
        fontWeight: "600",
      };
    default:
      return baseStyle;
  }
};

export default getCellStyle;