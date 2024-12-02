# **The requirement**
is to create a web application with ReactJS for user to search and view orders as shown below. 
The user can search the orders by selecting starting date and ending date. The period and status values are fixed 
with a single value of ‘Transmission’ and ‘Waiting’ for the first MVP.  You can design the data model that should be 
returned from the backend service and create the mocked data at frontend for the test. The UI should support 
responsive which will display only the 4 columns of Account, Operation, Symbol and Status for mobile screen.

## **Features**
- **Order Table**: Displays a list of orders in a table format with the ability to sort by various columns such as account, operation, symbol, etc.
- **Expandable Rows**: Each order row can be expanded to show additional details, such as net amount, price, exchange rate, and more.
- **Responsive Design**: The app is fully responsive, optimizing the layout for mobile devices by reducing columns and stacking content vertically.
- **Search Functionality**: Users can filter data based on specific criteria (e.g., status, period, date range).

## **Components**

### **1. Header**
- Displays the title and search filters for the orders.
- Contains buttons for searching.

### **2. OrdersTable**
- Displays a list of orders in a table format.
- Allows sorting and filtering by various columns.
- Displays order details in a responsive table layout.
- On clicking an order, it expands to show additional details (like net amount, exchange rate, etc.).

### **3. ExpandDetail**
- Displays additional details for each order in an expandable row.
- Shows detailed information like **net amount**, **price**, **exchange rate**, and **warnings**.

## **Technologies Used**

- **React**: For building the user interface and components.
- **Material-UI**: For UI components like tables, buttons, and icons.
- **Day.js**: For date handling and comparisons.
- **React Router**: For managing page navigation.
- **Media Queries**: For implementing responsive design.

## **Setup Instructions**

### **Prerequisites**

Make sure you have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).

### **Installation**

1. Clone this repository:
    ```bash
    https://github.com/Boat718/Frontend-Assignment.git
    cd frontend-assignment
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

    This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## **How to Use**

1. **View Orders**: The app initially loads a table with a list of orders.
2. **Expand Row**: Click on the arrow icon in a row to expand it and view additional details about that order.
3. **Search Orders**: Use the search bar to filter orders based on status, period, or date range **(would recommend selecting the start date from August to December 2024, There are more datasets for Waiting status and Transmission period. However there are datasets of any status and period but need to select the right date range ).**
4. **Responsive Design**: Resize your browser or open it on a mobile device to see the app adapt to mobile screens.


