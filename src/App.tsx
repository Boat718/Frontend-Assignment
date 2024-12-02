import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import OrdersPage from './pages/OrdersPage';
import { HeaderProvider } from './context/HeaderContext';

const App:React.FC = () => (
  <Router>
    <HeaderProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<OrdersPage />} />
        </Routes>
      </Layout>
    </HeaderProvider>
  </Router>
);

export default App;
