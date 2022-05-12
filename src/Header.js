import React from 'react'
import './Header.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TextField from '@mui/material/TextField';
import Profile from "./Profile";

function Header() {
    return (
        <div className='header'>    
            <div style={{display:"flex", alignItems: "center", columnGap: "5px"}}>         
                <img
                    className="header__icon"
                    src="https://pngimg.com/uploads/house/small/house_PNG73.png"
                    alt="Houseboon"
                />
                <h3>
                    HouseBoon
                </h3>
            </div> 
            <div className='header__right'>

                <h5 style={{
                    cursor: "pointer",
                    color: "#C2C2C2"
                }}>Check Tenancy Socre</h5>

                <TextField id="filled-basic" sx={{
                    marginRight: "10px"
                }} label="List Your Place" variant="outlined" />
                
                <NotificationsActiveIcon />
                <Profile />
            </div>
        </div>
    )
}

export default Header;