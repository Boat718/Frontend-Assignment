export interface MockData {
  id: number;
  account: string;
  operation: string;
  symbol: string;
  description: string;
  qty: number;
  filledQty: number;
  price: number;
  status: "Waiting" | "Complete" | "In Progress";
  date: string; // Format: "YYYY/MM/DD HH:mm:ss"
  expiration: string; // Format: "YYYY/MM/DD HH:mm:ss"
  noRef: string;
  extRef: string;
  period: "Transmission" | "Delivery" | "Payment";
  data: {
    firstName: string;
    lastName: string;
    netAmount: number;
    price: number;
    exchangeRate: number;
    osLimit: number;
    referenceNumber: string;
    dateTime: string; // Format: "YYYY/MM/DD HH:mm"
    telephone: string; // Format: "XXX-XXX-XXXX"
    userId: string;
  };
}
