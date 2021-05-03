import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DraweToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import logo from '../../../assets/logo.svg';



const toolbar = (props) =>(   
        
    
    <header className={classes.Toolbar}>
       <DraweToggle clicked={props.drawerToggleClicked} />
        <Logo height='80%' />
        <img src={logo} className="App-logo" alt="logo" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
    
)

export default toolbar;