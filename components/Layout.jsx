import React from 'react';
import NavDrawer from './NavDrawer'; // Adjust the path according to your file structure

const Layout = ({ children }) => {
  return (
    <div>
      <NavDrawer />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
