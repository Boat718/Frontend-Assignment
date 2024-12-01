import { FunctionComponent } from "react";
import SearchBar from "../components/SearchBar";
import OrdersTable from "../components/OrdersTable";

interface OrdersPageProps {
  
}
 
const OrdersPage: FunctionComponent<OrdersPageProps> = () => {
  return ( <div>
    <OrdersTable />
  </div> );
}
 
export default OrdersPage;