import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Navbar/>
        {children}
        <br/>
        <p>This is the footer</p>

    </div>
  )
}

export default Layout