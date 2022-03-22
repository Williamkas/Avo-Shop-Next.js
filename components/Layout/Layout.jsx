import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <br/>
        <p>This is the footer</p>

    </div>
  )
}

export default Layout