import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  const classNameTheme = 'light';
  return <div className={`Layout-${classNameTheme}`}>{children}</div>;
};

export default Layout;
