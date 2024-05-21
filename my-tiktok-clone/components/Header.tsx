import React, { useState } from 'react';
import NavDrawer from './NavDrawer'; // Adjust the path according to your file structure

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 px-5 h-[44px] flex justify-between items-center bg-gradient-to-b from-transparent via-transparent to-transparent">
      <div onClick={toggleDrawer} className="text-2xl font-bold text-white cursor-pointer">
        <svg fill="currentColor" font-size="24px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M5 11a1 1 0 0 1 1-1h36a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2Zm0 12a1 1 0 0 1 1-1h36a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2Zm1 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h36a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6Z"></path></svg>
      </div>
      <div className="text-2xl text-white">
        <svg fill="currentColor" font-size="24px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M21.26 7a15.26 15.26 0 1 0 0 30.53 15.26 15.26 0 0 0 0-30.53ZM2 22.26A19.26 19.26 0 1 1 36.23 34.4l9.65 9.66c.3.29.3.76 0 1.06l-1.76 1.76c-.3.3-.77.3-1.06 0l-9.66-9.65A19.26 19.26 0 0 1 2 22.27Z"></path></svg>
      </div>
      {isDrawerOpen && <NavDrawer onClose={closeDrawer} />}
    </div>
  );
};

export default Header;
