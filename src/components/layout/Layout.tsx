import React, { FunctionComponent } from 'react';
import Header from './Header';

const Layout: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
