import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import OrdersPage from './pages/OrdersPage';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
