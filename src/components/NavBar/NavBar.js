import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import Logo from '../NavBar/Assets/Lift-Legit-Logo-Big.svg'
import '../NavBar/NavBar.css'

const NavBar = ({ totalItems }) => {
    const [show, handleShow] = useState(false);
    const location = useLocation();

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
        if(window.scrollY > 340){
            handleShow(true);
        }   else handleShow(false);
        
    });
    return () => {
        window.removeEventListener("scroll");
    };
}, []);
    return(
        <div className={`nav ${show && "nav__colored"}`}>
            <Typography component={Link} to="/">
            <img
                className="nav__logo navbar__button"
                src={Logo}
                alt="Lift Legit Idan Barzilay"></img>
                    </Typography>

                {location.pathname =='/' &&(
                    
                <div className="SCIcon navbar__button">
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton >

            </div>)}
        </div>
    );
}

export default NavBar
